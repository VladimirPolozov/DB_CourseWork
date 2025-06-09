use("tradingOrg");

const productName = "Яблоки красные";
const outletType = "киоск";
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-04-30");

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
        $lookup: {
            from: "outlets",
            localField: "outlet_id",
            foreignField: "_id",
            as: "outlet_info"
        }
    },
    {
        $addFields: {
            outlet_type: { $arrayElemAt: ["$outlet_info.type", 0] }
        }
    },
    {
        $match: {
            outlet_type: outletType
        }
    },
    {
        $group: {
            _id: "$outletType",
            outletName: { $first: "$outlet_info.name" },
            totalQuantity: { $sum: "$items.count" },
            totalRevenue: {
                $sum: { $multiply: ["$items.count", "$items.product_price"] }
            },
            saleCount: { $sum: 1 }
        }
    }
])