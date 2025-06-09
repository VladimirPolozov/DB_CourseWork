use("tradingOrg");

const productName = "Молоко коровье 3.2%";
const minTotalCount = 90;
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-04-30");

db.orders.aggregate([
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
            supplier_name: "$supplier_name",
            totalQuantity: { $sum: "$items.count" }
        }
    },
    {
        $match: {
            totalQuantity: { $gte: minTotalCount }
        }
    }
])