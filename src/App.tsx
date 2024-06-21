import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './Content';
import AllTires from './pages/allTires/AllTires';
import CreateTire from './pages/createTire/CreateTire';
import Filter from './pages/filterTires/Filter';
import StartPage from './pages/startPage/StartPage';
import { SignInForm } from './pages/signInPage';
import { RegistrationForm } from './pages/registrationPage';
import { TireComponent } from './pages/tireDetailPage/tireDetailPage';
import NewsList from './pages/newsPage/allnews';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Content>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/all" element={<AllTires />} />
            <Route path="/create" element={<CreateTire />} />
            <Route path="/signIn" element={<SignInForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/filter" element={<FilterTires />} />
            <Route path="/tireDetail" element={<TireComponent id={19} />} />
            <Route path="/allnews" element={<NewsList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
