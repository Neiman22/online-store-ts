import { IProduct } from "../features/types/types"

export const filterByPrice = (products: IProduct[] | undefined, maxPrice: number) => {
  return products?.filter(({ price }) => price < maxPrice);
}

const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());

export const relatedProducts = (products: IProduct[] | undefined, id: number) => {
  const list = products?.filter(({ category }) => category?.id === id);
  return shuffle(list || []);
};