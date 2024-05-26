import React from 'react';
import TireForm from '../createTire/TireForm';
import { ICreateTireData } from '../../interfaces/ITire'
import { createTire } from '../../dbRequests/tiresRequests';
import './CreateTire.css'

const CreateTire: React.FC = () => {
    const handleSubmit = async (formData: ICreateTireData) => {
      try {
        const newTire = await createTire(formData);
        console.log('Tire created successfully:', newTire);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    return (
      <div className="create-tire__container">
        <h1 className="create-tire__title">Create New Tire</h1>
        <TireForm onSubmit={handleSubmit} />
      </div>
    );
};

export default CreateTire;
