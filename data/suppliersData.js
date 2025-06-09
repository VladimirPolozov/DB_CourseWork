const mongoose = require('mongoose');

const suppliersData = [
    {
        name: "Поставщик АгроТорг",
        products: [
            {
                product_name: "Молоко коровье 3.2%",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 89.90
            },
            {
                product_name: "Хлеб пшеничный нарезной",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 34.50
            },
            {
                product_name: "Сыр твёрдый Российский",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 210.00
            },
            {
                product_name: "Яйца куриные С0",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 110.00
            },
            {
                product_name: "Картофель свежий мытый",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 60.00
            }
        ]
    },
    {
        name: "ФудСервис",
        products: [
            {
                product_name: "Яйца куриные С0",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 120.00
            },
            {
                product_name: "Гречка продел натуральная",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 75.30
            },
            {
                product_name: "Картофель свежий мытый",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 28.00
            },
            {
                product_name: "Йогурт натуральный без сахара",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 56.90
            },
            {
                product_name: "Сыр твёрдый Российский",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 199.00
            }
        ]
    },
    {
        name: "Золотой Берег",
        products: [
            {
                product_name: "Масло подсолнечное рафинированное",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 110.00
            },
            {
                product_name: "Картофель свежий мытый",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 25.00
            },
            {
                product_name: "Хлеб пшеничный нарезной",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 40.50
            },
            {
                product_name: "Сыр твёрдый Российский",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 210.00
            },
            {
                product_name: "Говядина грудинка охлаждённая",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 500.00
            }
        ]
    },
    {
        name: "МясоТорг",
        products: [
            {
                product_name: "Говядина грудинка охлаждённая",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 450.00
            },
            {
                product_name: "Хлеб пшеничный нарезной",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 48.50
            },
            {
                product_name: "Сыр твёрдый Российский",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 207.00
            },
            {
                product_name: "Рис шлифованный круглозёрный",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 43.00
            },
            {
                product_name: "Масло подсолнечное рафинированное",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 120.00
            }
        ]
    },
    {
        name: "Эко Продукты",
        products: [
            {
                product_name: "Рис шлифованный круглозёрный",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 68.00
            },
            {
                product_name: "Йогурт натуральный без сахара",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 55.90
            },
            {
                product_name: "Говядина грудинка охлаждённая",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 420.00
            },
            {
                product_name: "Гречка продел натуральная",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 68.30
            },
            {
                product_name: "Хлеб пшеничный нарезной",
                product_id: new mongoose.Types.ObjectId(),
                product_price: 43.50
            }
        ]
    }
];

module.exports = suppliersData;