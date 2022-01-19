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

export function EditLinkModal(props: AddLinkModal) {
  const { user, links } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { 'cutbio.token': token } = parseCookies();

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
        <h2>Editar link</h2>
      </header>

      <form className="modal-form">
        <input value={name} className="input-url" onChange={(event) => setName(event.target.value)} type="text" placeholder="Novo Titúlo" />
        <input value={url} className="input-url" onChange={(event) => setUrl(event.target.value)} type="text" placeholder="Nova URL" />
        <button type="submit" className="btn-links">Editar</button>
      </form>

    </Modal>
  )
}