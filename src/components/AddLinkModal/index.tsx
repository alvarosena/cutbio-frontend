import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import profileImg from '../../assets/profile.jpeg';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { parseCookies } from 'nookies';

interface AddLinkModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function AddLinkModal(props: AddLinkModal) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { 'cutbio.token': token } = parseCookies();

  const handleSubmit = (event: FormEvent) => {
    const data = {
      name,
      url,
    }

    axios.post('http://localhost:4000/api/users/links', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return (
    <Modal
      isOpen={props.isOpenModal}
      onRequestClose={props.isCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        className="react-modal-close"
        onClick={props.isCloseModal}
      >
        <AiOutlineClose />
      </button>

      <header>
        <h2>Adicionar um novo link</h2>
      </header>

      <form onSubmit={handleSubmit} className="modal-form">
        <img className="avatar" src={user?.avatar_url} />
        <p>{user?.username}</p>
        <input value={name} className="input-url" onChange={(event) => setName(event.target.value)} type="text" placeholder="Titúlo" />
        <input value={url} className="input-url" onChange={(event) => setUrl(event.target.value)} type="text" placeholder="URL" />
        <button type="submit" className="btn-links">Adicionar link</button>
      </form>

    </Modal>
  )
}