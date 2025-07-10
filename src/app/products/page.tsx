import Main from "@/components/atoms/Main";
import Pagination from "@/components/organisms/Pagination";
import ProductGrid from "@/components/organisms/ProductGrid";
import { fetchProducts } from "@/services/products";

interface IProductPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductsPage({
  searchParams,
}: IProductPageProps) {
  const { page } = await searchParams;

  const currentPage = Number(page || 1);
  const limit = 10;
  const totalProducts = 20;
  const totalPages = Math.ceil(totalProducts / limit);
  const offset = (currentPage - 1) * limit;

  const products = await fetchProducts(limit, offset);

  return (
    <Main>
      <h1>Products</h1>
      <ProductGrid products={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Main>
  );
}
