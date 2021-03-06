import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAddAPhoto } from 'react-icons/md';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { api } from '../../services/api';

interface EditProfileModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function EditProfileModal(props: EditProfileModal) {
  const [avatar, setAvatar] = useState([]);
  const { 'cutbio.token': token } = parseCookies();
  const { 'cutbio.username': username } = parseCookies();
  const myUrl = `https://cutbio.herokuapp.com/${username}`

  const onInputChange = (event) => {
    setAvatar(event.target.files)
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const data = new FormData();

    for (let i = 0; i < avatar.length; i++) {
      data.append('avatar', avatar[i]);
    }

    api.put(`/api/users/${username}/avatar`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => console.log(res.data));
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
        <h2>Perfil</h2>
      </header>

      <form onSubmit={handleSubmit} className="modal-form">
        <label className="upload-user-avatar">
          <input type="file" onChange={onInputChange} />
          <i><MdAddAPhoto /></i>
        </label>
        <input type="text" name="username" placeholder="Novo nome de usuário" />
        <button type="submit" className="btn-update-profile">Atualizar perfil</button>
      </form>

    </Modal>
  )
}