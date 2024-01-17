import { ICartItem, IProduct } from "../features/types/types"

export const filterByPrice = (products: IProduct[] | undefined, maxPrice: number) => {
  return products?.filter(({ price }) => price < maxPrice);
}

const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());

export const relatedProducts = (products: IProduct[] | undefined, id: number) => {
  const list = products?.filter(({ category }) => category?.id === id);
  return shuffle(list || []);
};

export const buildUrl = (url: string, params: object) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  })
  
  return urlWithParams;
}

export const sumBy = (arr: ICartItem[]) => arr.reduce((prev, cur) => prev + cur.quantity * cur.product.price, 0);