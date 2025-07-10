import { IProduct } from "@/types/product";

export async function fetchProducts(
  limit: number,
  offset: number
): Promise<IProduct[]> {
  const res = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}&offset=${offset}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("An error occurred while fetching products");

  return res.json();
}
