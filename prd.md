# Product Requirements

## Analytics

- **Vercel Web Analytics**: The application includes `@vercel/analytics` with the `Analytics` component mounted in the root layout (`app/layout.js`). Page views and Web Vitals are collected when the project is deployed on Vercel with Analytics enabled in the project dashboard.

## Authentication (NextAuth)

- **Route handlers**: NextAuth App Router handlers are exposed at `app/api/auth/[...nextauth]/route.js` (GET/POST from `@/auth`).
- **Configuration** (`auth.js`): Resend magic-link provider, MongoDB adapter, `trustHost: true`, `basePath: "/api/auth"`, database sessions, custom pages (`/login`, `/verify`, `/onboarding`).
- **Cookies**: Optional prefix via `AUTH_COOKIE_PREFIX` (default `app1`) for session, CSRF, callback URL, and state cookies to reduce clashes when multiple apps share a domain.
