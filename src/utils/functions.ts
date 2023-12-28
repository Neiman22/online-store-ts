import { IProduct } from "../features/types/types"

export const filterByPrice = (products: IProduct[] | undefined, maxPrice: number) => {
  return products?.filter(({ price }) => price < maxPrice);
} 