import { ITire } from "../interfaces/ITire";
import { ICreateTireData } from "../interfaces/ITire";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function loadAllTires(): Promise<ITire[]> {
  const result = await fetch(`${BASE_URL}/tires`, {
    method: 'GET',
    redirect: 'follow',
  });
  const data = await result.json();
  return data;
}

export async function createTire(tireData: ICreateTireData): Promise<ITire> {
    const result = await fetch(`${BASE_URL}/tires`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tireData)
    });
    const data = await result.json();
    return data;
}

export async function filterTires({ width, profile, diametr }: any): Promise<ITire[]> {
  const result = await fetch(`https://q11.jvmhost.net/tires/filter/${width}/${profile}/${diametr}`, {
    method: 'GET',
    redirect: 'follow',
  });
  console.log(result);
  const data = await result.json();
  console.log(data);
  return data;
}
