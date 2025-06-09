use("tradingOrg");

db.sales.aggregate([
    {
        $match: {
          customer_id: { $ne: null }
        }
    },
    {
        $group: {
            _id: "$customer_id",
            transactionCount: { $sum: 1 },
            totalItems: {
                $sum: { $size: "$items" }
            },
            totalSpent: {
                $sum: {
                    $map: {
                        input: "$items",
                        as: "item",
                        in: {
                            $multiply: [
                                "$$item.count",
                                "$$item.product_price"
                            ]
                        }
                    }
                }
            }
        }
    },
    {
        $sort: {
            transactionCount: -1
        }
    }
])