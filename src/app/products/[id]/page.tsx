import ProductDetail from "@/components/organisms/ProductDetail";
import { fetchProductById } from "@/services/products";

interface IProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: IProductDetailPageProps) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return <ProductDetail product={product} />;
}
