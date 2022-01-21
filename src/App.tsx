import './styles/global.scss';
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { useState } from 'react';
import { AddLinkModal } from './components/AddLinkModal/index';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { EditProfileModal } from './components/EditProfileModal/indext';

function App() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);

  const handleOpenAddLinkModal = () => {
    setIsAddLinkModalOpen(true);
  }

  const handleCloseAddLinkModal = () => {
    setIsAddLinkModalOpen(false);
  }

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  }

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  }

  const handleOpenEditLinkModal = () => {
    setIsEditLinkModalOpen(true);
  }

  const handleCloseEditLinkModal = () => {
    setIsEditLinkModalOpen(false);
  }

  return (
    <>
      <AuthProvider>
        <Header />
        <AppRoutes
          handleAddLinkOpenModal={handleOpenAddLinkModal}
          handleEditProfileOpenModal={handleOpenEditProfileModal}
          handleEditLinkOpenModal={handleOpenEditLinkModal}
        />
        <AddLinkModal isOpenModal={isAddLinkModalOpen} isCloseModal={handleCloseAddLinkModal} />
        <EditProfileModal isOpenModal={isEditProfileModalOpen} isCloseModal={handleCloseEditProfileModal} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
