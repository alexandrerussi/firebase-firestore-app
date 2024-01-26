/* Products.js */
import React, { useEffect, useState } from 'react';
import db from './firebase'; // Ajuste o caminho conforme necessário
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import "./Products.css";

// Função para excluir um produto
async function deleteProduct(id) {
    const productDocRef = doc(db, 'produtos', id);
    await deleteDoc(productDocRef);
}

function confirmDelete(id) {
    if (window.confirm("Deseja realmente apagar esse produto?")) {
        deleteProduct(id);
    }
}


function Products() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtosCollectionRef = collection(db, 'produtos');
        const unsubscribe = onSnapshot(produtosCollectionRef, (snapshot) => {
            const produtosData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProdutos(produtosData);
        });

        // Limpeza da subscrição
        return unsubscribe;
    }, []);


    return (
        <div className="productsContainer">
            {produtos.map(produto => (
                <div key={produto.id} className="productCard">
                    <div className="productTitle">{produto.titulo}</div>
                    <div className="productPrice">R$ {produto.preco}</div>
                    <div className="productCategory">{produto.categoria}</div>
                    <button className="deleteButton" onClick={() => confirmDelete(produto.id)}>
                        Excluir
                    </button>
                </div>
            ))}
        </div>
    );

}

export default Products;
