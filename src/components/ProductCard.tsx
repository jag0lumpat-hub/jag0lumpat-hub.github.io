import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart, Product } from "@/contexts/CartContext";

export const ProductCard = (product: Product) => {
  const { addToCart } = useCart();
  const { id, name, price, image, category, description } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, category, description });
  };

  return (
    <Card className="group overflow-hidden border-border transition-all hover:shadow-[var(--shadow-hover)]" data-testid={`card-product-${id}`}>
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${id}`}
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-1" data-testid={`text-product-name-${id}`}>
            {name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-product-description-${id}`}>
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold" data-testid={`text-product-price-${id}`}>{price}</span>
          <Button size="sm" variant="default" onClick={handleAddToCart} data-testid={`button-add-to-cart-${id}`}>
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
