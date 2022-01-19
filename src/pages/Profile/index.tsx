import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { MdModeEdit } from 'react-icons/md';

interface ProfileModal {
  openAddLinkModal: () => void;
  openEditProfileModal: () => void;
  openEditLinkModal: () => void;
}


export function Profile(props: ProfileModal) {
  const { user, links, isAuthenticated } = useContext(AuthContext);

  return (
    <section className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-social">
          <img src={user?.avatar_url} />
          <div className="user-info">
            <p>{user?.username}</p>
            <label onClick={props.openEditProfileModal} className="edit-user-info">
              <MdModeEdit />
            </label>
          </div>
          {
            links?.map(link => {
              return (
                <div className="profile-links">
                  <a target="_blank" href={link?.url}>{link?.name}</a>
                  <button onClick={props.openEditLinkModal} ><i><MdModeEdit /></i></button>
                </div>
              )
            })
          }
          <button onClick={props.openAddLinkModal} className="btn-add-link" >
            Adicionar link
          </button>
          <button onClick={props.openAddLinkModal} className="btn-add-link" >
            Remover link
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