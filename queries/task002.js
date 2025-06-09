use("tradingOrg");

const productName = "Молоко коровье 3.2%";
const minTotalCount = 3;
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-05-30");

db.sales.aggregate([
    {
        $match: {
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
            _id: "$customer_id",
            totalQuantity: { $sum: "$items.count" }
        }
    },
    {
        $match: {
            totalQuantity: { $gte: minTotalCount },
            _id: { $ne: null }
        }
    },
    {
        $count: "totalCustomersCount"
    }
])