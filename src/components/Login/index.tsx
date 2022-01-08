import './styles.scss';

export function Login() {
  return (
    <section className="login">
      <div className="login-container">
        <h1>Bem vindo novamente</h1>
        <form action="" className="form">
          <input type="text" name="username" placeholder="Nome de usuário" autoFocus />
          <input type="password" name="password" placeholder="Sua senha" autoFocus />
          <button className="btn-sign-up">Entrar na conta</button>
        </form>

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
        </ul>
      </div>

    </section>
  )
}