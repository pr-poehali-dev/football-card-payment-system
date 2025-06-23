import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn.poehali.dev/files/63e43a9e-5800-44a6-a39b-6cce43469dd8.png"
              alt="AllStarMint Trading"
              className="h-12 w-auto"
            />
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск карточек или игроков..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 h-12"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-10 w-10 p-0"
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Каталог
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Категории
            </Link>
            <Link
              to="/payment"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Оплата
            </Link>
            <Button variant="outline" className="flex items-center space-x-2">
              <Icon name="ShoppingCart" size={16} />
              <span>Корзина</span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
