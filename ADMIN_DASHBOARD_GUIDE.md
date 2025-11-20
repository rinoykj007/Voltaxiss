# Admin Dashboard - Complete Guide

The Volt Axis Trading Est. website now includes a complete admin dashboard with authentication and management features.

## Features

### Authentication

- JWT-based authentication
- Protected routes (admin-only access)
- Login page with validation
- Automatic token refresh
- Session management

### Dashboard Features

1. **Overview Dashboard** - Stats and quick actions
2. **Product Management** - Full CRUD operations for products
3. **Messages Management** - View and manage customer inquiries

## Access the Admin Dashboard

### Login Credentials (After Seeding Backend)

**Admin Account:**

- Email: `admin@voltaxis.com`
- Password: `admin123456`

**Login URL:** `http://localhost:5173/login`

## Admin Routes

| Route              | Description        | Access     |
| ------------------ | ------------------ | ---------- |
| `/login`           | Admin login page   | Public     |
| `/admin/dashboard` | Admin overview     | Admin Only |
| `/admin/products`  | Product management | Admin Only |
| `/admin/messages`  | Contact messages   | Admin Only |

## File Structure

```
Client/src/
├── contexts/
│   └── AuthContext.tsx          # Authentication context & hooks
├── services/
│   └── api.ts                   # API service layer (axios)
├── components/
│   ├── AdminLayout.tsx          # Admin dashboard layout with sidebar
│   └── ProtectedRoute.tsx       # Route protection component
├── pages/
│   ├── Login.tsx                # Login page
│   └── admin/
│       ├── Dashboard.tsx        # Admin overview
│       ├── Products.tsx         # Product management
│       └── Messages.tsx         # Contact message management
└── App.tsx                      # Updated with admin routes
```

## Setup Instructions

### 1. Install Dependencies (if needed)

The admin dashboard uses existing dependencies already installed in your project.

### 2. Configure Environment Variables

Create or update `Client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Backend Server

```bash
cd Server
npm run dev
```

Backend runs on: `http://localhost:5000`

### 4. Start Frontend

```bash
cd Client
npm run dev
```

Frontend runs on: `http://localhost:5173`

### 5. Access Admin Dashboard

1. Navigate to `http://localhost:5173/login`
2. Login with admin credentials:
   - Email: `admin@voltaxis.com`
   - Password: `admin123456`
3. You'll be redirected to `/admin/dashboard`

## Admin Dashboard Pages

### Dashboard Overview (`/admin/dashboard`)

**Features:**

- Display total products count
- Display total messages count
- Display new messages count
- Quick action cards
- System information

**Components:**

- Stat cards with icons
- Quick navigation links
- System status

### Product Management (`/admin/products`)

**Features:**

- View all products in a table
- Search products by name or category
- Add new products
- Edit existing products
- Delete products
- Pagination support

**Product Fields:**

- Name (required)
- Description (required)
- Category (dropdown: Industrial Supplies, Safety Equipment, etc.)
- Price (SAR)
- Unit (piece, set, box, kg, meter, liter, sqm)
- Stock quantity
- Manufacturer
- Featured flag
- In Stock flag

**Actions:**

- ➕ Add Product - Opens dialog with form
- ✏️ Edit - Opens prefilled dialog
- 🗑️ Delete - Confirms before deletion

### Messages Management (`/admin/messages`)

**Features:**

- View all contact form submissions
- Mark messages as read/replied/archived
- Add internal notes or responses
- Delete messages
- View full message details

**Message Fields:**

- Name, Email, Phone, Company
- Subject and Message
- Status (new, read, replied, archived)
- Response/Notes
- Date received

**Status Colors:**

- 🔵 New - Blue
- 🟡 Read - Yellow
- 🟢 Replied - Green
- ⚪ Archived - Gray

## Authentication Flow

### Login Process

1. User enters email and password
2. API validates credentials
3. Server returns JWT token and user data
4. Token stored in localStorage
5. User redirected to `/admin/dashboard`

### Token Management

- Token sent with every API request in Authorization header
- Automatic logout on 401 (Unauthorized) response
- Token stored in localStorage for persistence

### Protected Routes

- All `/admin/*` routes require authentication
- Admin role required for admin routes
- Automatic redirect to `/login` if not authenticated
- Loading state while checking authentication

## API Integration

The admin dashboard is fully integrated with the backend API:

### Auth API

```typescript
authAPI.login(email, password);
authAPI.register(data);
authAPI.getMe();
authAPI.updateProfile(data);
authAPI.updatePassword(currentPassword, newPassword);
```

### Product API

```typescript
productAPI.getAll(params);
productAPI.getById(id);
productAPI.create(data);
productAPI.update(id, data);
productAPI.delete(id);
```

### Contact API

```typescript
contactAPI.submit(data);
contactAPI.getAll(params);
contactAPI.getById(id);
contactAPI.update(id, data);
contactAPI.delete(id);
```

## Using the Auth Context

The `AuthContext` provides authentication state and functions throughout the app:

```typescript
import { useAuth } from "@/contexts/AuthContext";

function MyComponent() {
  const {
    user, // Current user object
    token, // JWT token
    loading, // Loading state
    login, // Login function
    logout, // Logout function
    isAuthenticated, // Boolean
    isAdmin, // Boolean
  } = useAuth();

  // Use authentication state...
}
```

## Customization

### Adding New Admin Pages

1. Create new page in `Client/src/pages/admin/`
2. Import in `App.tsx`
3. Add route in admin section:

```typescript
<Route path="new-page" element={<NewPage />} />
```

4. Add to sidebar in `AdminLayout.tsx`

### Modifying Permissions

Edit `ProtectedRoute.tsx` to add custom permission checks:

```typescript
if (requireCustomPermission && !hasPermission) {
  return <Navigate to="/" replace />;
}
```

### Styling

- Uses Tailwind CSS
- shadcn/ui components
- Consistent with main website theme
- Responsive design included

## Troubleshooting

### Issue: Can't login / 401 Error

**Solution:**

- Ensure backend is running on `http://localhost:5000`
- Check `VITE_API_URL` in `.env`
- Verify admin user exists in database (run seed script)
- Check browser console for errors

### Issue: Page shows "Loading..." forever

**Solution:**

- Check if AuthContext is properly initialized
- Verify localStorage has valid token
- Clear localStorage and login again

### Issue: CORS Errors

**Solution:**

- Ensure backend CORS is configured for `http://localhost:5173`
- Check `CLIENT_URL` in backend `.env`
- Restart both frontend and backend

### Issue: Token expired / Auto logout

**Solution:**

- Token expires after 7 days (configurable in backend)
- Login again to get new token
- Adjust `JWT_EXPIRE` in backend `.env` if needed

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Admin-only access control
- XSS protection via React
- HTTPS recommended for production

## Production Deployment

### Frontend

1. Build the frontend:
   ```bash
   cd Client
   npm run build
   ```
2. Deploy `dist` folder to hosting (Vercel, Netlify, etc.)
3. Update `VITE_API_URL` to production API URL

### Backend

1. Set production environment variables
2. Deploy to hosting (Railway, Render, Heroku)
3. Update CORS to allow production frontend URL

### Security Checklist

- [ ] Change JWT_SECRET to strong random string
- [ ] Change default admin password
- [ ] Enable HTTPS
- [ ] Set secure CORS origins
- [ ] Enable rate limiting
- [ ] Set up monitoring

## Next Steps

1. **Email Integration** - Send email notifications for contact forms
2. **File Upload** - Add image upload for products
3. **Analytics** - Add charts and reports
4. **User Management** - Manage multiple admin users
5. **Activity Logs** - Track admin actions
6. **Export Data** - Export products/messages to CSV
7. **Search Filters** - Advanced filtering options
8. **Bulk Operations** - Bulk edit/delete products

## Support

For issues or questions:

- Check backend API is running
- Review browser console for errors
- Check network tab for failed requests
- Verify environment variables are set correctly

## License

ISC
