const mongoose = require('mongoose');

const ordersData = [
    {
        date: new Date('2025-04-10'),
        supplier_name: "Поставщик АгроТорг",
        supplier_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 100, price: 85.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 120, price: 32.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 60, price: 200.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 200, price: 115.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 80, price: 70.00 }
        ]
    },
    {
        date: new Date('2025-04-11'),
        supplier_name: "ФудСервис",
        supplier_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Масло подсолнечное рафинированное", product_id: new mongoose.Types.ObjectId(), count: 90, price: 105.00 },
            { product_name: "Картофель свежий мытый", product_id: new mongoose.Types.ObjectId(), count: 300, price: 22.00 },
            { product_name: "Говядина грудинка охлаждённая", product_id: new mongoose.Types.ObjectId(), count: 50, price: 440.00 },
            { product_name: "Рис шлифованный круглозёрный", product_id: new mongoose.Types.ObjectId(), count: 100, price: 65.00 },
            { product_name: "Йогурт натуральный без сахара", product_id: new mongoose.Types.ObjectId(), count: 120, price: 50.00 }
        ]
    },
    {
        date: new Date('2025-04-12'),
        supplier_name: "Золотой Берег",
        supplier_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Яблоки красные", product_id: new mongoose.Types.ObjectId(), count: 150, price: 75.00 },
            { product_name: "Бананы импортные", product_id: new mongoose.Types.ObjectId(), count: 200, price: 55.00 },
            { product_name: "Апельсины испанские", product_id: new mongoose.Types.ObjectId(), count: 180, price: 70.00 },
            { product_name: "Гроздья винограда", product_id: new mongoose.Types.ObjectId(), count: 90, price: 140.00 },
            { product_name: "Лимоны средние", product_id: new mongoose.Types.ObjectId(), count: 70, price: 45.00 }
        ]
    },
    {
        date: new Date('2025-04-13'),
        supplier_name: "МясоТорг",
        supplier_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Сахар белый", product_id: new mongoose.Types.ObjectId(), count: 200, price: 48.00 },
            { product_name: "Соль поваренная", product_id: new mongoose.Types.ObjectId(), count: 100, price: 18.00 },
            { product_name: "Чай чёрный рассыпной", product_id: new mongoose.Types.ObjectId(), count: 50, price: 290.00 },
            { product_name: "Кофе молотый", product_id: new mongoose.Types.ObjectId(), count: 40, price: 440.00 },
            { product_name: "Макароны длинные", product_id: new mongoose.Types.ObjectId(), count: 120, price: 68.00 }
        ]
    },
    {
        date: new Date('2025-04-14'),
        supplier_name: "Эко Продукты",
        supplier_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 110, price: 84.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 130, price: 33.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 65, price: 195.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 210, price: 112.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 85, price: 69.00 }
        ]
    }
];

module.exports = ordersData;