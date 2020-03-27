import React from 'react'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

import './style.css'

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className='button' to = '/incident/new'>Cadastrar novo caso</Link>
                <button type='button'> ❌ </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descriçao qualquer para testar</p>

                    <strong>VALOR:</strong>
                    <p>R$: 150,00</p>
                    <button type='button'>
                       🗑 
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descriçao qualquer para testar</p>

                    <strong>VALOR:</strong>
                    <p>R$: 150,00</p>
                    <button type='button'>
                       🗑
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descriçao qualquer para testar</p>

                    <strong>VALOR:</strong>
                    <p>R$: 150,00</p>
                    <button type='button'>
                       🗑
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>descriçao qualquer para testar</p>

                    <strong>VALOR:</strong>
                    <p>R$: 150,00</p>
                    <button type='button'>
                       🗑
                    </button>
                </li>
            </ul>
        </div>
    )
}