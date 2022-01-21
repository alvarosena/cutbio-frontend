import './styles.scss';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { destroyCookie, parseCookies } from 'nookies';
import { MdAccountCircle } from 'react-icons/md';

export function Header() {
  const { user } = useContext(AuthContext);

  const redirect = () => {
    window.location.href = "/";
  }

  const handleLogout = () => {
    const { 'cutbio.token': token, 'cutbio.username': username } = parseCookies();

    destroyCookie(null, 'cutbio.token', token);
    destroyCookie(null, 'cutbio.username', username);
  }

  return (
    <header className="header">

      <div className="header-container">
        {/* <img className="logo" onClick={redirect} src={logoImg} alt="logo cutbio" /> */}

        <nav className="nav-bar">
          <ul>
            <li><a href="/sign-up">Criar conta</a></li>
            <li><a href="/login">Entrar</a></li>
            <li><a href="/pro">Torne-se pro</a></li>
            <li><a onClick={handleLogout} href="/login">Sair</a></li>
          </ul>
        </nav>
        <div className="profile">
          {
            !user?.email ? <a href="/login"><i className="i-profile-none" ><MdAccountCircle /></i></a> :

              <a href="/profile" >
                {
                  user?.avatar_url ? <img src={user?.avatar_url} /> :
                    <i className="i-profile-none" ><MdAccountCircle /></i>
                }

              </a>
          }
        </div>
      </div>


    </header>
  )
}