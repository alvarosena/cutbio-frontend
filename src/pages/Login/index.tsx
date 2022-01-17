import './styles.scss';
import { BsGoogle } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FormEvent, useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data);
  }

  return (
    <section className="login">
      <div className="login-container">
        <h1>Bem vindo novamente!</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" placeholder="fulano@tal.com" autoFocus />
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Sua senha" autoFocus />
          <button className="btn-sign-in" type="submit" >Entrar na conta</button>
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

    </section >
  )
}