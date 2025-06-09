use("tradingOrg");

const productName = "Молоко коровье 3.2%";
const supplierName = "Поставщик АгроТорг";
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-04-30");

db.orders.aggregate([
    {
        $match: {
            supplier_name: supplierName,
            date: { $gte: startDate, $lte: endDate }
        }
    },
    {
        $unwind: "$items"
    },
    {
        $match: {
            "items.product_name": productName
        }
    },
    {
        $group: {
            _id: {
                supplier: "$supplier_name",
                product: "$items.product_name"
            },
            totalQuantity: { $sum: "$items.count" },
            totalPrice: {
                $sum: { $multiply: ["$items.count", "$items.price"] }
            },
            ordersCount: { $sum: 1 }
        }
    }
])