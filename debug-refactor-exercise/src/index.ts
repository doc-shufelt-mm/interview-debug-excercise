import { summarizeRevenue, Order } from "./summarizeRevenue.js";

const orders: Order[] = [
  { id: "A1", category: "Books", price: 10, quantity: 2 },
  { id: "A2", category: "Books", price: 15, quantity: 1, discount: 0.2 },
  { id: "B1", category: "Games", price: 60, quantity: 1 }
];

console.log("Summary:", summarizeRevenue(orders));