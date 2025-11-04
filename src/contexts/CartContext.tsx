import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: number, size?: string) => void;
  updateQuantity: (productId: number, quantity: number, size?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, size?: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        toast({
          title: "Quantity Updated",
          description: `${product.name} quantity increased to ${existingItem.quantity + 1}`,
        });
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
      return [...prevCart, { ...product, quantity: 1, size }];
    });
  };

  const removeFromCart = (productId: number, size?: string) => {
    setCart((prevCart) => 
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (productId: number, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
