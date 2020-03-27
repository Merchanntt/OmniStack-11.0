import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

import './style.css'

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o seu caso detalhadamente, e encontre um herói que possa salvar o dia!</p>

                < Link className='back-link' to="/profile">◾️ Voltar para home</Link>
            </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição do caso" />
                    <input placeholder="Valor em reais"/>

                    <button className='button' type="submit">Cadastrar Caso</button>
                </form>
            </div>
        </div>   
    )
}