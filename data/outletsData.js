const mongoose = require('mongoose');

const outletsData = [
    {
        name: "Городской универмаг",
        type: "универмаг",
        characteristics: [
            { key: "размер", value: "большой" },
            { key: "количество залов", value: 5 },
            { key: "аренда", value: 150000 },
            { key: "коммунальные платежи", value: 45000 },
            { key: "прилавков", value: 20 }
        ],
        sellers: [
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Александр Петров",
                salary: 60000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Ольга Смирнова",
                salary: 58000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Дмитрий Кузнецов",
                salary: 62000
            }
        ],
        inventory: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 200, price: 90.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 150, price: 35.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 80, price: 210.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 300, price: 120.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 100, price: 75.00 }
        ]
    },
    {
        name: "Уютный магазинчик",
        type: "магазин",
        characteristics: [
            { key: "размер", value: "средний" },
            { key: "количество секций", value: 3 },
            { key: "аренда", value: 40000 },
            { key: "коммунальные платежи", value: 10000 },
            { key: "прилавков", value: 4 }
        ],
        sellers: [
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Екатерина Новикова",
                salary: 45000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Иван Иванов",
                salary: 47000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Мария Соколова",
                salary: 46000
            }
        ],
        inventory: [
            { product_name: "Масло подсолнечное рафинированное", product_id: new mongoose.Types.ObjectId(), count: 90, price: 110.00 },
            { product_name: "Картофель свежий мытый", product_id: new mongoose.Types.ObjectId(), count: 500, price: 25.00 },
            { product_name: "Говядина грудинка охлаждённая", product_id: new mongoose.Types.ObjectId(), count: 40, price: 450.00 },
            { product_name: "Рис шлифованный круглозёрный", product_id: new mongoose.Types.ObjectId(), count: 120, price: 68.00 },
            { product_name: "Йогурт натуральный без сахара", product_id: new mongoose.Types.ObjectId(), count: 150, price: 55.00 }
        ]
    },
    {
        name: "Фруктовый киоск",
        type: "киоск",
        characteristics: [
            { key: "размер", value: "маленький" },
            { key: "аренда", value: 10000 },
            { key: "коммунальные платежи", value: 2000 },
            { key: "прилавков", value: 1 },
            { key: "местоположение", value: "рынок" }
        ],
        sellers: [
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Анна Морозова",
                salary: 35000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Пётр Лебедев",
                salary: 34000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Наталья Васильева",
                salary: 36000
            }
        ],
        inventory: [
            { product_name: "Яблоки красные", product_id: new mongoose.Types.ObjectId(), count: 300, price: 80.00 },
            { product_name: "Бананы импортные", product_id: new mongoose.Types.ObjectId(), count: 250, price: 60.00 },
            { product_name: "Апельсины испанские", product_id: new mongoose.Types.ObjectId(), count: 200, price: 75.00 },
            { product_name: "Гроздья винограда", product_id: new mongoose.Types.ObjectId(), count: 100, price: 150.00 },
            { product_name: "Лимоны средние", product_id: new mongoose.Types.ObjectId(), count: 80, price: 50.00 }
        ]
    },
    {
        name: "Бакалейный лоток",
        type: "лоток",
        characteristics: [
            { key: "размер", value: "очень маленький" },
            { key: "аренда", value: 3000 },
            { key: "коммунальные платежи", value: 500 },
            { key: "прилавков", value: 1 },
            { key: "специализация", value: "бакалея" }
        ],
        sellers: [
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Василий Андреев",
                salary: 30000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Татьяна Беляева",
                salary: 31000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Алексей Смирнов",
                salary: 32000
            }
        ],
        inventory: [
            { product_name: "Сахар белый", product_id: new mongoose.Types.ObjectId(), count: 500, price: 50.00 },
            { product_name: "Соль поваренная", product_id: new mongoose.Types.ObjectId(), count: 400, price: 20.00 },
            { product_name: "Чай чёрный рассыпной", product_id: new mongoose.Types.ObjectId(), count: 200, price: 300.00 },
            { product_name: "Кофе молотый", product_id: new mongoose.Types.ObjectId(), count: 100, price: 450.00 },
            { product_name: "Макароны длинные", product_id: new mongoose.Types.ObjectId(), count: 300, price: 70.00 }
        ]
    },
    {
        name: "Продуктовая точка №5",
        type: "другое",
        characteristics: [
            { key: "размер", value: "маленький" },
            { key: "аренда", value: 15000 },
            { key: "коммунальные платежи", value: 4000 },
            { key: "прилавков", value: 2 },
            { key: "работает до 22:00", value: true }
        ],
        sellers: [
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Юлия Зайцева",
                salary: 38000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Николай Романов",
                salary: 39000
            },
            {
                seller_id: new mongoose.Types.ObjectId(),
                name: "Светлана Козлова",
                salary: 37000
            }
        ],
        inventory: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 180, price: 90.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 140, price: 35.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 70, price: 210.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 280, price: 120.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 90, price: 75.00 }
        ]
    }
];

module.exports = outletsData;