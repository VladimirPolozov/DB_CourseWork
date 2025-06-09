use("tradingOrg");
const outletName = "Городской универмаг";

db.outlets.aggregate([
    {
        $match: {
            name: outletName
        }
    },
    {
        $project: {
            _id: 0,
            sellers: 1
        }
    }
])