import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-weight: 500;
    cursor: pointer;
    color: var(--Primary);
  }
  li a{
    text-decoration: none;
    color: var(--White);
    font-weight: 500;
  }
  li:hover{
    color: var(--Magenta);-
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Magenta);
    border-radius: 6px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;

  }

  button:hover{
    background-color: var(--Primary);
    color: var(--White);
  }

  @media (max-width: 800px) {
    flex-flow: column nowrap;
    background: var(--Primary);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 5px;
      margin: 10px;
      color: var(--White);
    }
    li a {
      color: var(--White);
    }
    li a:hover {
      color: var(--Magenta);
    }

    .btn{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color:  var(--Secondary);
      margin-left: 10px;
      margin-right: 10px;
      padding: 10px 0;
    }
    .btn svg {
      margin-right: 1px;
    }

    .btn:hover{
      background-color: var(--Blue);
    }
  }

  }
`;

function HandleOpen(e) {
  e.preventDefault();
  window.open("https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre cursos")
}

const RightNav = ({ open }) => {

  function smoothScroll(data){
    document.querySelector(`.${data}`).scrollIntoView({
        behavior: 'smooth'
    });
}

  return (
    <Ul open={open}>
       <li className='nav-item' onClick={() => smoothScroll("TopHome")}>
              Início
          </li>
          <li className='nav-item' onClick={() => smoothScroll("about")}>
            Sobre Nós
          </li>
          <li className='nav-item' onClick={() => smoothScroll("depoimentUnic")}>
            Depoimentos
          </li>
       <li className='nav-item' onClick={() => smoothScroll("Infos")}>
            Pré-Matricula
          </li>
          <li className='nav-item' onClick={() => smoothScroll("footer")}>
            Contato
          </li>
          <button onClick={HandleOpen}>Whatsapp</button>      
    </Ul>
  )
}

export default RightNav
