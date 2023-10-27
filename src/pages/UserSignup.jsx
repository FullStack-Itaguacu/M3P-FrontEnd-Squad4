import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Header from '../components/Header';
import React, { useState } from "react";
import axios from 'axios';

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


const schema = yup.object().shape({
    cpf: yup
        .string()
        .required('Campo Obrigatório')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),

    fullName: yup
        .string()
        .required('Campo Obrigatório'),

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
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
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
    const {
        register,
        setValue,
        handleSubmit,
        setFocus,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3333/api/user/signup", data);

            if (response.status === 201) {
                setSuccessMessage('Seu cadastro foi realizado com sucesso.');
            } else {
                setErrorMessage('Erro ao cadastrar. Tente novamente mais tarde ou entre em contato com o suporte.');
            }
        } catch (error) {
            setErrorMessage('Erro ao cadastrar. Tente novamente mais tarde ou entre em contato com o suporte.');
        }
    };

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