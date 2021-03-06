import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { FormEvent, useContext, useState } from 'react';
import { parseCookies } from 'nookies';
import { api } from '../../services/api';
import axios from 'axios';

interface AddLinkModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function AddLinkModal(props: AddLinkModal) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { 'cutbio.token': token } = parseCookies();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      url,
    }

    api.post('/api/users/links', data, {
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
        <input value={name} className="input-url" onChange={(event) => setName(event.target.value)} type="text" placeholder="Titúlo" />
        <input value={url} className="input-url" onChange={(event) => setUrl(event.target.value)} type="text" placeholder="URL" />
        <button type="submit" className="btn-links">Adicionar link</button>
      </form>

    </Modal>
  )
}