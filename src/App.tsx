import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content } from './Content'
import AllTires from './pages/allTires/AllTires'
import CreateTire from './pages/createTire/CreateTire'
import FilterTires from './pages/filterTires/FilterTires'
import StartPage from './pages/startPage/StartPage'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Content>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/all" element={<AllTires />} />
            <Route path="/create" element={<CreateTire />} />
            <Route path="/filter" element={<FilterTires />} />
          </Routes>
        </Content>
      </BrowserRouter>

    </div>
  );
}

export default App;
