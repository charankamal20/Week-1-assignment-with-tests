/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656259600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656019200000,
      price: 15,
      category: 'Clothing',
      itemName: 'T-Shirt',
    },
    {
      id: 4,
      timestamp: 1656364800000,
      price: 30,
      category: 'Electronics',
      itemName: 'Headphones',
    },
    {
      id: 5,
      timestamp: 1656105600000,
      price: 25,
      category: 'Clothing',
      itemName: 'Jeans',
    },
  ];
  
  
  function calculateTotalSpentByCategory(transactions) {
    let result = [];
    let newFlag = true;
  
    for(let i = 0; i < transactions.length; i++)  {
      // console.log(transactions[i].category);
      for(let j = 0; j < result.length; j++)  {
        // console.log(transactions[i][3]);
        // console.log(Object.keys(result[j])[0]);
  
        if(transactions[i].category === Object.keys(result[j])[0])  {
          newFlag = false;
          result[j][transactions[i].category]+=transactions[i].price; // adding price to the initial value
          break;
        }
      }
      if(newFlag) {
        let temp = { [transactions[i].category] : transactions[i].price};
        result.push(temp);
      }
      newFlag = true;
    }
  
    return result;
  }
  
  console.log(calculateTotalSpentByCategory(transactions));
  
  module.exports = calculateTotalSpentByCategory;
  