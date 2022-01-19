import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import profileImg from '../../assets/profile.jpeg';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { api } from '../../services/api';

interface AddLinkModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function EditLinkModal(props: AddLinkModal) {
  const { links } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const { 'cutbio.token': token } = parseCookies();


  // const handleDeleteLink = async () => {
  //   await api.delete(`/api/users/links/${}`)
  // }


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
        <button type="submit" className="btn-edit-link">Editar</button>
        <button className="btn-delete-link">Remover link</button>
      </form>

    </Modal>
  )
}