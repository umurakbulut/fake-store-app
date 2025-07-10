import Main from "@/components/atoms/Main";
import Pagination from "@/components/organisms/Pagination";
import ProductGrid from "@/components/organisms/ProductGrid";
import SortSelect from "@/components/molecules/SortSelect";
import { fetchProducts } from "@/services/products";

interface IProductPageProps {
  searchParams: Promise<{ page?: string; sort?: "asc" | "desc" }>;
}

export default async function ProductsPage({
  searchParams,
}: IProductPageProps) {
  const { page, sort } = await searchParams;

  const currentPage = Number(page || 1);
  const limit = 10;
  const allProducts = await fetchProducts();

  let sortedProducts = allProducts;

  if (sort === "asc") {
    sortedProducts = [...allProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    sortedProducts = [...allProducts].sort((a, b) => b.price - a.price);
  }

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / limit);
  const offset = (currentPage - 1) * limit;
  const paginatedProducts = sortedProducts.slice(offset, offset + limit);

  return (
    <Main>
      <h1>Products</h1>
      <SortSelect />
      <ProductGrid products={paginatedProducts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Main>
  );
}
