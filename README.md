# 🍕 Pizza Dashboard

A modern dashboard app for managing pizza orders, analytics, and more. Built with **Next.js App Router**, **Tailwind CSS**, and **NextAuth**.

## Features

- **Dashboard**: Quick overview of your pizza business.
- **Pizza Orders**: List and manage customer orders.
- **Analytics**: Visual insights (top customers, popular pizzas, trends).
- **Notifications**: View recent activity and alerts.
- **Settings**: Profile and appearance (with global dark mode).
- **Authentication**: Google sign-in via NextAuth.
- **Responsive**: Works beautifully on mobile & desktop.
- **Loading Indicators**: Smooth experience during navigation and async actions.

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/pizza-dashboard.git
cd pizza-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Copy `.env.example` to `.env.local` and fill in your values (Google OAuth, etc):

```bash
cp .env.example .env.local
```

Example:

```
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and login with Google.

## Project Structure


## Customization

- **Dark Mode**: Toggle from settings, persists across sessions.
- **Add Pages**: Copy a folder in `app/` to create new sections.
- **Change Theme**: Adjust Tailwind config or component classes.

## Deployment

This app is ready for [Vercel](https://vercel.com/) deployment (or any Next.js host):

```bash
# Build for production
npm run build

# Start
npm start
```

## License

MIT

---

**Made for rapid pizza business management. Enjoy!**