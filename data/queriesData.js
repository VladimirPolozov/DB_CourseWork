const mongoose = require('mongoose');

const queriesData = [
    {
        date: new Date('2025-04-01'),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 50 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 40 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 30 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 60 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 25 }
        ]
    },
    {
        date: new Date('2025-04-02'),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Масло подсолнечное рафинированное", product_id: new mongoose.Types.ObjectId(), count: 35 },
            { product_name: "Картофель свежий мытый", product_id: new mongoose.Types.ObjectId(), count: 100 },
            { product_name: "Говядина грудинка охлаждённая", product_id: new mongoose.Types.ObjectId(), count: 20 },
            { product_name: "Рис шлифованный круглозёрный", product_id: new mongoose.Types.ObjectId(), count: 45 },
            { product_name: "Йогурт натуральный без сахара", product_id: new mongoose.Types.ObjectId(), count: 30 }
        ]
    },
    {
        date: new Date('2025-04-03'),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Яблоки красные", product_id: new mongoose.Types.ObjectId(), count: 70 },
            { product_name: "Бананы импортные", product_id: new mongoose.Types.ObjectId(), count: 80 },
            { product_name: "Апельсины испанские", product_id: new mongoose.Types.ObjectId(), count: 60 },
            { product_name: "Гроздья винограда", product_id: new mongoose.Types.ObjectId(), count: 25 },
            { product_name: "Лимоны средние", product_id: new mongoose.Types.ObjectId(), count: 35 }
        ]
    },
    {
        date: new Date('2025-04-04'),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Сахар белый", product_id: new mongoose.Types.ObjectId(), count: 90 },
            { product_name: "Соль поваренная", product_id: new mongoose.Types.ObjectId(), count: 50 },
            { product_name: "Чай чёрный рассыпной", product_id: new mongoose.Types.ObjectId(), count: 20 },
            { product_name: "Кофе молотый", product_id: new mongoose.Types.ObjectId(), count: 15 },
            { product_name: "Макароны длинные", product_id: new mongoose.Types.ObjectId(), count: 40 }
        ]
    },
    {
        date: new Date('2025-04-05'),
        outlet_id: new mongoose.Types.ObjectId(),
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 60 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 50 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 35 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 70 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 30 }
        ]
    }
];

module.exports = queriesData;