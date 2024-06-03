import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../filterTires/FilterTires.css';
import { tires } from './tires';
import { ITire } from '../../interfaces/ITire';
import { filterTires } from '../../dbRequests/tiresRequests';

function FilterTires() {
  const [width, setWidth] = useState('205');
  const [profile, setProfile] = useState('55');
  const [diameter, setDiametr] = useState('16');
  const [data, setData] = useState<ITire[]>([]);

  const [openManufacturer, setOpenManufacturer] = useState(false);
  const [openSeason, setOpenSeason] = useState(false);

  function handleOpenManufacturer() {
    setOpenManufacturer(!openManufacturer);
  }

  function handleOpenSeason() {
    setOpenSeason(!openSeason);
  }

  function handleChangeWidth(event: React.ChangeEvent<HTMLSelectElement>) {
    setWidth(event.target.value);
  }

  function handleChangeProfile(event: React.ChangeEvent<HTMLSelectElement>) {
    setProfile(event.target.value);
  }

  function handleChangeDiametr(event: React.ChangeEvent<HTMLSelectElement>) {
    setDiametr(event.target.value);
  }

  // function updateCheckStatus(index) {
  //   checkManufacturer.premium.map((item, currentIndex) => {
  //     if (index == currentIndex) {
  //       item.checked = !item.checked;
  //     }
  //   });
  //   setCheckManufacturer(checkManufacturer);
  // }

  // function selectAll() {
  //   checkManufacturer.premium.map(item => {
  //     item.checked = !item.checked;
  //   });
  //   console.log(checkManufacturer.premium);
  //   setCheckManufacturer(checkManufacturer);
  // }
  // function unSelectAll() {
  //   setCheckManufacturer(checkManufacturer.map(item => ({ ...item, checked: false })));
  // }

  function handleClickSearch() {
    // navigate(`/filter/${width} /${profile} /${diametr}`);
    
    const fetchfilterTires = async () => {
      try {
        const data = await filterTires({ width, profile, diameter });
        console.log('Fetched tires data:', data);
        setData(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };

    fetchfilterTires();
  }

  function dropdownManufacturer() {
    return (
      <div className="choose-manufacturer">
        <label className="title">Producent / Klasa</label>
        <div className="dropdown" onClick={handleOpenManufacturer}>
          <span>Wszyscy</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {openManufacturer ? (
          <>
            <div className="producers-group">
              <div className="group-premium">
                <div className="group-premium__title">
                  <input type="checkbox" name="allPremium" id="allPremium" />
                  <label htmlFor="allPremium">Klasa premium</label>
                </div>
                <div className="group-premium__items">
                  <ul>
                    {tires.premium.map((item, index) => {
                      return (
                        <li key={index}>
                          <label htmlFor={item.name}>
                            <input type="checkbox" name={item.name} id={item.name} checked={item.checked} />
                            <span>{item.name}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="group-medium">
                <div className="group-medium__title">
                  <input type="checkbox" id="allMedium" name="allMedium" />
                  <label htmlFor="allMedium">Klasa średnia</label>
                </div>
                <div className="group-medium__items">
                  <ul>
                    {tires.medium.map((item, index) => {
                      return (
                        <li key={index}>
                          <label htmlFor={item.name}>
                            <input type="checkbox" name={item.name} id={item.name} />
                            <span>{item.name}</span>
                          </label>
                        </li>
                      );
                    })}
                    {/*  <li className="withoutHover">
                      <span className="hideRest">
                        <strong>Więcej</strong> <em>(3)</em>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="group-cheap">
                <div className="group-cheap__title">
                  <input type="checkbox" id="allCheap" name="allCheap" />
                  <label htmlFor="allCheap">Klasa ekonomiczna</label>
                </div>
                <div className="group-cheap__items">
                  <ul>
                    {tires.cheap.map((item, index) => {
                      return (
                        <li key={index}>
                          <label htmlFor={item.name}>
                            <input type="checkbox" name={item.name} id={item.name} />
                            <span>{item.name}</span>
                          </label>
                        </li>
                      );
                    })}
                    {/* <li className="withoutHover">
                      <span className="hideRest">
                        <strong>Więcej</strong> <em>(85)</em>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="choose-manufacturer__btn">
                <button>Zastosuj</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }

  function dropdownSeason() {
    return (
      <div className="choose-season">
        <label className="title" htmlFor="season">
          Sezon
        </label>
        <div className="dropdown" onClick={handleOpenSeason}>
          <span>Wszystkie</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {openSeason ? (
          <div className="dropdown__season">
            <ul className="dropdown__season__menu">
              <li>
                <label title="Letnie" htmlFor="Letnie">
                  <input id="Letnie" type="checkbox" name="Letnie" />
                  <p>Letnie </p>
                </label>
              </li>
              <li>
                <label title="Zimowe" htmlFor="Zimowe">
                  <input id="Zimowe" type="checkbox" name="Zimowe" />
                  <p>Zimowe </p>
                </label>
              </li>
              <li>
                <label title="Całoroczne" htmlFor="Całoroczne">
                  <input id="Całoroczne" type="checkbox" name="Całoroczne" />
                  <p>Całoroczne </p>
                </label>
              </li>
            </ul>
            <hr />
            <div className="dropdown__season__btn">
              <button>Zastosuj</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  function renderTireList() {
    return (
      <div>
        <div className="tire-list">
          {/* {data.length === 0 && <p>Loading tires...</p>} */}
          {data.map(tire => (
            <div key={tire.id} className="tire-item">
              <h2>{tire.typeOfTire}</h2>
              <p>IcVC: {tire.icVc}</p>
              <p>Diameter: {tire.diameter}</p>
              <p>Dimension: {tire.manufacturer}</p>
              {/* <Link to={`/tire/${tire.url}`}>View Details</Link> */}
              <p>Urls: {tire.urls}</p>
              <p>Info: {tire.inf}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="filter-tires">
      <div className="header-selector">
        <ul>
          <li>
            Szukaj opon <strong>wg rozmiaru</strong>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <div className="product-type">
          <p>
            Opony <strong>samochodowe</strong>
          </p>
          <div className="wrapper-image"></div>
        </div>
        <div className="tab-content">
          <div className="choose-width">
            <label className="title" htmlFor="width">
              Szerokość
            </label>
            <select name="_carTires_ctTS_ddlDimWidth" id="width" defaultValue="205" onChange={handleChangeWidth}>
              <option value="__NULL__">Wybierz</option>
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
              <option value="30">30</option>
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
            <label className="title">Profile</label>
            <select name="_carTires_ctTS_ddlDimRatio" defaultValue="55" onChange={handleChangeProfile}>
              <option value="__NULL__">Wybierz</option>
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
              <option value="__OTHER__">inny</option>
            </select>
          </div>
          <div className="choose-diametr">
            <label className="title">Średnica</label>
            <select name="_carTires_ctTS_ddlDimDiameter" defaultValue="16" onChange={handleChangeDiametr}>
              <option value="__NULL__">Wybierz</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="__OTHER__">inny</option>
            </select>
          </div>
          {dropdownManufacturer()}
          {dropdownSeason()}
          <div className="btn-wrapper">
            <button onClick={handleClickSearch}>Szukaj opon</button>
          </div>
        </div>
      </div>
      {data ? renderTireList() : <></>}
    </div>
  );
}

export default FilterTires;
