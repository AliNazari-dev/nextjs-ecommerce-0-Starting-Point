import ProductCart from "@/components/ProductCart";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div>
      <ProductCart product={product[2]} />
    </div>
  );
}
