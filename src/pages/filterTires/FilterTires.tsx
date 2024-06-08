import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../filterTires/FilterTires.css';
import { tires } from './tires';
import { ITire } from '../../interfaces/ITire';
import { filterTires } from '../../dbRequests/tiresRequests';
import CheckboxHeader from './componentsFilterTires/CheckboxHeader';
import CheckboxList from './componentsFilterTires/CheckboxList';

function FilterTires() {
  const [width, setWidth] = useState('205');
  const [profile, setProfile] = useState('55');
  const [diameter, setDiametr] = useState('16');
  const [season, setSeason] = useState('0');
  const [priceFrom, setPriceFrom] = useState('200');
  const [priceTo, setPriceTo] = useState('2000');
  const [checkPremium, setCheckPremium] = useState(tires.premium);
  const [checkMedium, setCheckMedium] = useState(tires.medium);
  const [checkCheap, setCheckCheap] = useState(tires.cheap);
  const [checkboxValue, setCheckboxValue] = useState<string[]>([]);
  const [data, setData] = useState<ITire[]>([]);
  const [openManufacturer, setOpenManufacturer] = useState(false);
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/tires-dm.appspot.com/o/Tires%2Fmichelin-primacy-4-23385-f-f-l130x175-sk6.webp?alt=media&token=e34a0787-2e67-40bb-a138-74dbd271c365';

  function handleOpenManufacturer() {
    setOpenManufacturer(!openManufacturer);
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

  function handleChangeSeason(event: React.ChangeEvent<HTMLSelectElement>) {
    setSeason(event.target.value);
  }

  function handleChangePriceFrom(event: React.ChangeEvent<HTMLInputElement>) {
    setPriceFrom(event.target.value);
  }

  function handleChangePriceTo(event: React.ChangeEvent<HTMLInputElement>) {
    setPriceTo(event.target.value);
  }

  const allCheckedPremium = checkPremium.every(({ checked }) => checked);
  const allCheckedMedium = checkMedium.every(({ checked }) => checked);
  const allCheckedCheap = checkCheap.every(({ checked }) => checked);

  function checkAll(idx: any) {
    if (idx == 'premium') {
      setCheckPremium(checkPremium => {
        return checkPremium.map(item => ({
          ...item,
          checked: !allCheckedPremium,
        }));
      });
    } else if (idx == 'medium') {
      setCheckMedium(checkMedium => {
        return checkMedium.map(item => ({
          ...item,
          checked: !allCheckedMedium,
        }));
      });
    } else if (idx == 'ekonomiczna') {
      setCheckCheap(checkCheap => {
        return checkCheap.map(item => ({
          ...item,
          checked: !allCheckedCheap,
        }));
      });
    }
  }

  function checkCur(idx: any, product: any) {
    if (product == 'premium') {
      setCheckPremium(checkPremium => {
        return checkPremium.map((item, index) => {
          if (index === idx) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return item;
        });
      });
    } else if (product == 'medium') {
      setCheckMedium(checkMedium => {
        return checkMedium.map((item, index) => {
          if (index === idx) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return item;
        });
      });
    } else if (product == 'ekonomiczna') {
      setCheckCheap(checkCheap => {
        return checkCheap.map((item, index) => {
          if (index === idx) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return item;
        });
      });
    }
  }

  function handleClickManufacturer() {
    let checkbox: string[] = [];
    checkPremium.forEach(item => {
      if (item.checked) {
        checkbox.push(item.name);
      }
    });
    checkMedium.forEach(item => {
      if (item.checked) {
        checkbox.push(item.name);
      }
    });
    checkCheap.forEach(item => {
      if (item.checked) {
        checkbox.push(item.name);
      }
    });
    setCheckboxValue(checkbox);
    setOpenManufacturer(false);
  }

  function handleClickSearch() {
    let dataList: ITire[] = [];
    interface ITiresProperty {
      width: number;
      profile: number;
      diameter: number;
      manufacturer?: string;
      season?: string;
      priceFrom: number;
      priceTo: number;
    }
    let dataTires: ITiresProperty = {
      width: Number(width),
      profile: Number(profile),
      diameter: Number(diameter),
      priceFrom: Number(priceFrom),
      priceTo: Number(priceTo),
    };
    const fetchfilterTires = async (dataTires: ITiresProperty) => {
      try {
        const data = await filterTires(dataTires);
        console.log('Fetched tires data:', data);
        dataList = dataList.concat(data);
        setData(data);
        console.log(dataList);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
      return dataList;
    };

    if (checkboxValue.length == 1 && season != '0') {
      dataTires.manufacturer = checkboxValue.join();
      dataTires.season = season;
      console.log('1');
      fetchfilterTires(dataTires);
    } else if (checkboxValue.length == 1) {
      dataTires.manufacturer = checkboxValue.join();
      console.log('2');
      fetchfilterTires(dataTires);
    } else if (checkboxValue.length > 1) {
      checkboxValue.map(item => {
        dataTires.manufacturer = item;
        console.log('3');
        fetchfilterTires(dataTires);
      });
    } else if (season != '0') {
      dataTires.season = season;
      console.log('4');
      fetchfilterTires(dataTires);
    } else {
      console.log('5');
      fetchfilterTires(dataTires);
    }
    console.log(dataList);
  }

  function dropdownManufacturer() {
    return (
      <div className="choose-manufacturer">
        <div className="dropdown" onClick={handleOpenManufacturer}>
          <span>Wszyscy</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        {openManufacturer ? (
          <>
            <div className="producers-group">
              <div className="group-premium">
                <div className="group-premium__title">
                  <CheckboxHeader isCheckedCheckbox={allCheckedPremium} onChangeHandler={checkAll} id="premium" />
                </div>
                <div className="group-premium__items">
                  <CheckboxList items={checkPremium} onChangeHandler={checkCur} product="premium" />
                </div>
              </div>
              <div className="group-medium">
                <div className="group-medium__title">
                  <CheckboxHeader isCheckedCheckbox={allCheckedMedium} onChangeHandler={checkAll} id="medium" />
                </div>
                <div className="group-medium__items">
                  <CheckboxList items={checkMedium} onChangeHandler={checkCur} product="medium" />
                </div>
              </div>
              <div className="group-cheap">
                <div className="group-cheap__title">
                  <CheckboxHeader isCheckedCheckbox={allCheckedCheap} onChangeHandler={checkAll} id="ekonomiczna" />
                </div>
                <div className="group-cheap__items">
                  <CheckboxList items={checkCheap} onChangeHandler={checkCur} product="ekonomiczna" />
                </div>
              </div>
              <div className="choose-manufacturer__btn">
                <button onClick={handleClickManufacturer}>Zastosuj</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
  function renderTireList() {
    return (
      <div className="tire-list">
        {data.map(tire => (
          <div key={tire.id} className="tire-item">
            <div>
              <div className="tire-image">
                <div className="guaranty-frame">
                  <div className="guaranty-text">1 year guaranty</div>
                </div>
                <img src={imageUrl} alt="tire" />
                <div className="discount-frame">
                  <div className="discount-text"> - 5%</div>
                </div>
              </div>
              <div className="tire-info">
                <p>{tire.manufacturer}</p>
                <p>{tire.typeOfTire}</p>
                <p>{tire.width}/</p>
                <p>{tire.profile}</p>
                <p>R{tire.diameter}</p>
              </div>
            </div>
            <div className="tire-price">
              <div className="price-with-discount">
                <p>12160 PLN</p>
              </div>
              <div className="price-before-discount">
                <p>12800 PLN</p>
              </div>
            </div>
            <button className="button-buy">
              <div className="button-by-text">Buy</div>
            </button>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="wrapper">
        <div className="tab-content">
          <div className="tires">
            <div className="choose-width">
              <select name="_carTires_ctTS_ddlDimWidth" id="width" defaultValue="205" onChange={handleChangeWidth}>
                <option value="0">Wybierz</option>
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
              <select name="_carTires_ctTS_ddlDimRatio" defaultValue="55" onChange={handleChangeProfile}>
                <option value="0">Wybierz</option>
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
              </select>
            </div>
            <div className="choose-diametr">
              <select name="_carTires_ctTS_ddlDimDiameter" defaultValue="16" onChange={handleChangeDiametr}>
                <option value="0">Wybierz</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
              </select>
            </div>
            {dropdownManufacturer()}
            <div className="choose-season">
              <select name="_carTires_ctTS_ddlDimRatio" defaultValue="0" onChange={handleChangeSeason}>
                <option value="0">Wybierz</option>
                <option value="summer">Letnie</option>
                <option value="winter">Zimowe</option>
                <option value="All-Season">Całoroczne</option>
              </select>
            </div>
            <div className="choose-price">
              <span>Cena za szt. od - do</span>
              <div className="choose-price__wrapper">
                <input type="number" value={priceFrom} onChange={handleChangePriceFrom} />
                <span>-</span>
                <input type="number" value={priceTo} onChange={handleChangePriceTo} />
              </div>
            </div>
            <div className="btn-wrapper">
              <button onClick={handleClickSearch} disabled={width == '0' || diameter == '0' || profile == '0'}>
                Szukaj opon
              </button>
            </div>
          </div>
          <div className="wrapper-image"></div>
          <div className="wheels"></div>
        </div>
        <div className="wrapper-button">
          <button className="wrapper-button__tires">Tires</button>
          <button className="wrapper-button__wheels">Wheels</button>
        </div>
      </div>
      {data ? renderTireList() : <></>}
    </>
  );
}

export default FilterTires;
