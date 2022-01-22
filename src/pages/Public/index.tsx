import './styles.scss';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';


export function Public() {
  const [userInfo, setUserInfo] = useState([]);
  const [links, setLinks] = useState([]);
  const params = useParams();

  useEffect(() => {
    buildPage();
  }, [])

  const buildPage = async () => {
    try {

      const response = await api.get(`/api/users/${params.username}`);

      if (response && response.data) {
        setUserInfo(response.data);
        setLinks(response.data[1]);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="public-wrapper">
      <div className="public-container">
        <div className="public-social">
          {
            userInfo.map(info => {
              return (
                <>
                  <img key={info?.id} src={info?.avatar_url} />

                  <div className="public-info">
                    <p key={info?.id}>{info?.username}</p>
                  </div>
                </>
              )
            })
          }
          {
            links.map(link => {
              return (
                <div className="public-links">
                  <a target="_blank" href={link?.url}>{link?.name}</a>
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