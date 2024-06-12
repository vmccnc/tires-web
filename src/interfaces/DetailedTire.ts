 export interface TireComponentProps {
    id: number;
  }
  
export interface DetailedTire {
    id: number;
    typeOfTire: string;
    icVc: string;
    diameter: number;
    width: number;
    profile: number;
    manufacturer: string;
    season: string;
    url: string;
    urls: string[];
    inf: string;
    price: number;
  }

export interface FeedbackProps {
    user: string;
    date: string;
    text: string;
    likes: number;
    dislikes: number;
  }  