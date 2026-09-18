# Foundable - Dual Dashboard Project

A monorepo containing two React + TypeScript applications built with Vite:

## Project Structure

```
foundable/
├── package.json              # Root workspace config
├── user-app/                 # User-facing application
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/         # ProtectedRoute
│   │   │   └── layout/       # DashboardLayout
│   │   ├── context/          # AuthContext
│   │   ├── pages/
│   │   │   ├── auth/         # Login, Register
│   │   │   └── dashboard/    # Dashboard, Profile, Settings
│   │   └── utils/
│   └── vite.config.ts
├── core-app/                 # Worker/Admin application (called "core")
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/         # ProtectedRoute
│   │   │   └── layout/       # DashboardLayout
│   │   ├── context/          # AuthContext
│   │   ├── pages/
│   │   │   ├── auth/         # Login
│   │   │   └── dashboard/    # Dashboard, Users, Ideas, Analytics, Settings
│   │   └── utils/
│   └── vite.config.ts
└── (original HTML files)     # Static marketing pages
```

## Apps

### User App (`user-app`)
- **Port**: 5173
- **Purpose**: Customer-facing dashboard
- **Routes**:
  - `/login` - User login
  - `/register` - User registration
  - `/dashboard` - Overview with stats & activity
  - `/dashboard/profile` - Profile management
  - `/dashboard/settings` - Account, security, notifications, danger zone

### Core App (`core-app`)
- **Port**: 5174
- **Purpose**: Internal worker/admin dashboard
- **Routes**:
  - `/login` - Worker login
  - `/dashboard` - Platform overview with metrics
  - `/dashboard/users` - User management with filters
  - `/dashboard/ideas` - Idea moderation & review
  - `/dashboard/analytics` - Platform analytics & charts
  - `/dashboard/settings` - Platform config, email, security, team

## Development

```bash
# Install all dependencies
npm run install:all

# Run user app
npm run dev:user

# Run core app
npm run dev:core

# Build both apps
npm run build
```

## Tech Stack

- React 19 + TypeScript
- Vite 6
- React Router 7
- CSS Variables for theming (dark/light mode)
- Shared design system (Archivo font, consistent spacing)

## API Integration

Both apps proxy `/api` requests to `http://localhost:3000` (configured in vite.config.ts).
Expected endpoints:
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/check?handle=...`
- `GET /api/auth/check?email=...`

## Theming

Both apps support dark/light mode via CSS custom properties on `[data-theme="dark"]` / `[data-theme="light"]`.