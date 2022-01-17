import './styles/global.scss';
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { useState } from 'react';
import { AddLinkModal } from './components/AddLinkModal/index';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';

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
      <AuthProvider>
        <Header />
        <AppRoutes />
        <AddLinkModal isOpenModal={isAddLinkModalOpen} isCloseModal={handleCloseAddLinkModal} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
