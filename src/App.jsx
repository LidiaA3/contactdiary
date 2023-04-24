import { Route, Routes } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Contacts from './views/Contacts'
import Chat from './views/Chat'
import Settings from './views/Settings'

function App() {
  return (
    <>
      <header>
        <h1>Agenda de contactos</h1>
      </header>
      <main>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  )
}

export default App
