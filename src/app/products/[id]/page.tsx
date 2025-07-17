import ProductDetail from "@/components/organisms/ProductDetail";
import { fetchProductById } from "@/services/products";
import { Metadata } from "next";

interface IProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: IProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await fetchProductById(id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: IProductDetailPageProps) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return <ProductDetail product={product} />;
}
