# Volt Axis Trading Est. - Backend API

Backend server for Volt Axis Trading Est. website built with Node.js, Express, and MongoDB (MERN Stack).

## Features

- RESTful API architecture
- MongoDB database with Mongoose ODM
- JWT authentication
- Password hashing with bcryptjs
- Input validation
- CORS enabled
- Error handling middleware
- Environment variables configuration

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing
- **morgan** - HTTP request logger

## Project Structure

```
Server/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── contactController.js  # Contact form logic
│   └── productController.js  # Product CRUD logic
├── middleware/
│   └── auth.js               # JWT authentication middleware
├── models/
│   ├── Contact.js            # Contact schema
│   ├── Product.js            # Product schema
│   └── User.js               # User schema
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   ├── contactRoutes.js      # Contact endpoints
│   └── productRoutes.js      # Product endpoints
├── utils/
├── .env                      # Environment variables
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies
├── README.md                 # This file
└── server.js                 # Entry point
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Steps

1. **Navigate to the Server folder:**
   ```bash
   cd Server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/voltaxis_db
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_secure_secret_key_here
   JWT_EXPIRE=7d
   ```

4. **Start MongoDB:**

   If using local MongoDB:
   ```bash
   mongod
   ```

   Or use MongoDB Atlas (cloud) by updating MONGODB_URI in `.env`

5. **Run the server:**

   Development mode (with auto-reload):
   ```bash
   npm run dev
   ```

   Production mode:
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/register` | Register new user | Public |
| POST | `/login` | Login user | Public |
| GET | `/me` | Get current user | Private |
| PUT | `/updateprofile` | Update user profile | Private |
| PUT | `/updatepassword` | Update password | Private |

### Product Routes (`/api/products`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/` | Get all products (with filters) | Public |
| GET | `/:id` | Get single product | Public |
| POST | `/` | Create new product | Admin |
| PUT | `/:id` | Update product | Admin |
| DELETE | `/:id` | Delete product | Admin |

**Query Parameters for GET /api/products:**
- `category` - Filter by category
- `search` - Text search in name and description
- `featured` - Filter featured products (true/false)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

### Contact Routes (`/api/contact`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/` | Submit contact form | Public |
| GET | `/messages` | Get all messages | Admin |
| GET | `/messages/:id` | Get single message | Admin |
| PUT | `/messages/:id` | Update message status | Admin |
| DELETE | `/messages/:id` | Delete message | Admin |

## API Request Examples

### Register User
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+966501234567",
  "company": "ABC Company"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Product (Admin)
```bash
POST /api/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Safety Helmet",
  "description": "High-quality industrial safety helmet",
  "category": "Safety Equipment",
  "price": 150,
  "unit": "piece",
  "stock": 100,
  "manufacturer": "SafetyFirst Inc.",
  "featured": true
}
```

### Submit Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+966501234567",
  "company": "XYZ Construction",
  "subject": "Product Inquiry",
  "message": "I would like to know more about your safety equipment."
}
```

## Authentication

Protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

The token is returned when you login or register.

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error message here"
}
```

## Database Models

### User Model
- name, email, password (hashed)
- role (user/admin)
- phone, company
- isActive status

### Product Model
- name, description, category
- price, unit, stock
- images, specifications
- manufacturer, tags
- featured, inStock flags

### Contact Model
- name, email, phone, company
- subject, message
- status (new/read/replied/archived)
- response tracking

## Development

### Running with Nodemon
```bash
npm run dev
```

### Testing API
Use tools like:
- Postman
- Insomnia
- Thunder Client (VS Code extension)
- cURL

## Deployment

### Environment Variables for Production

Make sure to set these in your production environment:
- `NODE_ENV=production`
- Strong `JWT_SECRET`
- MongoDB Atlas connection string
- Correct `CLIENT_URL`

### Deployment Platforms

This backend can be deployed to:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS
- Google Cloud Platform

## MongoDB Setup

### Local MongoDB
Install MongoDB Community Edition from mongodb.com

### MongoDB Atlas (Cloud)
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in .env

## Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens for authentication
- CORS configured for specific origin
- Input validation on all routes
- Environment variables for sensitive data
- Never commit .env file to git

## Contributing

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Support

For issues or questions, please contact the development team.

## License

ISC
