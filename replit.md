# KICKZ E-commerce Application

## Overview

KICKZ is a modern e-commerce web application built for selling sneakers and sportswear. The application features a clean, responsive design with category-based product browsing (Men's, Women's, Kids), a shopping cart system, and product detail pages. Built with React, TypeScript, and Vite, it leverages shadcn/ui components for a polished user interface and includes Google AdSense integration for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast hot module replacement
- **React Router** for client-side routing with hash-based navigation support

**Rationale**: Vite provides faster development experience compared to Create React App, with near-instant server start and optimized builds. React with TypeScript ensures maintainable, type-safe code.

**UI Component System**
- **shadcn/ui** with Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CVA (Class Variance Authority)** for managing component variants

**Rationale**: shadcn/ui provides high-quality, customizable components without vendor lock-in. Tailwind enables rapid UI development while maintaining consistency through the design system defined in `index.css`.

**State Management**
- **React Context API** for global cart state management (`CartContext`)
- **TanStack Query** for server state management (prepared for future API integration)
- **localStorage** for cart persistence across sessions

**Rationale**: Context API is sufficient for the cart's global state needs without adding Redux complexity. TanStack Query is included for future server-side data fetching capabilities.

**Design System**
- Custom CSS variables in HSL format for theming
- Predefined color tokens (primary, secondary, accent, muted, destructive)
- Custom tokens for e-commerce features (hero gradients, product shadows)
- Dark mode support through `next-themes`

**Rationale**: HSL color system allows for easier theme modifications and ensures consistent color usage across the application.

### Routing Structure

**Page Organization**
- `/` - Home/Gift Guide landing page
- `/mens` - Men's product category
- `/womens` - Women's product category  
- `/kids` - Kids' product category
- `/product/:id` - Individual product detail pages
- `/cart` - Shopping cart and checkout
- `/about` - Company information
- `/contact` - Contact form
- `/*` - 404 Not Found page with error logging

**Rationale**: Clear, semantic routes that match e-commerce conventions. The catch-all route must be placed last to avoid capturing valid routes.

### Data Management

**Product Data**
- Static product data defined in `src/data/products.ts`
- Product interface includes: id, name, price, image, category, description
- Helper functions: `getFeaturedProducts()`, `getMensProducts()`, `getWomensProducts()`, `getKidsProducts()`, `getProductById()`

**Rationale**: Static data is appropriate for the current MVP stage. The structure is designed to easily transition to API-based data fetching using TanStack Query.

**Cart Management**
- Cart items include product data plus quantity and optional size
- Operations: `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`
- Helper functions: `getTotalItems()`, `getTotalPrice()`
- Toast notifications for user feedback on cart actions

**Rationale**: Context-based cart with localStorage persistence provides a smooth user experience while maintaining cart state across browser sessions.

### Component Architecture

**Shared Components**
- `Navbar` - Global navigation with cart badge showing item count
- `Footer` - Site footer with links and social media icons
- `ProductCard` - Reusable product display with add-to-cart functionality

**UI Components** (from shadcn/ui)
- Extensive set of 40+ pre-built components in `src/components/ui/`
- All components follow Radix UI accessibility patterns
- Customizable through Tailwind classes and CVA variants

**Rationale**: Component reusability reduces duplication and ensures consistent UI patterns throughout the application.

### Testing Infrastructure

**Test Identifiers**
- Consistent `data-testid` attributes on interactive elements
- Pattern: `{element-type}-{component-name}-{optional-id}`
- Examples: `button-add-to-cart-${id}`, `link-nav-${name}`, `card-product-${id}`

**Rationale**: Structured test IDs enable reliable automated testing and make test maintenance easier.

## Recent Changes

### November 4, 2025 - Shopping Cart Implementation
- **Implemented comprehensive shopping cart functionality:**
  - Created `CartContext` for global cart state management with localStorage persistence
  - Added detailed product descriptions (in Indonesian) for all 23 products in `src/data/products.ts`
  - Updated `ProductCard` component to display descriptions and functional "Add to Cart" button
  - Built complete Cart page (`/cart`) with:
    - Item quantity management (increase/decrease)
    - Remove individual items
    - Clear cart functionality
    - Order summary with totals
    - Empty cart state with call-to-action
  - Enhanced Navbar with:
    - Cart badge showing total item count
    - Link to cart page
    - Mobile-friendly cart access in sheet menu
  - Improved ProductDetail page with:
    - Size selection functionality (sizes 7-11)
    - Working "Add to Cart" with size tracking
    - Product descriptions display
  - Centralized product data in `src/data/products.ts` for easier maintenance
  - Fixed critical bug: Cart now properly handles multiple sizes of the same product by tracking both product ID and size

### November 4, 2025 - GitHub Pages Configuration
- Configured Vite for GitHub Pages deployment with base path "/" for root directory
- Created GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment on push to main
- Added deployment documentation in `GITHUB_PAGES_DEPLOYMENT.md` (Bahasa Indonesia)
- Set up proper port configuration (5000) for Replit environment compatibility

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives** (v1.x)
- Unstyled, accessible component primitives
- Used for: dialogs, dropdowns, tooltips, navigation menus, form controls, and more
- Provides keyboard navigation, focus management, and ARIA attributes out of the box

**Embla Carousel** (v8.6.0)
- Lightweight carousel component with touch/swipe support
- Used for potential product galleries and featured content

**Lucide React** (v0.462.0)
- Icon library with consistent, customizable SVG icons
- Used throughout the application for UI elements

### Form and Data Validation

**React Hook Form** (v7.x implied by @hookform/resolvers)
- Form state management and validation
- Prepared for contact forms and checkout processes

**date-fns** (v3.6.0)
- Date manipulation and formatting utilities
- Prepared for order dates, delivery estimates, etc.

### Styling and Design

**Tailwind CSS** (v3.x)
- Utility-first CSS framework
- PostCSS integration for build processing
- Custom configuration in `tailwind.config.ts`

**class-variance-authority** (v0.7.1)
- Type-safe variant management for components
- Enables consistent component APIs

**next-themes** (v0.3.0)
- Theme management and dark mode support
- Handles theme persistence and system preference detection

### Development Tools

**TypeScript** (v5.x)
- Strict mode disabled for gradual migration
- Path aliases configured (`@/*` → `./src/*`)
- Separate configs for app and node environments

**ESLint** (v9.x)
- Code linting with TypeScript support
- React hooks and refresh plugins
- Unused variables checking disabled for development flexibility

**Vite** (v5.x)
- Development server on port 5000
- SWC plugin for fast React refresh
- Lovable component tagger in development mode

### Monetization

**Google AdSense**
- Publisher ID: `ca-pub-6393191509638673`
- Ad unit configured in `index.html`
- `ads.txt` file included for verification

**Rationale**: AdSense provides straightforward monetization without complex integration requirements.

### Deployment

**GitHub Pages**
- Automated deployment via GitHub Actions (`.github/workflows/deploy.yml`)
- Configured for root directory deployment (`base: "/"`)
- Can be adjusted for project pages by changing Vite base config

**SEO Optimization**
- Meta tags for description, Open Graph, and Twitter Cards
- `robots.txt` allowing all major crawlers
- Semantic HTML structure

**Rationale**: GitHub Pages offers free, reliable hosting for static sites with straightforward CI/CD integration.

### Future Considerations

The application is structured to easily integrate:
- Backend API for product data and order management
- Database for inventory and user accounts (Drizzle ORM ready)
- Payment processing (Stripe, PayPal, etc.)
- User authentication system
- Order tracking and history
- Product reviews and ratings