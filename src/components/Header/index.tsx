import './styles.scss';
import logoImg from '../../images/logo.png';

export function Header() {
  return (
    <header className="header">

      <div className="header-container">
        <img src={logoImg} alt="logo cutbio" />

        <nav className="nav-bar">
          <ul>
            <li><a href="/sign-up">Criar conta</a></li>
            <li><a href="/login">Entrar na conta</a></li>
            <li><a href="/pro">Torne-se pro</a></li>
          </ul>
        </nav>
      </div>

    </header>
  )
}