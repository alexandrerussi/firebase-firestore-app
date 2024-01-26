import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';
import "./AddProductForm.css";

function AddProductForm() {
    const [titulo, setTitulo] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!titulo || !preco || !categoria) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            await addDoc(collection(db, 'produtos'), {
                titulo,
                preco,
                categoria
            });
            setTitulo('');
            setPreco('');
            setCategoria('');
        } catch (error) {
            console.error('Erro ao adicionar produto: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                className='inputField'
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
            />
            <input
                className='inputField'
                type="text"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
            />
            <input
                className='inputField'
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder="Categoria"
            />
            <button className='submitButton' type="submit">Adicionar Produto</button>
        </form>
    );
}

export default AddProductForm;
