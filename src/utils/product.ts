import { IProduct } from "@/types/product";

interface IFilterOptions {
  products: IProduct[];
  sort?: "asc" | "desc";
  category?: string;
  page: number;
  limit: number;
}

export function getFilteredPaginatedProducts({
  products,
  sort,
  category,
  page,
  limit,
}: IFilterOptions) {
  const normalizedCategory = decodeURIComponent(category || "").replace(
    /\+/g,
    " "
  );

  let filtered = [...products];

  if (normalizedCategory) {
    filtered = filtered.filter(
      (product) => product.category === normalizedCategory
    );
  }

  if (sort === "asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  const total = filtered.length;
  const offset = (page - 1) * limit;
  const paginated = filtered.slice(offset, offset + limit);

  return {
    products: paginated,
    total,
  };
}
