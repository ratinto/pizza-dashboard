# Pizza Dashboard

Author: Ritesh Kumar

## Overview

Pizza Dashboard is a modern web application for managing pizza orders, analytics, and user authentication. Built with Next.js (App Router), NextAuth.js for authentication (Google OAuth), and styled using Tailwind CSS. The dashboard provides a clean, responsive interface for tracking orders, viewing analytics, and more.

## Setup & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/ratinto/pizza-dashboard.git
cd pizza-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.  
You will need Google OAuth credentials. Do NOT commit your secret to the repository.

```
# .env.local
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

- You can generate `NEXTAUTH_SECRET` using:  
  `openssl rand -base64 32`
- Get your Google OAuth credentials from [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and set authorized redirect URI to `http://localhost:3000/api/auth/callback/google`.

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Assumptions & Challenges

- Assumes the developer has Google Cloud access to create OAuth credentials.
- No real database integration; order and analytics data are mocked for demonstration.
- Main challenge: Ensuring proper environment variable handling for secure OAuth configuration.

## Third-Party Libraries Used

Beyond Next.js, NextAuth.js, and Tailwind CSS:

- **react-icons** — for iconography
- **clsx** — for conditional classNames (optional, if present in project)
- **date-fns** — for date formatting (optional, if present)

*(Check `package.json` for exact versions and other possible dependencies.)*

---

**Note:**  
Never commit your real OAuth credentials or secrets to the repository.  
Always use environment variables for sensitive configuration.