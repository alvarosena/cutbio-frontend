import './styles.scss';
import profileImg from '../../images/profile.jpeg';
import { AiFillEdit } from 'react-icons/ai';

interface AddNewLinkModal {
  openModal: () => void;
}

export function Profile(props: AddNewLinkModal) {

  return (
    <section className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-social">
          <img src={profileImg} />
          <p>@alvarosena</p>
          <a href="">Instagram</a>
          <a href="">Portfolio</a>
          <a href="">Youtube</a>
          <button className="btn-add-link" onClick={props.openModal} >
            <AiFillEdit /> Adicionar link
          </button>
        </div>
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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}