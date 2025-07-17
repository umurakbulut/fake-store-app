import Main from "@/components/atoms/Main";
import Pagination from "@/components/organisms/Pagination";
import ProductGrid from "@/components/organisms/ProductGrid";
import SortSelect from "@/components/molecules/SortSelect";
import CategoryFilter from "@/components/molecules/CategoryFilter";
import FiltersWrapper from "@/components/organisms/FiltersWrapper";
import PriceFilter from "@/components/molecules/PriceFilter";
import { fetchProducts } from "@/services/products";
import { getFilteredPaginatedProducts } from "@/utils/product";
import SearchInput from "@/components/molecules/SearchInput";

interface IProductPageProps {
  searchParams: Promise<{
    page?: string;
    sort?: "asc" | "desc";
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    query?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: IProductPageProps) {
  const { page, sort, category, minPrice, maxPrice, query } =
    await searchParams;

  const currentPage = Number(page || 1);
  const limit = 10;
  const min = Number(minPrice || 0);
  const max = Number(maxPrice || Infinity);

  const allProducts = await fetchProducts();

  const { products, total } = getFilteredPaginatedProducts({
    products: allProducts,
    sort,
    category,
    page: currentPage,
    limit,
    min,
    max,
    query,
  });

  const totalPages = Math.ceil(total / limit);

  return (
    <Main>
      <h1>Products</h1>
      <FiltersWrapper>
        <CategoryFilter />
        <SortSelect />
        <PriceFilter />
        <SearchInput />
      </FiltersWrapper>
      <ProductGrid products={products} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </Main>
  );
}
