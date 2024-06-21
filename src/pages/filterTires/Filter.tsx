import { useState } from 'react';
import { ITire } from '../../interfaces/ITire';
import { IWheel } from '../../interfaces/IWheel';
import TiresImg from '/tires-filter.jpg';
import WheelsImg from '/wheels-filter.jpg';
import FilterTires from './componentsFilterTires/FilterTires';
import FilterWheels from './componentsFilterTires/FilterWheels';
import CardTire from './componentsFilterTires/CardTire';
import CardWheel from './componentsFilterTires/CardWheel';
import './style/Filter.css';

function Filter() {
  const [typeFilter, setTypeFilter] = useState('tires');
  const [dataTires, setDataTires] = useState<ITire[]>([]);
  const [dataWheels, setDataWheels] = useState<IWheel[]>([]);

  function handleChangeTires(tires: ITire[]) {
    setDataTires(tires);
  }

  function handleChangeWheels(wheels: IWheel[]) {
    setDataWheels(wheels);
  }

  function handleClickTypeFilterTires() {
    setTypeFilter('tires');
  }

  function handleClickTypeFilterWheels() {
    setTypeFilter('wheels');
  }

  function renderTireList() {
    return (
      <div className="tires-list">
        {dataTires.map((tire, index) => (
          <CardTire key={index} {...tire} />
        ))}
      </div>
    );
  }

  function renderWheelList() {
    return (
      <div className="wheels-list">
        {dataWheels.map(wheel => (
          <CardWheel key={wheel.id} {...wheel} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <div className="tab-content">
          <div className={`tires ${typeFilter == 'tires' ? '' : 'hidden'}`}>
            <FilterTires onChange={handleChangeTires} />
          </div>
          <div className="wrapper-image">{typeFilter == 'wheels' ? <img src={WheelsImg} /> : <img src={TiresImg} />}</div>
          <div className={`wheels ${typeFilter == 'wheels' ? '' : 'hidden'}`}>
            <FilterWheels onChange={handleChangeWheels} />
          </div>
        </div>
        <div className="wrapper-button">
          <button className={`wrapper-button__tires ${typeFilter == 'tires' ? 'active' : ''}`} onClick={handleClickTypeFilterTires}>
            Tires
          </button>
          <button className={`wrapper-button__wheels ${typeFilter == 'wheels' ? 'active' : ''}`} onClick={handleClickTypeFilterWheels}>
            Wheels
          </button>
        </div>
      </div>
      {dataTires && typeFilter == 'tires' ? renderTireList() : <></>}
      {dataWheels && typeFilter == 'wheels' ? renderWheelList() : <></>}
    </>
  );
}

export default Filter;
