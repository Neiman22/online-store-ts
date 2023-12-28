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
  id: number;
  email: string;
  password: string,
  name: string,
  role: string,
  avatar: string,
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}