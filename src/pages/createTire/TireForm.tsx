import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ICreateTireData, defaultTireData } from '../../interfaces/ITire';
import './CreateTire.css'


interface TireFormProps {
    onSubmit: (formData: ICreateTireData) => void;
}

const TireForm: React.FC<TireFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ICreateTireData>(defaultTireData);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;
        const checked = target.checked;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="create-tire__container">
            <form className="tire-form" onSubmit={handleSubmit}>
                <div className="tire-form__section tire-form__section--left">
                    <img src={'/public/big-car-tire-summer.webp'} alt="Tire Image" className="tire-form__image" />
                </div>
                <div className="tire-form__section tire-form__section--middle">
                    <div className='tire-form--horizontal'>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Width:</label>
                        <input className="tire-form__input" type="number" name="width" value={formData.width} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Profile:</label>
                        <input className="tire-form__input" type="number" name="profile" value={formData.profile} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Diameter:</label>
                        <input 
                            className="tire-form__input" 
                            type="number" 
                            name="diameter" 
                            min="0" 
                            max="100" 
                            value={formData.diameter} 
                            onChange={handleChange} 
                        />
                    </div>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">User ID:</label>
                        <input className="tire-form__input" type="text" name="userId" value={formData.userId} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">IC/VC:</label>
                        <input className="tire-form__input" type="text" name="icVc" value={formData.icVc} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">URL:</label>
                        <input className="tire-form__input" type="text" name="url" value={formData.url} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Additional URLs:</label>
                        <input className="tire-form__input" type="text" name="urls" value={formData.urls} onChange={handleChange} />
                    </div>
                </div>
                <div className="tire-form__section tire-form__section--right">
                    <div className="tire-form__group">
                        <label className="tire-form__label">Manufacturer:</label>
                        <input className="tire-form__input" type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Type of Tire:</label>
                        <select className="tire-form__input" name="typeOfTire" value={formData.typeOfTire} onChange={handleChange}>
                            <option value="passenger">Osobowe/SUV</option>
                            <option value="truck">Dostawce</option>
                            <option value="4X4">Terenove/4X4</option>
                        </select>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Season:</label>
                        <select className="tire-form__input" name="season" value={formData.season} onChange={handleChange}>
                            <option value="summer">Letnie</option>
                            <option value="winter">Zimowe</option>
                            <option value="allseason">Caloroczne</option>
                        </select>
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">Info:</label>
                        <input className="tire-form__input" type="text" name="inf" value={formData.inf} onChange={handleChange} />
                    </div>
                    <div className="tire-form__group">
                        <label className="tire-form__label">In Archive:</label>
                        <input type="checkbox" name="inArchive" checked={formData.inArchive} onChange={handleChange} />
                    </div>
                    <button className="tire-form__button" type='submit'>Create Tire</button>
                </div>
            </form>
        </div>
    );
};

export default TireForm;
