use("tradingOrg");

db.outlets.aggregate([
    {
        $match: {
            name: "Городской универмаг"
        }
    },
    {
        $unwind: "$inventory"
    },
    {
        $project: {
            _id: 0,
            product_name: "$inventory.product_name",
            count: "$inventory.count"
        }
    }
])