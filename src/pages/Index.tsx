import Header from "@/components/Header";
import SportsCardCatalog from "@/components/SportsCardCatalog";
import PaymentMethods from "@/components/PaymentMethods";
import DeliveryInfo from "@/components/DeliveryInfo";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">AllStarMint</h1>
            <p className="text-xl mb-8">
              Премиальные спортивные карточки для коллекционеров
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm">Карточек в каталоге</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog">
          <SportsCardCatalog />
        </section>

        {/* Payment Section */}
        <section id="payment" className="bg-white">
          <PaymentMethods />
        </section>

        {/* Delivery Section */}
        <section id="delivery">
          <DeliveryInfo />
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">AllStarMint</h3>
              <p className="text-gray-400">
                Ваш надежный партнер в мире спортивных карточек
              </p>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 AllStarMint. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
