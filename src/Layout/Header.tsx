import './style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  function handleClickCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/cart');
  }

  function handleClickSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/signIn');
  }

  function handleClickSignUp(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/registration');
  }

  function renderAdmin() {
    return (
      <>
        <li>
          <NavLink to="/create" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
            Создать Шину
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a>О наc</a>
          </li>
          <li>
            <a>Контакты</a>
          </li>
          <li>
            <a>Заказ счета</a>
          </li>
          <li>
            <a>Оплата</a>
          </li>
          <li>
            <a>Гарантия</a>
          </li>
          <li>
            <a>Доставка</a>
          </li>
          <li>
            <a>Акции</a>
          </li>
          <li>
            <a>Отзывы</a>
          </li>
          <li>
            <NavLink to="/allnews" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              Новости
            </NavLink>
          </li>
          {admin ? renderAdmin() : <></>}
        </ul>
        <div>
          <p>
            (44) 66 - 23 - 345 <br /> <span>Обратный звонок</span>
          </p>
          <button className="sign-up" onClick={handleClickSignUp}>
            Зарегистрироваться <FontAwesomeIcon icon={faAddressCard} />
          </button>
          <button className="sign-in" onClick={handleClickSignIn}>
            Войти <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </nav>
      <hr />
      <div className="info">
        <p className="info__title">
          <NavLink to="/">Insa Turbo</NavLink>
        </p>
        <ul>
          <li>
            <NavLink to="/all" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              легковые шины
            </NavLink>
          </li>
          <li>грузовые шины</li>
          <li>
            <NavLink to="/all" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              легковые диски
            </NavLink>
          </li>
        </ul>
        <input className="info__search" type="search" placeholder="Поиск"></input>
        <button className="info__cart" onClick={handleClickCart}>
          Корзина <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <select className="info__lang">
          <option value="0">рус</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
