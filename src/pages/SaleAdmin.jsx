import React from 'react';

const sampleSalesData = [
  {
    productId: 1,
    productName: 'Produto A',
    quantitySold: 100,
    unitPrice: 10,
    totalValue: 1000,
    productImage: 'URL_da_imagem_A',
  },
  {
    productId: 2,
    productName: 'Produto B',
    quantitySold: 50,
    unitPrice: 20,
    totalValue: 1000,
    productImage: 'URL_da_imagem_B',
  },
  // Adicione mais vendas fictícias aqui...
];

function AdminSalesPage() {
  return (
    <div>
      {sampleSalesData.map(sale => (
        <div key={sale.productId} className="sale-card">
          <img src={sale.productImage} alt={sale.productName} />
          <div className="product-info">
            <h3>{sale.productName}</h3>
            <p>Quantidade Vendida: {sale.quantitySold}</p>
            <p>Preço Unitário: ${sale.unitPrice}</p>
            <p>Valor Total: ${sale.totalValue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminSalesPage;
