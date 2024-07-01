export interface IUser {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    phoneNumber: string | null;
    providerId: string;
    creationTime?: string;  // Optional, can be retrieved via metadata
    lastSignInTime?: string; // Optional, can be retrieved via metadata
}

export interface Item {
    productId: number;
    productName: string | null;
    productUrl: string | null;
    quantity: number;
    productPrice: number;
    sumPrice: number;
    link: {
      href: string | null;
      hreflang: string | null;
      title: string | null;
      type: string | null;
      deprecation: string | null;
      profile: string | null;
      name: string | null;
      templated: boolean;
    };
  }
  
  export interface IUserCart {
    cartId: number;
    items: Item[];
    totalPrice: number;
  }