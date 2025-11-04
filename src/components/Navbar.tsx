import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const navigation = [
  { name: "Gift Guide", href: "/" },
  { name: "Men", href: "/mens" },
  { name: "Women", href: "/womens" },
  { name: "Kids", href: "/kids" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`text-sm font-medium transition-colors hover:text-accent ${
            location.pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground"
          }`}
          data-testid={`link-nav-${item.name.toLowerCase()}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2" data-testid="link-logo">
            <span className="text-2xl font-bold">KICKZ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex" data-testid="button-search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" data-testid="button-user">
            <User className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative" data-testid="button-cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <NavLinks />
                <Link
                  to="/cart"
                  className="text-sm font-medium transition-colors hover:text-accent text-muted-foreground"
                  data-testid="link-mobile-cart"
                >
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
