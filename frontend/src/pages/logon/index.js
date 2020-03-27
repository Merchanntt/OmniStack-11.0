import React from 'react'
//import { FilogIn } from 'react/icon/fi'  < FilogIn size={16} color= "#E02041" />
import { Link } from 'react-router-dom'

import './style.css'

import heroesLogo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function logon(){
    return (
        <div className= "logon-container">
            <section className='form'>
                <img src= {heroesLogo} alt= 'Be The Hero' />
                
                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" classtype="submit">Entrar</button>

                    <Link className="back-link"to="/register">
            
                    ◾️ Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src= {heroesImg} alt= 'Heroes' />
        </div>
    )
}