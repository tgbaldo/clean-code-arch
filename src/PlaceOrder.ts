import Coupon from "./Coupon";
import Order from "./Order";

export default class PlaceOrder {
  private coupons: Coupon[];
  private orders: Order[];

  constructor() {
    this.coupons = [
      new Coupon("VALE20", 20),
      new Coupon("VALE30", 30),
    ];
    this.orders = [];
  }
  public execute(input: any) {
    const order = new Order(input.cpf);
    for (const item of input.items) {
      order.addItem(item.description, item.price, item.quantity);
    }
    if (input.coupon) {
      const coupon = this.coupons.find(c => c.code === input.coupon);
      if (coupon) {
        order.addCoupon(coupon);
      }
    }

    const total = order.getTotal();
    this.orders.push(order);
    return { total };
  }
}
