import './style/navbar.css';import React from 'react';

function Navbar(){
    
        return(
            <section>
                <nav >
                    <a href="#">logo</a>
                    <ul className="menu">
                        <a href="#quem-somos"><li>Quem somos</li></a>
                        <a href="#"><li> Como Funciona</li></a>
                        <a href="#parceiros"><li> Parceiros</li></a>
                        <a href="#funciona-para-mim"><li className='funciona-para-mim-actived'> Funciona para mim</li></a>
                        <a href="#"><li id="desejo-participar-btn">Desejo participar</li></a>
                    </ul>
                </nav>
            </section>

        );
    
        
};


export default Navbar;