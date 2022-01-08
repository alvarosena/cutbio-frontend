import './styles.scss';

export function Signup() {
  return (
    <section className="sign-up">
      <div className="sign-up-container">
        <h1>Crie a sua conta de graça!</h1>
        <form action="" className="form">
          <input type="text" name="username" placeholder="https://cutbio.site/seunome" autoFocus />
          <input type="email" name="email" placeholder="fulano@tal.com" autoFocus />
          <input type="password" name="password" placeholder="Defina a sua senha" autoFocus />
          <button className="btn-sign-up">Criar conta</button>
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