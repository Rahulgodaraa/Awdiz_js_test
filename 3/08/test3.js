//Q1

const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "Shoes", category: "Clothing", price: 80 }
    ];
const res = [];
    function filterAndTransformProducts(products, category) {
            products.filter((ele)=> {
               if (ele.category  === category){
                 (res.push(`"${ele.name} : ${ele.price} "`))
               }
            })
            // console.log(res)
        }

        filterAndTransformProducts(products, "Electronics" );
         

//Q2

const orders = [
    { orderId: 1, tableNumber: 2, amount: 30 },
    { orderId: 2, tableNumber: 1, amount: 20 },
    { orderId: 3, tableNumber: 2, amount: 50 },
    { orderId: 4, tableNumber: 3, amount: 40 },
    { orderId: 5, tableNumber: 1, amount: 10 }
    ];

var sum = 0;
const obj = {}
    function sumByTable(orders) {
        for (let i = 1; i <= orders.length-1; i++ ){
            obj[i] = orders[i].amount;
         if (orders[i].tableNumber === 1) {
            obj[i]+= orders[i];
         }
         else if (orders[i].tableNumber === 2) {
            obj[i]+= orders[i];
         }
        }
        console.log(obj)

        }
sumByTable(orders);  
