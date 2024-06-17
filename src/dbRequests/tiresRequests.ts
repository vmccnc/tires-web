import { ITire } from "../interfaces/ITire";
import { ICreateTireData } from "../pages/createTire/TireForm";
import { DetailedTire } from "../pages/tireDetailPage/tireDetailPage";
import { INews } from '../interfaces/INews';

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
export async function loadTireById(id: number): Promise<DetailedTire> {
  try {
    const result = await fetch(`${BASE_URL}/api/tires/${id}`, {
      method: 'GET',
      redirect: 'follow',
    });
    const data = await result.json();
    console.log(`Data fetched for tire id ${id}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching tire id ${id}:`, error);
    throw error;
  }
}

export async function loadNews(): Promise<INews[]> {
  const result = await fetch(`https://q11.jvmhost.net/api/tires/news`, {
    method: 'GET',
    redirect: 'follow',
  });
  const data = await result.json();
  return data;
}

