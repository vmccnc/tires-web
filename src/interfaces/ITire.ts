export interface ITire {
    id: number;
    typeOfTire: string;
    icVc: string;
    diameter: string;
    dimension: string;
    url: string;
    urls: string[];
    inf: string;
  }
  
  export interface ICreateTireData {
    userId: string;
    typeOfTire: string;
    icVc: string;
    diameter: number;
    width: number;
    profile: number;
    manufacturer: string;
    season: string;
    url: string;
    urls: string;
    inf: string;
    inArchive: boolean;
  }
  //Значения по умолчнию
  export const defaultTireData: ICreateTireData = {
    userId: 'user123',
    typeOfTire: 'SUV',
    icVc: 'IC123VC',
    diameter: 17,
    width: 225,
    profile: 45,
    manufacturer: 'Bridgestone',
    season: 'Summer',
    url: 'https://example.pagetire',
    urls: 'https://images.iconfigurators.app/images/tires/large/michelin-tires-defender-500.png',
    inf: 'Это летняя шина от Bridgestone, подходящая для большинства автомобилей.',
    inArchive: true,
};