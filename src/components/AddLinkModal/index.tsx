import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import profileImg from '../../assets/profile.jpeg';
import { FormEvent, useState } from 'react';

interface AddLinkModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function AddLinkModal(props: AddLinkModal) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      url,
    }

    console.log(data);
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
        <img className="avatar" src={profileImg} />
        <p>@alvarosena</p>
        <input value={name} className="input-url" onChange={(event) => setName(event.target.value)} type="text" placeholder="Nome do link" />
        <input value={url} className="input-url" onChange={(event) => setUrl(event.target.value)} type="text" placeholder="URL" />
        <button type="submit" className="btn-links">Adicionar link</button>
      </form>

    </Modal>
  )
}