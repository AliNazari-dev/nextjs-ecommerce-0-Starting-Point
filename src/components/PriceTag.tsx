import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

const PriceTag = ({ price, className }: PriceTagProps) => {
  const formatedPrice = formatPrice(price);
  return <span className={`badge ${className}`}>{formatedPrice}</span>;
};

export default PriceTag;
