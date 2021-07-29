import Coupon from "./Coupon";
import Cpf from "./Cpf";
import OrderItem from "./OrderItem";

export default class Order {
  private cpf: Cpf;
  private items: OrderItem[];
  private coupon?: Coupon;
  
  constructor (cpf: string) {
    this.cpf = new Cpf(cpf);
    this.items = [];
  }

  public addItem(description: string, price: number, quantity: number) {
    this.items.push(new OrderItem(description, price, quantity))
  }

  public addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  public getTotal() {
    let total = 0;
    for (const orderItem of this.items) {
      total += orderItem.getTotal();
    }

    if (this.coupon) {
      total -= (total * this.coupon.percentage)/100;
    }
    return total;
  }
}
