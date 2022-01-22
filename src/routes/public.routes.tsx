import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Public } from '../pages/Public/index';

export function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Public />}></Route>
      </Routes>
    </Router>
  )
}