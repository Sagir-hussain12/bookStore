# BookStore E-Commerce API

## Description
A backend API for an online bookstore with user authentication and book management functionality.

## Features
- User registration and login
- Password hashing with bcrypt
- Book CRUD operations
- MongoDB database

## API Endpoints

### Authentication
| Endpoint       | Method | Description          | Request Body              |
|----------------|--------|----------------------|---------------------------|
| `/api/signup`  | POST   | Register new user    | `{fullname, email, password}` |
| `/api/login`   | POST   | User login           | `{email, password}`       |

### Books
| Endpoint       | Method | Description          |
|----------------|--------|----------------------|
| `/api/books`   | GET    | Get all books        |
| `/api/books`   | POST   | Add new book         |

## Installation
1. Clone the repository:
```bash
git clone <your-repo-url>
cd bookstore-api

Install dependencies:

bash
npm install
Create .env file:

env
MONGODB_URI=your_mongodb_connection_string
Start the server:

bash
npm start
Response Examples
Successful Signup:

json
{
  "message": "User created successfully",
  "user": {
    "_id": "123abc",
    "fullname": "John Doe",
    "email": "john@example.com"
  }
}
Error Response:

json
{
  "message": "User already exists"
}
Technologies Used
Node.js

# deployed link - https://book-store-tlbs.vercel.app/

Express

MongoDB

bcrypt
