/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

interface Transaction {
  readonly id: number;
  timeStamp: number;
  price: number;
  category: string;
  itemName: string;
}

interface CategoryTotal {
  category: string;
  totalSpent: number;
}

const calculateTotalSpentPerCategory = (
  transactions: Transaction[]
): CategoryTotal[] => {
  const totals: { [category: string]: number } = {};
  transactions.forEach((transaction) => {
    if (totals[transaction.category]) {
      totals[transaction.category] += transaction.price;
    } else {
      totals[transaction.category] = transaction.price;
    }
  });
  const result: CategoryTotal[] = Object.keys(totals).map((category) => ({
    category,
    totalSpent: totals[category],
  }));
  return result;
};

const transactions: Transaction[] = [
  {
    id: 1,
    timeStamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timeStamp: 1656163200000,
    price: 25,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 3,
    timeStamp: 1656249600000,
    price: 15,
    category: "Clothing",
    itemName: "T-shirt",
  },
  {
    id: 4,
    timeStamp: 1656336000000,
    price: 30,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 5,
    timeStamp: 1656422400000,
    price: 50,
    category: "Electronics",
    itemName: "Smartphone",
  },
];
const totalSpentPerCategory = calculateTotalSpentPerCategory(transactions);
console.log(totalSpentPerCategory);
