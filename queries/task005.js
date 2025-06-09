use("tradingOrg");

const sellerName = "Александр Петров";
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-04-30");

db.sales.aggregate([
    {
        $match: {
            seller_name: sellerName,
            date: { $gte: startDate, $lte: endDate }
        }
    },
    {
        $unwind: "$items"
    },
    {
        $addFields: {
            itemRevenue: {
                $multiply: [
                    "$items.count", "$items.product_price"]
            }
        }
    },
    {
        $group: {
            _id: null,
            totalItemsSold: { $sum: "$items.count" },
            totalRevenue: { $sum: "$itemRevenue" },
                transactionsCount: { $sum: 1 }
        }
    }
])