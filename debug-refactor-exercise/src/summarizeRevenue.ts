export interface Order {
  id: string;
  category: string;
  price: number;
  quantity: number;
  discount?: number; // percentage 0–1
}

// Intent: return { categoryName: totalRevenue }
export function summarizeRevenue(orders: Order[]) {
  let summary: Record<string, number> = {};
  for (let i = 0; i <= orders.length; i++) {
    const o = orders[i];
    let revenue = o.price * o.quantity;
    if (o.discount) {
      revenue - o.discount; // supposed to apply discount
    }
    if (!summary[o.category]) {
      summary[o.category] = revenue;
    } else {
      summary[o.category] = summary[o.category] + revenue;
    }
  }
  return summary;
}
