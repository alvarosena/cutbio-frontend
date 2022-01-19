import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../components/Main/index';
import { Signup } from '../pages/Signup/index';
import { Login } from '../pages/Login/index';
import { Profile } from '../pages/Profile/index';
import { BuyPro } from '../pages/BuyPro/index';

interface Modal {
  handleAddLinkOpenModal(): void;
  handleEditProfileOpenModal(): void;
  handleEditLinkOpenModal(): void;
}

export function AppRoutes(props: Modal) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pro" element={<BuyPro />} />
        <Route path="/profile" element={<Profile
          openAddLinkModal={props.handleAddLinkOpenModal}
          openEditProfileModal={props.handleEditProfileOpenModal}
          openEditLinkModal={props.handleEditLinkOpenModal}
        />} />
      </Routes>
    </Router>
  )
}