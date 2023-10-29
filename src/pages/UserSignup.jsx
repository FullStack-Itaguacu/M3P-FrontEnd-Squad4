import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Estilização do contêiner principal
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Estilização para o título
const Title = styled.div`
  font-size: 30px;
  color: #014b7b;
  padding: 40px;
`;

// Estilização para o formulário
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
`;

// Estilização para uma linha de elementos
const Row = styled.div`
  display: flex;
`;

// Estilização para um campo de entrada
const InputWrapper = styled.div`
  flex: 1;
  margin: 10px;
  font-size: 15px;
  color: #6e6868;
  letter-spacing: 1px;
  input {
    width: 100%;
    border: none;
    height: 25px;
    border-bottom: 1px solid #014b7b;
  }
`;

// Estilização para uma linha divisória
const SectionDivider = styled.hr`
  border: 1px dotted #868484;
  margin: 50px 1%;
`;

// Estilização para o texto de endereço
const AddressLabel = styled.h5`
  margin: 10px;
  font-size: 15px;
  color: #6e6868;
  letter-spacing: 1px;
`;

// Estilização para o botão
const Btn = styled.button`
  background: #014b7b;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  width: 50%;
  height: 50px;
  cursor: pointer;
`;

// Estilização para o rodapé do formulário
const FormBtn = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

// Estilização para uma mensagem de erro
const ErrorSpan = styled.span`
  color: red;
  font-size: 10px;
`;

//esquema de validação
const schema = yup.object().shape({

    fullName: yup
        .string()
        .required('Campo Obrigatório'),

    cpf: yup
        .string()
        .required('Campo Obrigatório')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),

    birthDate: yup
        .string()
        .required('Campo Obrigatório'),

    email: yup
        .string()
        .required('Campo Obrigatório')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email inválido'),

    password: yup
        .string()
        .required('Campo Obrigatório')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
            'Senha inválida'
        )
        .min(8, 'A senha deve ter no mínimo 8 caracteres, letra maiúscula, minúscula, número e caractere especial'),

    phone: yup
        .string()
        .required('Campo Obrigatório')
        .matches(/^\(\d{3}\) \d{5}-\d{4}$/, 'Telefone inválido'),

    zip: yup
        .string()
        .required('Campo Obrigatório'),

    street: yup
        .string()
        .required('Campo Obrigatório'),

    numberStreet: yup
        .string()
        .required('Campo Obrigatório'),

    neighborhood: yup
        .string()
        .required('Campo Obrigatório'),

    city: yup
        .string()
        .required('Campo Obrigatório'),

    state: yup
        .string()
        .required('Campo Obrigatório'),
});

const UserSignup = () => {
    const navigate = useNavigate();
    const {
        register,
        setValue,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    //API CEP
    const checkZip = (e) => {
        const zip = e.target.value.replace(/\D/g, "");
        console.log(zip);
        fetch(`https://viacep.com.br/ws/${zip}/json/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setValue("street", data.logradouro);
                setValue("neighborhood", data.bairro);
                setValue("city", data.localidade);
                setValue("state", data.uf);
                setFocus("numberStreet");
            });
    };

    const onSubmit = async (formData) => {
        try {
            //Formata a data de nascimento
           const formattedBirthDate = formatBirthDate(formData.birthDate);

            if (!formattedBirthDate) {
                setErrorMessage('Data de nascimento inválida.');
                return;
            }
            const data = {
                user: {
                    fullName: formData.fullName,
                    cpf: formData.cpf.replace(/\D/g, ""),
                    birthDate: formattedBirthDate, // data formatada aqui
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone.replace(/\D/g, ""),
                },
                address: [{
                    zip: formData.zip,
                    street: formData.street,
                    numberStreet: formData.numberStreet.replace(/\D/g, ""),
                    neighborhood: formData.neighborhood,
                    city: formData.city,
                    state: formData.state,
                    complement: formData.complement,
                    lat: formData.lat,
                    long: formData.long.replace(/\D/g, ""),
                }]
            };

            const response = await axios.post('https://pcs-api-56ex.onrender.com/api/user/signup', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            console.log("Resposta do servidor:", response.data);
            alert("Seu cadastro foi realizado com sucesso.");
            // Redireciona o usuário para a página de login após um cadastro bem-sucedido
            navigate('/user/login');
        } catch (error) {
            console.log("Erro ao cadastrar:", error);

            if (error.response.status === 409) {
                alert("E-mail já cadastrado, tente contato com o suporte.");
            } else {
                alert("Erro ao cadastrar. Tente novamente mais tarde ou entre em contato com o suporte.");
            }
        }
    };

    // Função para formatar a data no formato "AAAA-MM-DD"
    function formatBirthDate(dateString) {
        const parts = dateString.split('/');
        if (parts.length === 3) {
            const [day, month, year] = parts;
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;
        }
        return null; // Retorne null se a data for inválida
    }

    return (
        <>
            <Header />
            <Container>
                <FormGroup>
                    <div>
                        <Title>Faça seu cadastro</Title>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <InputWrapper>
                                    <label>CPF:</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        maskChar={null}
                                        type="text"
                                        name="cpf"
                                        placeholder="000.000.000-00"
                                        {...register("cpf", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.cpf?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Nome Completo:</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Informe seu nome completo"
                                        {...register("fullName", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.fullName?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Data Nascimento:</label>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        type="text"
                                        name="birthDate"
                                        placeholder="DD/MM/AAAA"
                                        {...register("birthDate", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.birthDate?.message}</ErrorSpan>
                                </InputWrapper>
                            </Row>

                            <Row>
                                <InputWrapper>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@email.com"
                                        {...register("email", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.email?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Senha:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Informe sua senha"
                                        {...register("password", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.password?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Telefone:</label>
                                    <InputMask
                                        mask="(999) 99999-9999"
                                        maskChar={null}
                                        type="tel"
                                        name="phone"
                                        placeholder="(048) 99999-9999"
                                        {...register("phone", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.phone?.message}</ErrorSpan>
                                </InputWrapper>
                            </Row>

                            <SectionDivider />
                            <AddressLabel>Endereço:</AddressLabel>

                            <Row>
                                <InputWrapper>
                                    <label>CEP:</label>
                                    <InputMask
                                        mask="99999-999"
                                        maskChar={null}
                                        type="text"
                                        name="zip"
                                        placeholder="88888-888"
                                        {...register("zip", { required: true })}
                                        onBlur={checkZip}
                                    />
                                    <ErrorSpan>{errors?.zip?.message}</ErrorSpan>
                                </InputWrapper>
                            </Row>

                            <Row>
                                <InputWrapper>
                                    <label>Logradouro:</label>
                                    <input
                                        type="text"
                                        name="street"
                                        placeholder="Informe sua rua"
                                        {...register("street", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.street?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Número:</label>
                                    <input
                                        type="text"
                                        name="numberStreet"
                                        placeholder="Informe seu número"
                                        {...register("numberStreet", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.numberStreet?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Bairro:</label>
                                    <input
                                        type="text"
                                        name="neighborhood"
                                        placeholder="Informe seu Bairro"
                                        {...register("neighborhood", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.neighborhood?.message}</ErrorSpan>
                                </InputWrapper>
                            </Row>

                            <Row>
                                <InputWrapper>
                                    <label>Cidade:</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Informe sua cidade"
                                        {...register("city", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.city?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Estado:</label>
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="Informe seu estado"
                                        {...register("state", { required: true })}
                                    />
                                    <ErrorSpan>{errors?.state?.message}</ErrorSpan>
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Complemento:</label>
                                    <input
                                        type="text"
                                        name="complement"
                                        placeholder="Casa, partamento..."
                                        {...register("complement")}
                                    />
                                </InputWrapper>
                            </Row>

                            <Row>
                                <InputWrapper>
                                    <label>Latitude:</label>
                                    <input
                                        type="text"
                                        name="lat"
                                        placeholder="00.000000"
                                        {...register("lat")}
                                    />
                                </InputWrapper>

                                <InputWrapper>
                                    <label>Longitude:</label>
                                    <input
                                        type="text"
                                        name="long"
                                        placeholder="00.000000"
                                        {...register("long")}
                                    />
                                </InputWrapper>
                            </Row>

                            <FormBtn>
                                <Btn type="submit">Cadastrar</Btn>
                            </FormBtn>
                        </form>
                    </div>

                </FormGroup>
            </Container>
        </>
    );
};
export default UserSignup;