import './styles/global.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";
import { Main } from './components/Main/index';
import { Signup } from './components/Signup/index';
import { Login } from './components/Login/index';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
