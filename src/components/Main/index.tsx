import './styles.scss';
import homeImg from '../../assets/home.png';

export function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <h1 className="share-h1">Compartilhe os seus</h1>
        <div className="flex-heading">
          <h1 className="heading-links">Links!</h1>
        </div>
        <div className="flex-about">
          <img className="homeImg" src={homeImg} />
          <div className="flex-about-p">
            <h1>Simples</h1>
            <p>
              Acreditamos que a melhor a experiência que o usuário pode
              ter é, nevegar em um <em>layout</em> simples, facil e rapído!
            </p>
            <h1>Minimalista</h1>
            <p>
              Um <em>layout</em> com cores minimalistas e modernas!
            </p>
            <p>Já criou a sua conta? <a href="/login">Log in</a></p>
            <a href="/sign-up" className="link-get-started">COMECE GRÁTIS</a>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  )
}