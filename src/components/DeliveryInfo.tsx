import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DeliveryInfo = () => {
  const deliveryOptions = [
    {
      type: "Курьерская доставка",
      icon: "Truck",
      timeframe: "1-3 дня",
      price: "от 300 ₽",
      description: "Доставка курьером до двери в пределах МКАД",
      features: [
        "Доставка в удобное время",
        "Оплата при получении",
        "Проверка товара",
      ],
    },
    {
      type: "Пункт выдачи",
      icon: "MapPin",
      timeframe: "2-5 дней",
      price: "от 150 ₽",
      description: "Самовывоз из пунктов выдачи СДЭК, Боксберри",
      features: [
        "Более 10 000 пунктов",
        "Хранение до 7 дней",
        "Удобный график работы",
      ],
    },
    {
      type: "Почта России",
      icon: "Mail",
      timeframe: "5-14 дней",
      price: "от 200 ₽",
      description: "Доставка почтой по всей России",
      features: [
        "Доставка в любой город",
        "Отслеживание посылки",
        "Страхование груза",
      ],
    },
    {
      type: "Экспресс-доставка",
      icon: "Zap",
      timeframe: "в день заказа",
      price: "от 800 ₽",
      description: "Срочная доставка в течение дня",
      features: [
        "Доставка за 2-4 часа",
        "Только в Москве",
        "Отслеживание в реальном времени",
      ],
    },
  ];

  const regions = [
    { name: "Москва и МО", price: "от 300 ₽", time: "1-2 дня" },
    { name: "Санкт-Петербург и ЛО", price: "от 350 ₽", time: "2-3 дня" },
    { name: "Центральный ФО", price: "от 400 ₽", time: "3-5 дней" },
    { name: "Регионы России", price: "от 500 ₽", time: "5-10 дней" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Доставка</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем различные варианты доставки для вашего удобства. Все
          карточки упакованы в защитные конверты.
        </p>
      </div>

      {/* Delivery Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {deliveryOptions.map((option) => (
          <Card key={option.type} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Icon
                  name={option.icon as any}
                  className="text-orange-600"
                  size={24}
                />
                <CardTitle className="text-xl text-gray-800">
                  {option.type}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Срок доставки:</span>
                  <Badge variant="outline">{option.timeframe}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Стоимость:</span>
                  <span className="font-bold text-orange-600">
                    {option.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{option.description}</p>
                <div className="space-y-1">
                  {option.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Icon name="Check" className="text-green-600" size={14} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Regional Pricing */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            Стоимость доставки по регионам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <span className="font-medium text-gray-700">
                    {region.name}
                  </span>
                  <p className="text-sm text-gray-500">{region.time}</p>
                </div>
                <span className="font-bold text-orange-600">
                  {region.price}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Packaging Info */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Icon name="Package" className="text-orange-600 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">
                Упаковка карточек
              </h3>
              <p className="text-orange-800 mb-3">
                Все спортивные карточки упакованы в специальные защитные
                конверты и картонные коробки для предотвращения повреждений при
                транспортировке.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-600">Защитные конверты</Badge>
                <Badge className="bg-orange-600">Картонная упаковка</Badge>
                <Badge className="bg-orange-600">Пузырчатая плёнка</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryInfo;
