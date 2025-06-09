use("tradingOrg");

const productName = "Картофель свежий мытый";
const outletType = "магазин";

db.outlets.aggregate([
    {
        $match: {
            type: outletType
        }
    },
    {
        $unwind: "$inventory"
    }, 
    {
        $match: {
            "inventory.product_name": productName
        }
    },
    {
        $project: {
            _id: 0,
            outletName: "$name",
            product_name: "$inventory.product_name",
            count: "$inventory.count",
            price: "$inventory.product_price"
        }
    }
])