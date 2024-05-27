// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './Content';
import AllTires from './pages/AllTires';
import { FilterTires } from './pages/filterTires/FilterTires';
import { FilterTiresList } from './pages/filterTires/componentsFilterTires/FilterTiresList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content>
          <Routes>
            <Route>
              <Route path="/" element={<AllTires />} />
              <Route path="/filter" element={<FilterTires />} />
              <Route path="/filter/:width/:profile/:diametr" element={<FilterTiresList />} />
            </Route>
          </Routes>
        </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
