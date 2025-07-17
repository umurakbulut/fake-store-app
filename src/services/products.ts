import { IProduct } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("An error occurred while fetching products");

  return res.json();
}

export async function fetchProductById(id: string): Promise<IProduct> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}
