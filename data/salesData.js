const mongoose = require('mongoose');

const salesData = [
    {
        date: new Date('2025-04-20T10:30:00'),
        customer_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        seller_id: new mongoose.Types.ObjectId(),
        seller_name: 'Александр Петров',
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 90.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 35.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 210.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 120.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 75.00 }
        ]
    },
    {
        date: new Date('2025-04-20T12:45:00'),
        customer_id: new mongoose.Types.ObjectId(),
        outlet_id: new mongoose.Types.ObjectId(),
        seller_id: new mongoose.Types.ObjectId(),
        seller_name: 'Ольга Смирнова',
        items: [
            { product_name: "Масло подсолнечное рафинированное", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 110.00 },
            { product_name: "Картофель свежий мытый", product_id: new mongoose.Types.ObjectId(), count: 3, product_price: 25.00 },
            { product_name: "Говядина грудинка охлаждённая", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 450.00 },
            { product_name: "Рис шлифованный круглозёрный", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 68.00 },
            { product_name: "Йогурт натуральный без сахара", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 55.00 }
        ]
    },
    {
        date: new Date('2025-04-21T09:15:00'),
        outlet_id: new mongoose.Types.ObjectId(),
        seller_id: new mongoose.Types.ObjectId(),
        seller_name: 'Анна Морозова',
        items: [
            { product_name: "Яблоки красные", product_id: new mongoose.Types.ObjectId(), count: 4, product_price: 80.00 },
            { product_name: "Бананы импортные", product_id: new mongoose.Types.ObjectId(), count: 5, product_price: 60.00 },
            { product_name: "Апельсины испанские", product_id: new mongoose.Types.ObjectId(), count: 3, product_price: 75.00 },
            { product_name: "Гроздья винограда", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 150.00 },
            { product_name: "Лимоны средние", product_id: new mongoose.Types.ObjectId(), count: 3, product_price: 50.00 }
        ]
    },
    {
        date: new Date('2025-04-21T14:00:00'),
        outlet_id: new mongoose.Types.ObjectId(),
        seller_id: new mongoose.Types.ObjectId(),
        seller_name: 'Василий Андреев',
        items: [
            { product_name: "Сахар белый", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 50.00 },
            { product_name: "Соль поваренная", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 20.00 },
            { product_name: "Чай чёрный рассыпной", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 300.00 },
            { product_name: "Кофе молотый", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 450.00 },
            { product_name: "Макароны длинные", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 70.00 }
        ]
    },
    {
        date: new Date('2025-04-22T11:20:00'),
        outlet_id: new mongoose.Types.ObjectId(),
        seller_id: new mongoose.Types.ObjectId(),
        seller_name: 'Юлия Зайцева',
        items: [
            { product_name: "Молоко коровье 3.2%", product_id: new mongoose.Types.ObjectId(), count: 3, product_price: 90.00 },
            { product_name: "Хлеб пшеничный нарезной", product_id: new mongoose.Types.ObjectId(), count: 2, product_price: 35.00 },
            { product_name: "Сыр твёрдый Российский", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 210.00 },
            { product_name: "Яйца куриные С0", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 120.00 },
            { product_name: "Гречка продел натуральная", product_id: new mongoose.Types.ObjectId(), count: 1, product_price: 75.00 }
        ]
    }
];

module.exports = salesData;