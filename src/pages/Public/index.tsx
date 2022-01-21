import './styles.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { MdAccountCircle } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { api } from '../../services/api';
import { parseCookies } from 'nookies';
interface ProfileModal {
  openAddLinkModal: () => void;
  openEditProfileModal: () => void;
  openEditLinkModal: () => void;
}


export function Public() {
  const { user, } = useContext(AuthContext);
  const [links, setLinks] = useState([]);
  const { 'cutbio.token': token } = parseCookies();

  useEffect(() => {
    buildPage();
  }, [])

  const buildPage = async () => {
    try {
      const { 'cutbio.username': username } = parseCookies();

      const response = await api.get(`/api/users/${username}/links`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response && response.data) {
        setLinks(response.data);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  const deleteLink = async (linkId: string) => {
    try {
      await api.delete(`/api/users/links/${linkId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      buildPage();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-social">
          {
            user?.avatar_url ? <img src={user?.avatar_url} /> :
              <i className="i-profile-none"><MdAccountCircle /></i>
          }
          <div className="user-info">
            <p>@{user?.username}</p>
          </div>
          {
            links?.map(link => {
              return (
                <div className="profile-links">
                  <a key={link?.id} target="_blank" href={link?.url}>{link?.name}</a>
                </div>
              )
            })
          }

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