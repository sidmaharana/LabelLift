# Mini Music Distribution Dashboard

This is a mini music distribution dashboard built with Next.js, React, and Bootstrap. It allows users to view, upload, and manage their music tracks.

## Features Completed

- **Login Page:** Mock authentication to access the dashboard.
- **Dashboard Page:** Displays a list of uploaded tracks with search functionality.
- **Track Upload Page:** A form to upload new tracks.
- **Track Details Page:** Dynamic page to view details of a specific track.
- **Theme Switcher:** Switch between light and dark modes.
- **Responsive Design:** The application is designed to be responsive on desktop, tablet, and mobile devices.
- **API Routes:** All data is served from Next.js API routes with mock data.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive, mobile-first front-end web development.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd music-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach

- **Framework:** Next.js was chosen for its powerful features like server-side rendering, API routes, and file-based routing, which are ideal for this type of application.
- **Styling:** Bootstrap (via Bootswatch) was used for its responsive grid system and pre-styled components, allowing for rapid UI development. A custom theme switcher was implemented using CSS variables and localStorage.
- **State Management:** React Hooks (`useState`, `useEffect`) were used for managing component-level state, such as form inputs and fetched data.
- **API:** Next.js API routes were used to create a mock backend, serving track data from a simple in-memory array.
- **Routing:** File-based routing was used for static pages (login, dashboard, upload), and dynamic routing was used for the track details page.