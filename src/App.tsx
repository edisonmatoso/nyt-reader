import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Article, Articles } from './pages'
import { Content, Header } from './App.styles'

function NotFound() {
  return <p>Not found page</p>
}

function App() {
  return (
    <div className="App">
      <Header>{'"The New York Times" article search application'}</Header>
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/:documentType/:id" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </div>
  )
}

export default App
