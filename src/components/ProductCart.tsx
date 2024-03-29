import Link from "next/link";
import { Product } from "prisma/prisma-client";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

const ProductCart = ({ product }: ProductProps) => {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 34 * 7;
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
};

export default ProductCart;
