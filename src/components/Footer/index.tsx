import './styles.scss';
import { MdPolicy } from 'react-icons/md';
import { BsLockFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="terms">
          <a href="">Termos e condições</a>
          <br />
          <a href="">Politica e privacidade</a>
        </div>

        <div className="social">
          <div className="icons">
            <a target="_blank" href="https://instagram.com/cutbio.site"><i><BsInstagram /></i></a>
            <a href=""><i><BsFacebook /></i></a>
          </div>
          <div className="text">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}