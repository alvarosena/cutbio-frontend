import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { Main } from './components/Main/index';
import { Signup } from './components/Signup/index';
import { Login } from './components/Login/index';
import { Profile } from './components/Profile/index';
import { BuyPro } from './components/BuyPro/index';
import { useState } from 'react';
import { AddLinkModal } from './components/AddLinkModal/index';

function App() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);


  const handleOpenAddLinkModal = () => {
    setIsAddLinkModalOpen(true);
  }

  const handleCloseAddLinkModal = () => {
    setIsAddLinkModalOpen(false);
  }

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pro" element={<BuyPro />} />
          <Route path="/alvarosena" element={<Profile openModal={handleOpenAddLinkModal} />} />
        </Routes>
      </Router>
      <AddLinkModal isOpenModal={isAddLinkModalOpen} isCloseModal={handleCloseAddLinkModal} />
      <Footer />
    </>
  );
}

export default App;
