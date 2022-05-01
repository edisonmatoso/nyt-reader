import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Article, Articles } from './pages'

function NotFound() {
  return <p>Not found page</p>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/article" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
