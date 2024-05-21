import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from './Content'
import AllTires from './pages/AllTires'

function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      <Content>
        <Routes>
          <Route>
          <Route path="/" element={<AllTires/>} />
          </Route>
        </Routes>
        
      </Content>
      </BrowserRouter>
     
    </div>
  )
}

export default App
