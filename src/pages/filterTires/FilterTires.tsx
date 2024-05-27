import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FilterTires.css';


function FilterTires() {
  const [width, setWidth] = useState('205');
  const [profile, setProfile] = useState('55');
  const [diametr, setDiametr] = useState('16');
  const navigate = useNavigate();

  function handleChangeWidth(event: React.ChangeEvent<HTMLSelectElement>) {
    setWidth(event.target.value);
  }

  function handleChangeProfile(event: React.ChangeEvent<HTMLSelectElement>) {
    setProfile(event.target.value);
  }

  function handleChangeDiametr(event: React.ChangeEvent<HTMLSelectElement>) {
    setDiametr(event.target.value);
  }

  function handleClickSearch() {
    navigate(`/filter/${width} /${profile} /${diametr}`);
  }

  return (
    <div className="filter-tires">
      <div className="header-selector">
        <ul>
          <li>
            Поиск шин <strong>по размеру</strong>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <div className="product-type">
          <p>Автомобильные шины</p>
          <picture>
            <source media="(max-width: 959px)" srcSet="/gfx/common/blank.gif" type="image/gif"></source>
            <source media="(min-width: 960px)" srcSet="/gfx/common/big-car-tire-summer.webp" type="image/webp"></source>
            <source media="(min-width: 960px)" srcSet="/gfx/common/big-car-tire-summer.png" type="image/png"></source>
            <img src="https://www.oponeo.pl/gfx/common/big-car-tire-summer.webp" width="211" height="472" alt="Автомобильные шины"></img>
          </picture>
        </div>
        <div className="tab-content">
          <div className="choose-width">
            <label htmlFor="width">Ширина</label>
            <select name="_carTires_ctTS_ddlDimWidth" id="width" defaultValue="205" onChange={handleChangeWidth}>
              <option value="__NULL__">Выбирать</option>
              <option value="1.40">1.40</option>
              <option value="4.00">4.00</option>
              <option value="5.00">5.00</option>
              <option value="6.00">6.00</option>
              <option value="6.40">6.40</option>
              <option value="6.50">6.50</option>
              <option value="7.00">7.00</option>
              <option value="7.50">7.50</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">тридцать</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="35">35</option>
              <option value="37">37</option>
              <option value="38.5">38,5</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="125">125</option>
              <option value="135">135</option>
              <option value="145">145</option>
              <option value="155">155</option>
              <option value="165">165</option>
              <option value="175">175</option>
              <option value="185">185</option>
              <option value="195">195</option>
              <option value="205">205</option>
              <option value="215">215</option>
              <option value="225">225</option>
              <option value="235">235</option>
              <option value="245">245</option>
              <option value="255">255</option>
              <option value="265">265</option>
              <option value="275">275</option>
              <option value="285">285</option>
              <option value="295">295</option>
              <option value="305">305</option>
              <option value="315">315</option>
              <option value="325">325</option>
              <option value="335">335</option>
              <option value="345">345</option>
              <option value="355">355</option>
            </select>
          </div>
          <div className="choose-profile">
            <label>Профиль</label>
            <select name="_carTires_ctTS_ddlDimRatio" defaultValue="55" onChange={handleChangeProfile}>
              <option value="__NULL__">Выбирать</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="__OTHER__">другой</option>
            </select>
          </div>
          <div className="choose-diametr">
            <label>Диаметр</label>
            <select name="_carTires_ctTS_ddlDimDiameter" defaultValue="16" onChange={handleChangeDiametr}>
              <option value="__NULL__">Выбирать</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="__OTHER__">другой</option>
            </select>
          </div>
          <div className="btn-wrapper">
            <button onClick={handleClickSearch}>Поиск шин</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTires;