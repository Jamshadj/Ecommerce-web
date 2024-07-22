# E-commerce Website Project

## Description
This project is a simple e-commerce website built using Next.js for the frontend and Node.js for the backend. The application allows users to browse products with a focus on clean code, performance optimization, and good UX/UI practices.

## Technologies Used
- Next.js (v14)
- Node.js
- Express.js
- React
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

## Features
- User Authentication (Login and Registration)
- CRUD Operations on Products
- Home Page (Displaying Featured Products)
- Product Listing Page
- Product Detail Page

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (Running locally or a MongoDB Atlas account)

### Installation
1. Clone the repository:
   git clone https://github.com/Jamshadj/Ecommerce-web.git
   cd repository directory
2.Install backend dependencies:
   cd backend
   npm install
3.Install frontend dependencies:
   cd frontend
   npm install
4.Start the backend server
   cd backend
   npm run dev
5.Start the backend server
   cd frontend
   npm run dev
Access web in http://localhost:3000/

Ignored .env file for testing purpose

API Endpoints
GET /api/products: Get all products
GET /api/products/:id: Get a single product by ID
POST /api/products: Create a new product
PUT /api/products/:id: Update a product by ID
DELETE /api/products/:id: Delete a product by ID
Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user

Testing API Using Postman
You can test the API endpoints using Postman. Here is the Postman collection link:
https://api.postman.com/collections/27580951-bda16b37-bbfa-4d89-a3d9-dd7bc94442ef?access_key=PMAT-01J3CG11DVF2R6MZ72YHQJ3FVE

Sample Data

{
    "name": "Motorola g64 5G",
    "description": "Unleash the ultimate performance with the MediaTek Dimensity 7025 octa-core processor. The powerful octa-core processor offers an unbelievably smooth experience while gaming, multi-tasking, or consuming content. MediaTek Dimensity 7025 is based on 2.5GHz frequencies that bring you Superfast 5G performance, an unparalleled camera experience, efficient video processing, and superior gaming capabilities. Its advanced 5G technology ensures faster downloads and better power efficiency, making it the perfect choice for those who demand the best.",
    "price": 12999,
    "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q…la-original-imagzzd4qxuwg8n7.jpeg?q=70&crop=false",
    "countInStock": 10,
    "caterogy":"mobiles"
}

Feel free to contribute to this project by opening issues or submitting pull requests.
