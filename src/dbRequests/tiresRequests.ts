import { ITire } from '../interfaces/ITire';
import { ICreateTireData } from '../pages/createTire/TireForm';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function loadAllTires(): Promise<ITire[]> {
  const result = await fetch(`https://q11.jvmhost.net/api/tires`, {
    method: 'GET',
    redirect: 'follow',
  });
  const data = await result.json();
  return data;
}

export async function createTire(tireData: ICreateTireData): Promise<ITire | string> {
  const result = await fetch(`${BASE_URL}/api/tires`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tireData),
  });
  const contentType = result.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await result.json();
    return data;
  } else {
    const text = await result.text();
    return text;
  }
}

export async function filterTires(dataTires: any): Promise<ITire[]> {
  const result = await fetch(`https://q11.jvmhost.net/api/tires/filter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataTires),
  });
  console.log(result);
  const data = await result.json();
  console.log(data);
  return data;
}
