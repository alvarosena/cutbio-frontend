import './styles.scss';
import logoImg from '../../images/logo.png';
import { MdAccountCircle } from 'react-icons/md';

export function Header() {
  const redirect = () => {
    window.location.href = "/";
  }

  return (
    <header className="header">

      <div className="header-container">
        <img onClick={redirect} src={logoImg} alt="logo cutbio" />

        <nav className="nav-bar">
          <ul>
            <li><a href="/sign-up">Criar conta</a></li>
            <li><a href="/login">Entrar na conta</a></li>
            <li><a href="/pro">Torne-se pro</a></li>
          </ul>
        </nav>
        <ul className="profile">
          <li><a href="/alvarosena"><MdAccountCircle /></a></li>
        </ul>
      </div>


    </header>
  )
}