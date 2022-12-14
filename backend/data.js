/** @format */

//creating an object to return sample products

import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'natet',
      email: 'admmin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'nate',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'nateye',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high Quality Shirt',
    },
    {
      //_id: '2',
      name: 'Nike Slim Pants',
      slug: 'nike-slim-pants',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high Quality Shirt',
    },
    {
      //_id: '3',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high Quality Shirt',
    },
    {
      //_id: '4',
      name: 'Nike Fit Pant',
      slug: 'nike-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high Quality Shirt',
    },
  ],
};
export default data;
