import { IProduct } from "../store/types";

export const filterProductsByPrice = (products: IProduct[] | undefined, max: number) => {
  return products?.filter((product) => product.price < max) || [];
}

export const relatedProducts = (products: IProduct[] | undefined, categoryId: number) => {
  const shuffle = (arr: IProduct[]) => [...arr].sort(() => 0.5 - Math.random());
  const list = products?.filter((item) => item.category.id === categoryId) || [];
  return shuffle(list);
};