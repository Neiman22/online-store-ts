import { IProduct } from "../store/types";

export const filterProductsByPrice = (products: IProduct[] | undefined, max: number) => {
  return products?.filter((product) => product.price < max) || [];
}