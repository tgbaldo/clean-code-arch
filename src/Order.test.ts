import Coupon from "./Coupon";
import Order from "./Order";

test("Should not creates a order with invalid CPF", () => {
  const cpf = "11111111111";
  expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));``
});

test("Should creates a order with 3 items", () => {
  const cpf = "13914451041";
  const order = new Order(cpf);
  order.addItem("Guitarra", 1000, 2);
  order.addItem("Amplificador", 5000, 1);
  order.addItem("Cabo", 30, 3);

  const total = order.getTotal();

  expect(total).toBe(7090);
});

test("Should creates a order with discount coupon", () => {
  const cpf = "13914451041";
  const order = new Order(cpf);
  order.addItem("Guitarra", 1000, 2);
  order.addItem("Amplificador", 5000, 1);
  order.addItem("Cabo", 30, 3);
  order.addCoupon(new Coupon("VALE20", 20));

  const total = order.getTotal();

  expect(total).toBe(5672);
});
