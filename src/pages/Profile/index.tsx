import './styles.scss';
import profileImg from '../../assets/profile.jpeg';
import { AiFillEdit } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

interface AddNewLinkModal {
  openModal: () => void;
}


export function Profile() {
  const { user, links, isAuthenticated } = useContext(AuthContext);

  return (
    <section className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-social">
          <img src={user?.avatar_url} />
          <p>{user?.username}</p>
          {
            links?.map(link => {
              return (
                <a target="_blank" href={link?.url}>{link?.name}</a>
              )
            })
          }
          <button className="btn-add-link" >
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
    </section >
  )
}