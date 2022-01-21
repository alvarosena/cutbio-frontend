import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { MdModeEdit } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { api } from '../../services/api';
import { parseCookies } from 'nookies';

interface ProfileModal {
  openAddLinkModal: () => void;
  openEditProfileModal: () => void;
  openEditLinkModal: () => void;
}


export function Profile(props: ProfileModal) {
  const { user, links, isAuthenticated } = useContext(AuthContext);
  const { 'cutbio.token': token } = parseCookies();


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
                  <a key={link?.id} target="_blank" href={link?.url}>{link?.name}</a>
                  <i className="i-delete-link" onClick={() => {
                    api.delete(`/api/users/links/${link.id}`, {
                      headers: {
                        Authorization: `Bearer ${token}`
                      }
                    });

                    window.location.reload();
                  }}><GrClose /></i>
                </div>
              )
            })
          }
          <button onClick={props.openAddLinkModal} className="btn-add-link" >
            Adicionar link
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