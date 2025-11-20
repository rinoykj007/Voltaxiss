# Quick Start Guide - Volt Axis MERN Stack

Get your full-stack application running in minutes!

## Prerequisites Check

Make sure you have these installed:
- ✅ Node.js (v16+)
- ✅ MongoDB (local or Atlas account)
- ✅ npm

## Step-by-Step Setup

### 1. Backend Setup (Server)

```bash
# Navigate to Server folder
cd Server

# Dependencies are already installed! ✓

# Configure MongoDB connection
# Edit Server/.env and update MONGODB_URI if needed

# Start MongoDB (if using local installation)
# Windows: Start MongoDB service from Services app
# Mac: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# Import sample data (includes admin user & products)
npm run seed:import

# Start backend server
npm run dev
```

**✅ Backend should now be running on http://localhost:5000**

Test it: Open http://localhost:5000 in your browser

### 2. Frontend Setup (Client)

Open a **NEW terminal window**:

```bash
# Navigate to Client folder
cd Client

# Install dependencies (if not already installed)
npm install

# Start frontend development server
npm run dev
```

**✅ Frontend should now be running on http://localhost:5173**

## Access the Application

### Main Website
🌐 **URL:** http://localhost:5173

### Admin Dashboard
🔐 **Login URL:** http://localhost:5173/login

**Admin Credentials:**
- Email: `admin@voltaxis.com`
- Password: `admin123456`

## Quick Test Checklist

### Backend Test
- [ ] Visit http://localhost:5000
- [ ] Should see: `{"message":"Welcome to Volt Axis Trading Est. API"...}`
- [ ] Visit http://localhost:5000/api/products
- [ ] Should see list of products

### Frontend Test
- [ ] Visit http://localhost:5173
- [ ] Website homepage loads correctly
- [ ] Navigate to About page
- [ ] Go to http://localhost:5173/login
- [ ] Login with admin credentials
- [ ] Should redirect to admin dashboard

### Admin Dashboard Test
- [ ] Dashboard shows product/message counts
- [ ] Click "Products" in sidebar
- [ ] See list of sample products
- [ ] Try adding a new product
- [ ] Click "Messages" in sidebar
- [ ] See sample contact messages

## Sample Data Included

After running `npm run seed:import`, you get:

### Products (10 items)
- Industrial Safety Helmet
- Safety Goggles
- High-Visibility Safety Vest
- Portland Cement
- Steel Rebar
- Industrial Work Gloves
- LED Work Light
- Safety Harness
- Cable Ties
- First Aid Kit

### Users (2 accounts)
1. **Admin** - admin@voltaxis.com / admin123456
2. **Regular User** - user@example.com / user123456

### Contact Messages (2 sample inquiries)

## Common Commands

### Backend (Server/)
```bash
npm run dev          # Start development server
npm start            # Start production server
npm run seed:import  # Import sample data
npm run seed:delete  # Delete all data
```

### Frontend (Client/)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Environment Variables

### Backend (Server/.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/voltaxis_db
CLIENT_URL=http://localhost:5173
JWT_SECRET=voltaxis_secret_key_change_this_in_production_2024
JWT_EXPIRE=7d
```

### Frontend (Client/.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

### MongoDB Connection Error
**Problem:** Can't connect to MongoDB

**Solutions:**
1. **Using Local MongoDB:**
   - Make sure MongoDB service is running
   - Check connection string: `mongodb://localhost:27017/voltaxis_db`

2. **Using MongoDB Atlas (Cloud):**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster
   - Get connection string
   - Update `MONGODB_URI` in Server/.env
   - Add your IP to whitelist

### Port Already in Use
**Problem:** Port 5000 or 5173 is already in use

**Solution:**
- Backend: Change `PORT` in Server/.env
- Frontend: Vite will automatically try next available port

### CORS Error
**Problem:** Frontend can't connect to backend

**Solution:**
- Make sure both are running
- Check `CLIENT_URL` in backend .env matches frontend URL
- Check `VITE_API_URL` in frontend .env matches backend URL

### Admin Login Not Working
**Problem:** Can't login to admin dashboard

**Solutions:**
1. Make sure backend is running
2. Verify you ran `npm run seed:import` in Server folder
3. Try default credentials: admin@voltaxis.com / admin123456
4. Check browser console for errors
5. Make sure MongoDB has the data

## File Structure Overview

```
accurate-layout-showcase/
├── Client/                      # React Frontend
│   ├── src/
│   │   ├── components/         # UI Components
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── AdminLayout.tsx # Admin dashboard layout
│   │   │   └── ProtectedRoute.tsx
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx # Authentication
│   │   ├── pages/
│   │   │   ├── Index.tsx      # Home page
│   │   │   ├── About.tsx      # About page
│   │   │   ├── Login.tsx      # Admin login
│   │   │   └── admin/         # Admin pages
│   │   │       ├── Dashboard.tsx
│   │   │       ├── Products.tsx
│   │   │       └── Messages.tsx
│   │   ├── services/
│   │   │   └── api.ts         # API service layer
│   │   └── App.tsx            # Main app with routes
│   ├── .env                   # Environment variables
│   └── package.json
│
└── Server/                      # Node.js Backend
    ├── config/
    │   └── db.js               # MongoDB connection
    ├── controllers/            # Business logic
    │   ├── authController.js
    │   ├── productController.js
    │   └── contactController.js
    ├── models/                 # Database schemas
    │   ├── User.js
    │   ├── Product.js
    │   └── Contact.js
    ├── routes/                 # API routes
    │   ├── authRoutes.js
    │   ├── productRoutes.js
    │   └── contactRoutes.js
    ├── middleware/
    │   └── auth.js             # JWT authentication
    ├── utils/
    │   └── seeder.js           # Database seeder
    ├── .env                    # Environment variables
    ├── server.js               # Entry point
    └── package.json

```

## API Endpoints Reference

### Public Endpoints
- `GET /` - API health check
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/contact` - Submit contact form

### Protected Endpoints (Admin Only)
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/contact/messages` - Get all messages
- `PUT /api/contact/messages/:id` - Update message
- `DELETE /api/contact/messages/:id` - Delete message

## Next Steps

1. ✅ Backend is running
2. ✅ Frontend is running
3. ✅ Admin dashboard is accessible
4. ✅ Sample data is loaded

**Now you can:**
- Customize the frontend design
- Add more API endpoints
- Integrate frontend with backend APIs
- Add more features to admin dashboard
- Deploy to production

## Documentation

- 📖 [Complete Setup Guide](./SETUP.md)
- 📖 [Backend API Documentation](./Server/README.md)
- 📖 [Admin Dashboard Guide](./ADMIN_DASHBOARD_GUIDE.md)

## Need Help?

Check these files for detailed information:
- `SETUP.md` - Complete setup guide
- `Server/README.md` - Backend API documentation
- `ADMIN_DASHBOARD_GUIDE.md` - Admin features guide

Happy coding! 🚀
