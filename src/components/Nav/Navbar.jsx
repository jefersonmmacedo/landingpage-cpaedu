import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/Logo.png'
import LogoSimbol from '../../assets/images/Simbol.png'
import {IoDocumentTextOutline, IoPersonOutline, IoHeartOutline, IoNotificationsOutline, IoLogOutOutline, IoClipboardOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description)



  .logo {
    padding: 15px 0;
  }
  .logo a img {
    height: 40px;
  }
  .logo2 {
    display: none;
  }

  .account {
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--Text2);
    text-decoration: none;
    list-style: none;
  }

  .account li {
    padding: 18px 10px;
    font-weight: 700;
    text-decoration: none;
  }
  .account li a{
    text-decoration: none;
    color: var(--Primary)
    font-weight: 700;
  }
  .account li a:hover{
    color: var(--Primary);
  }

  .account button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    background-color: var(--Button);
    font-weight:500;
    color: var(--White);
}
  .account .iconUnic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: var(--Background);
    font-weight:600;
    color: var(--Primary);
    font-size:18px;
    margin:5px 5px;
}
  .account .iconOut {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: var(--Background);
    font-weight:600;
    color: var(--Primary);
    font-size:18px;
    margin:5px 5px;
}


@media (max-width: 800px) {
  padding: 0 10px;
  .account {
    margin-right: 110px;
    width: 15%;
    justify-content: center;
  }


  @media (max-width: 650px) {

    .account .iconOut {
      display: none;
  }

    .logo {
      display: none;
    }
    .logo2 {
      display: block;
      padding: 15px 0;
    }
    .logo2 a img {
      height: 30px;
    }
  }
}

`

const Navbar2 = () => {
  const logged = true;
  const professional = true;
  return (
    <Nav>
      <div className="logo">
        <a href="/">
      <img src={LogoImg} alt="Logo CPA Educacional" />
        </a>
      </div>
      <div className="logo2">
        <a href="/">
      <img src={LogoSimbol} alt="Logo CPA Educacional" className='simbol'/>
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar2
