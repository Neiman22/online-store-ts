export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  name: string;
  role?: string;
  avatar: string;
}

export interface ItemCart {
  product: IProduct;
  quantities: number;
}

export interface UserState {
  currentUser: IUser | null;
  cart: ItemCart[];
  favorites: IProduct[];
  formType: string;
  showForm: boolean;
}