import {
  Routes,
  Route
} from 'react-router-dom'

import {
  Container
} from 'react-bootstrap'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Preloader from './containers/Preloader'
import Toast from './components/Toast'

import './App.css'

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Preloader />
      {/* <Toast /> */}
    </Container>
  );
}

export default App;
