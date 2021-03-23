let products = [
  {name: 'Beer', price: 150, stock: 500},
  {name: 'Meat', price: 300, stock: 250},
  {name: 'Spicy Chicken', price: 75, stock: 1000},
  {name: 'Candy', price: 500, stock: 75},
  {name: 'Chocolate', price: 325, stock: 150},

]

db.product.drop();
products.forEach(product => db.product.insert(product));
