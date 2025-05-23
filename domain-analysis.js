/*  1. (10 баллов) Проведите анализ предметной области.
   
    Определите требуемые коллекции и схемы хранения данных для них для выбранной предметной области так,
    чтобы они позволяли хранить все представленные в описании предметной области данные. Обоснуйте выбор.
    
*/

// collection: customers
{
    _id: CUSTOMER_ID,
    name: String,
    characteristics: String
}

// collection: outlets
{
    _id: ObjectID
    type: String, // for example: "general_store", "store", "kiosk", "stand" and e.t.c
    size: Number,
    rent_payment: Number,
    utilities_payment: Number,
    stands_count: Number,
    sellers: [{
        seller_id: ObjectID,
        name: String,
        salary: Number
    }],
    halls: [{ // for general stores and stores only
        hall_id: ObjectID
    }],
    sections: [{ // for general stores only
        section_id: ObjectID
    }],
    products: [{
        product_id: ObjectID,
        count: Number
    }]
}

// collection: sales
{
    _id: ObjectID,
    date: new Date(),
    customer_id: ObjectID, // for general stores and stores only
    outlet_id: ObjectID,
    items: [{
        product_id: ObjectID,
        count: Number
    }]
}

// collection: products
{
    _id: ObjectID,
    name: String,
    suppliers: [{}]
}
