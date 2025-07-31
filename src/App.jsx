import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>App</h1>
      <Router>
        <Link to='/home'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/contact'>Contact</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cake/ahmedabad' element={<h1>Ahmedabad Cake</h1>} />
          <Route path='/cake/surat' element={<h1>Surat Cake</h1>} />
          <Route path='*' element={<h1>404 File Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;