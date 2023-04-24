import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'

import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <>
      <header>
        <h1>Proyecto Gamma</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Topbar />
      </main>
    </>
  )
}

export default App
