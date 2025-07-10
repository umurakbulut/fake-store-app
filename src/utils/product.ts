import { IProduct } from "@/types/product";

interface IFilterOptions {
  products: IProduct[];
  sort?: "asc" | "desc";
  category?: string;
  page: number;
  limit: number;
  min: number;
  max: number;
}

export function getFilteredPaginatedProducts({
  products,
  sort,
  category,
  page,
  limit,
  min,
  max,
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

  filtered = filtered.filter(
    (product) => product.price >= min && product.price <= max
  );

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
