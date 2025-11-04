import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">KICKZ</h3>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for the latest sneakers and sportswear.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mens" className="text-muted-foreground hover:text-foreground">Men's</Link></li>
              <li><Link to="/womens" className="text-muted-foreground hover:text-foreground">Women's</Link></li>
              <li><Link to="/kids" className="text-muted-foreground hover:text-foreground">Kids</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Gift Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Store Locator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 KICKZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
