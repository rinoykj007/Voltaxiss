# Volt Axis Trading Est. - Complete Setup Guide

This project is a full-stack MERN application with a React frontend and Node.js/Express backend.

## Project Structure

```
accurate-layout-showcase/
├── Client/          # React + Vite frontend
└── Server/          # Node.js + Express backend
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager

## Quick Start

### 1. Backend Setup

```bash
# Navigate to Server folder
cd Server

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Update .env with your configuration
# Important: Set MONGODB_URI to your MongoDB connection string

# Start MongoDB (if using local installation)
# On Windows: Run MongoDB service from Services
# On Mac: brew services start mongodb-community
# On Linux: sudo systemctl start mongod

# Import sample data (optional but recommended)
npm run seed:import

# Start the backend server
npm run dev
```

Backend will run on `http://localhost:5000`

**Test the API:**
Open your browser and visit: `http://localhost:5000`

You should see:
```json
{
  "message": "Welcome to Volt Axis Trading Est. API",
  "version": "1.0.0",
  "status": "active"
}
```

### 2. Frontend Setup

Open a new terminal window:

```bash
# Navigate to Client folder
cd Client

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## Default Credentials (After Seeding)

After running `npm run seed:import`, you can use these credentials:

**Admin Account:**
- Email: `admin@voltaxis.com`
- Password: `admin123456`

**Regular User:**
- Email: `user@example.com`
- Password: `user123456`

## Environment Configuration

### Backend (.env)

Located in `Server/.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/voltaxis_db
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_secure_secret_key
JWT_EXPIRE=7d
```

**Important:**
- For **MongoDB Atlas** (cloud), replace `MONGODB_URI` with your Atlas connection string
- Change `JWT_SECRET` to a strong random string in production
- Update `CLIENT_URL` if your frontend runs on a different port

## MongoDB Setup Options

### Option 1: Local MongoDB

1. Download and install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/voltaxis_db`

### Option 2: MongoDB Atlas (Cloud - Recommended)

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add your IP address to whitelist (or use 0.0.0.0/0 for development)
4. Create a database user
5. Get connection string and update `MONGODB_URI` in `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/voltaxis_db?retryWrites=true&w=majority
   ```

## Available Scripts

### Backend (Server/)

```bash
npm start          # Start production server
npm run dev        # Start development server with auto-reload
npm run seed:import    # Import sample data
npm run seed:delete    # Delete all data
```

### Frontend (Client/)

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## API Endpoints

Once the backend is running, these endpoints are available:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all messages (admin only)

Full API documentation is in [Server/README.md](Server/README.md)

## Testing the Setup

### 1. Test Backend API

Using cURL or Postman:

```bash
# Test health check
curl http://localhost:5000

# Get all products
curl http://localhost:5000/api/products

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@voltaxis.com","password":"admin123456"}'
```

### 2. Test Frontend

1. Open `http://localhost:5173` in your browser
2. Navigate through the pages
3. Test the contact form
4. Check the products page

## Connecting Frontend to Backend

The frontend is configured to connect to the backend at `http://localhost:5000`.

To change this, update the API base URL in your frontend configuration (typically in a constants or config file).

## Common Issues and Solutions

### Issue: MongoDB connection failed

**Solution:**
- Ensure MongoDB is running (check with `mongod --version`)
- Verify `MONGODB_URI` in `.env` is correct
- For MongoDB Atlas, check network access and database user credentials

### Issue: Port already in use

**Solution:**
- Backend: Change `PORT` in `.env`
- Frontend: Vite will automatically try the next available port

### Issue: CORS errors

**Solution:**
- Ensure `CLIENT_URL` in backend `.env` matches your frontend URL
- Check that CORS is properly configured in `server.js`

### Issue: Dependencies installation fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Production Deployment

### Backend Deployment

Recommended platforms:
- **Railway** - Easy deployment with MongoDB
- **Render** - Free tier available
- **Heroku** - Popular choice
- **DigitalOcean** - More control

Set environment variables in your hosting platform dashboard.

### Frontend Deployment

Recommended platforms:
- **Vercel** - Optimized for React/Vite
- **Netlify** - Simple deployment
- **GitHub Pages** - Free for public repos
- **Firebase Hosting** - Google's hosting solution

Build command: `npm run build`
Output directory: `dist`

## Development Workflow

1. Start MongoDB
2. Start backend server in one terminal: `cd Server && npm run dev`
3. Start frontend in another terminal: `cd Client && npm run dev`
4. Make changes and test
5. Backend auto-reloads with nodemon
6. Frontend auto-reloads with Vite HMR

## Next Steps

1. Review the API documentation in [Server/README.md](Server/README.md)
2. Customize the models to fit your business needs
3. Add more API endpoints as needed
4. Integrate the frontend with the backend APIs
5. Add file upload functionality for product images
6. Implement email notifications for contact forms
7. Add more authentication features (password reset, email verification)

## Support

For questions or issues:
1. Check the README files in Client and Server folders
2. Review the code comments
3. Check MongoDB connection
4. Verify all environment variables are set correctly

## License

ISC
