import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface SportsCard {
  id: number;
  name: string;
  player: string;
  sport: string;
  team: string;
  price: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  image: string;
  year: number;
}

const mockCards: SportsCard[] = [
  {
    id: 1,
    name: "Rookie Card",
    player: "Коннор МакДэвид",
    sport: "Хоккей",
    team: "Edmonton Oilers",
    price: 15000,
    rarity: "legendary",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    year: 2015,
  },
  {
    id: 2,
    name: "Championship Card",
    player: "Лионель Месси",
    sport: "Футбол",
    team: "PSG",
    price: 8500,
    rarity: "epic",
    image:
      "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=400&fit=crop",
    year: 2022,
  },
  {
    id: 3,
    name: "All-Star Card",
    player: "Леброн Джеймс",
    sport: "Баскетбол",
    team: "Lakers",
    price: 12000,
    rarity: "rare",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=400&fit=crop",
    year: 2023,
  },
  {
    id: 4,
    name: "Base Card",
    player: "Том Брэди",
    sport: "Американский футбол",
    team: "Buccaneers",
    price: 3500,
    rarity: "common",
    image:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=300&h=400&fit=crop",
    year: 2021,
  },
];

const SportsCardCatalog = () => {
  const [cards] = useState<SportsCard[]>(mockCards);
  const [filteredCards, setFilteredCards] = useState<SportsCard[]>(mockCards);
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("all");
  const [rarityFilter, setRarityFilter] = useState("all");
  const [priceSort, setPriceSort] = useState("none");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters(term, sportFilter, rarityFilter, priceSort);
  };

  const applyFilters = (
    search: string,
    sport: string,
    rarity: string,
    sort: string,
  ) => {
    let filtered = cards.filter((card) => {
      const matchesSearch =
        card.name.toLowerCase().includes(search.toLowerCase()) ||
        card.player.toLowerCase().includes(search.toLowerCase());
      const matchesSport = sport === "all" || card.sport === sport;
      const matchesRarity = rarity === "all" || card.rarity === rarity;

      return matchesSearch && matchesSport && matchesRarity;
    });

    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCards(filtered);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-yellow-500";
      case "epic":
        return "bg-purple-500";
      case "rare":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRarityText = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "Легендарная";
      case "epic":
        return "Эпическая";
      case "rare":
        return "Редкая";
      default:
        return "Обычная";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Фильтры и поиск
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Input
              placeholder="Поиск карточек..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Select
              value={sportFilter}
              onValueChange={(value) => {
                setSportFilter(value);
                applyFilters(searchTerm, value, rarityFilter, priceSort);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Все виды спорта" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все виды спорта</SelectItem>
                <SelectItem value="Хоккей">Хоккей</SelectItem>
                <SelectItem value="Футбол">Футбол</SelectItem>
                <SelectItem value="Баскетбол">Баскетбол</SelectItem>
                <SelectItem value="Американский футбол">
                  Американский футбол
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={rarityFilter}
              onValueChange={(value) => {
                setRarityFilter(value);
                applyFilters(searchTerm, sportFilter, value, priceSort);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Все редкости" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все редкости</SelectItem>
                <SelectItem value="legendary">Легендарные</SelectItem>
                <SelectItem value="epic">Эпические</SelectItem>
                <SelectItem value="rare">Редкие</SelectItem>
                <SelectItem value="common">Обычные</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              value={priceSort}
              onValueChange={(value) => {
                setPriceSort(value);
                applyFilters(searchTerm, sportFilter, rarityFilter, value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Сортировка по цене" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Без сортировки</SelectItem>
                <SelectItem value="asc">По возрастанию цены</SelectItem>
                <SelectItem value="desc">По убыванию цены</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          Найдено карточек: {filteredCards.length}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            className="hover:shadow-xl transition-shadow duration-300 group"
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-2 right-2 ${getRarityColor(card.rarity)} text-white`}
                >
                  {getRarityText(card.rarity)}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                {card.name}
              </h3>
              <p className="text-gray-600 mb-1">{card.player}</p>
              <p className="text-sm text-gray-500 mb-2">
                {card.team} • {card.year}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {card.price.toLocaleString()} ₽
                </span>
                <Badge variant="outline">{card.sport}</Badge>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full flex items-center justify-center space-x-2">
                <Icon name="ShoppingCart" size={16} />
                <span>В корзину</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SportsCardCatalog;
