import './styles.scss';
import { FormEvent, useState } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { api } from '../../services/api';
import axios from 'axios';

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
    // axios.post('https://cutbio-backend.herokuapp.com/api/users', data);
    window.location.href = '/login';
  }

  return (
    <section className="sign-up">
      <div className="sign-up-container">
        <h1>Crie a sua conta!</h1>
        <form action='' className="form" onSubmit={signUp}>
          <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="username" placeholder="https://cutbio.site/seunome" autoFocus required />
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" placeholder="fulano@tal.com" autoFocus />
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Defina a sua senha" autoFocus />
          <button className="btn-sign-up" type="submit">Criar conta</button>
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