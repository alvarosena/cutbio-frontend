import './styles.scss';

export function Main() {
  const redirect = () => {
    window.location.href = "/sign-up";
  }

  return (
    <main className="main">
      <div className="main-container">
        <h1>Vários links em somente um!</h1>
        <p>Já criou a sua conta? <a href="/login">Log in</a></p>
        <button onClick={redirect} className="btn-get-started">COMECE GRÁTIS</button>
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