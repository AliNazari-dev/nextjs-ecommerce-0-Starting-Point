import { metadata } from "@/app/layout";
import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProducts = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) notFound();

  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProducts(id);

  return {
    title: product.name + " - alimazon",
    description: product.description,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getProducts(id);
  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row">
      <Image
        alt={product.name}
        src={product.image}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCartButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
};

export default ProductPage;
