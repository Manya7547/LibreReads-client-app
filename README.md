# LibreReads

LibreReads is a Next.js-based web application that provides a platform for accessing and downloading free books and articles. The application features a modern, responsive interface built with TypeScript, Tailwind CSS, and Next.js 14.

## Features

-   📚 Browse through a collection of free books
-   🔍 View detailed book information including title, author, and description
-   📥 Download books directly through the platform
-   🎨 Responsive design that works on desktop and mobile devices
-   🖼️ Image optimization using Next.js Image component
-   🎯 Server-side rendering for better performance and SEO

## Tech Stack

-   **Framework**: Next.js 14.2.3
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

-   Node.js 18.17.0 or later
-   npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd elib-client-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
BACKEND_URL=your_backend_url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── (home)/
│   │   ├── Components/
│   │   └── page.tsx
│   ├── book/
│   │   └── [bookId]/
│   └── layout.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
└── types/
    └── index.ts
```

## Available Scripts

-   `npm run dev` - Starts the development server
-   `npm run build` - Creates an optimized production build
-   `npm run start` - Starts the production server
-   `npm run lint` - Runs ESLint for code quality

## Environment Variables

The following environment variables are required:

-   `BACKEND_URL`: The URL of your backend API server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2024 LibreReads All rights reserved.

## Deployment

The easiest way to deploy your LibreReads app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
