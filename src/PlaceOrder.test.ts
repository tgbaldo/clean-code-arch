import PlaceOrder from "./PlaceOrder";

test("Should do a order", () => {
  const input = {
    cpf: "13914451041",
    items: [
      { description: "Guitarra", price: 1000, quantity: 2 },
      { description: "Amplificador", price: 5000, quantity: 1 },
      { description: "Cabo", price: 30, quantity: 3 },
    ],
    coupon: "VALE20"
  };
  const placeOrder = new PlaceOrder();
  const output = placeOrder.execute(input);
  expect(output.total).toBe(5672);
});
