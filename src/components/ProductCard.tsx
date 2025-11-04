import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border transition-all hover:shadow-[var(--shadow-hover)]">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{price}</span>
          <Button size="sm" variant="default">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
