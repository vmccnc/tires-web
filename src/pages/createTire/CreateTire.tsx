import React from 'react';
import TireForm from '../createTire/TireForm';
import { ICreateTireData } from './TireForm'
import { createTire } from '../../dbRequests/tiresRequests';
import './CreateTire.css'

const bgheader = '/public/bg-header.png';


const CreateTire: React.FC = () => {
    const handleSubmit = async (formData: ICreateTireData) => {
      try {
        const newTire = await createTire(formData);
        if (typeof newTire === 'string') {
          console.log(newTire);
        } else {
          console.log('Tire created successfully:', newTire);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    return (
      <div className="create-tire__container">
        <div className="relative-container">
          <img src={bgheader} alt="background" />
          <div className="absolute-container">
            Insaturbo Admin
          </div>
          
        </div>
        <TireForm onSubmit={handleSubmit} />
        <div className="admin__footer">
        © 2024 Tires Admin
        </div>
      </div>
    );
};

export default CreateTire;
