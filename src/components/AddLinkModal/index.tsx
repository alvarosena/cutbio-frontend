import './styles.scss';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import alvaroImg from '../../images/profile.jpeg';

interface AddLinkModal {
  isOpenModal: boolean;
  isCloseModal: () => void;
}

export function AddLinkModal(props: AddLinkModal) {

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

      <form className="modal-form">
        <img className="avatar" src={alvaroImg} />
        <p>@alvarosena</p>
        <input className="input-url" type="text" placeholder="Nome do link" />
        <input className="input-url" type="text" placeholder="URL" />
        <button className="btn-links">Adicionar link</button>
      </form>

    </Modal>
  )
}