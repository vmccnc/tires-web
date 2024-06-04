import { ITire } from "../interfaces/ITire";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function loadAllTires(): Promise<ITire[]> {
    const result = await fetch(`${BASE_URL}/api/tires`, {
        method: 'GET',
        redirect: "follow"
    })
    const data = await result.json();
    return data;
}