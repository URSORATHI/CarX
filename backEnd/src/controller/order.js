const Order = require("../models/order");

exports.getOrders = (req, res) => {
  const { firstName, lastName, email, contact, name, price, category } =
    req.body;

  const order = new Order({
    firstName,
    lastName,
    email,
    contact,
    name,
    price,
    category,
  });

  order.save((error, order) => {
    if (error) return res.status(400).json({ error });
    if (order) {
      console.log(order);
      res.status(201).json({ order });
    }
  });
};
