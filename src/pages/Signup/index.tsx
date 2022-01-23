import './styles.scss';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import undrawSvg from '../../assets/undraw_details_8k13.svg';

export function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      username,
      email,
      password
    }

    api.post('/api/users', data);
    window.location.href = '/login';
  }

  return (
    <section className="sign-up">
      <img className="undrawSvg" src={undrawSvg} />
      <div className="sign-up-container">
        <h1>Crie a sua conta!</h1>
        <form action='' className="form" onSubmit={signUp}>
          <p>Nome de usuário</p>
          <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" autoFocus required />
          <p>E-mail</p>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" autoFocus />
          <p>Senha</p>
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" autoFocus />
          <p>Já criei a minha conta! <a href="/login">Login</a></p>
          <button className="btn-sign-up" type="submit">Criar conta</button>
        </form>
      </div>
    </section>
  )
}