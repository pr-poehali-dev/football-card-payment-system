import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      category: "Банковские карты",
      methods: [
        { name: "Visa", icon: "CreditCard", fee: "0%" },
        { name: "MasterCard", icon: "CreditCard", fee: "0%" },
        { name: "МИР", icon: "CreditCard", fee: "0%" },
      ],
    },
    {
      category: "Электронные кошельки",
      methods: [
        { name: "ЮMoney", icon: "Wallet", fee: "1%" },
        { name: "WebMoney", icon: "Wallet", fee: "1.5%" },
        { name: "QIWI", icon: "Wallet", fee: "2%" },
      ],
    },
    {
      category: "Банковские переводы",
      methods: [
        { name: "Сбербанк Онлайн", icon: "Building2", fee: "0%" },
        { name: "Альфа-Банк", icon: "Building2", fee: "0%" },
        { name: "Тинькофф", icon: "Building2", fee: "0%" },
      ],
    },
    {
      category: "Криптовалюты",
      methods: [
        { name: "Bitcoin", icon: "Coins", fee: "1%" },
        { name: "Ethereum", icon: "Coins", fee: "1%" },
        { name: "USDT", icon: "Coins", fee: "0.5%" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Способы оплаты
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы принимаем различные способы оплаты для вашего удобства. Все платежи
          защищены SSL-шифрованием.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {paymentMethods.map((category) => (
          <Card
            key={category.category}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.methods.map((method) => (
                  <div
                    key={method.name}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon
                        name={method.icon as any}
                        className="text-blue-600"
                        size={20}
                      />
                      <span className="font-medium text-gray-700">
                        {method.name}
                      </span>
                    </div>
                    <Badge
                      variant={method.fee === "0%" ? "default" : "secondary"}
                    >
                      {method.fee === "0%"
                        ? "Без комиссии"
                        : `Комиссия ${method.fee}`}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Icon name="Shield" className="text-blue-600 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">
                Безопасность платежей
              </h3>
              <p className="text-blue-800 mb-3">
                Все платежи обрабатываются через защищенные каналы с
                использованием SSL-шифрования и соответствуют стандартам PCI
                DSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600">SSL 256-bit</Badge>
                <Badge className="bg-blue-600">PCI DSS</Badge>
                <Badge className="bg-blue-600">3D Secure</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
