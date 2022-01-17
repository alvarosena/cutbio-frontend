import './styles.scss';
import logoImg from '../../assets/logo.png';
import profileImg from '../../assets/profile.jpeg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { destroyCookie, parseCookies } from 'nookies';

export function Header() {
  const { user } = useContext(AuthContext);

  const redirect = () => {
    window.location.href = "/";
  }

  const handleLogout = () => {
    const { 'cutbio.token': token } = parseCookies();

    destroyCookie(null, 'cutbio.token', token);
  }

  return (
    <header className="header">

      <div className="header-container">
        <img onClick={redirect} src={logoImg} alt="logo cutbio" />

        <nav className="nav-bar">
          <ul>
            <li><a href="/sign-up">Criar conta</a></li>
            <li><a href="/login">Entrar</a></li>
            <li><a href="/pro">Torne-se pro</a></li>
            <li><a onClick={handleLogout} href="/login">Sair</a></li>
          </ul>
        </nav>
        <div className="profile">
          <a href="/profile" ><img src={user?.avatar_url} /></a>
        </div>
      </div>


    </header>
  )
}