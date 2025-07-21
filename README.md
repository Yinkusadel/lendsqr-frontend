# LENDSQR FRONTEND ENGINEERING ASSESSMENT

## Overview

This is a frontend engineering assessment for Lendsqr, built with React, TypeScript, and SCSS. It features a responsive dashboard UI, user list, filters, login page, and basic unit tests using React Testing Library.

---

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node.js](http://nodejs.org/) is easy to install and includes [NPM](https://npmjs.org/).  
You should be able to run the following commands after installation:

    $ node --version
    v16.x.x

    $ npm --version
    v8.x.x

#### Node installation on macOS (OS X)

Use Terminal, located in  
`/Applications/Utilities/Terminal.app`.

First install [Homebrew](http://brew.sh/) if not already installed:

    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Then install Node:

    $ brew install node

#### Node installation on Linux

    $ sudo apt-get update
    $ sudo apt-get install nodejs npm

#### Node installation on Windows

Go to [nodejs.org](http://nodejs.org/) and download the installer.  
Also ensure `git` is available in your system PATH.

---

## Install

Clone the repository and install dependencies:

    $ git clone https://github.com/your-username/lendsqr-frontend.git
    $ cd lendsqr-frontend
    $ npm install

---

## Start & watch

Run the development server:

    $ npm start

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Run Tests

To run all unit tests:

    $ npm test

Tests are written using **React Testing Library** with **Jest**. You'll find tests for core components like the Login page and reusable logic.

---

## How to Approach the Test

1. **Login Screen**: Validate required fields and submit behavior.
2. **Dashboard Layout**: Create a layout with sidebar and header.
3. **User List**: Display users in a table with pagination and filters.
4. **Filter Component**: A toggleable dropdown with date picker and filter fields.
5. **More Dropdown**: Each user row includes a “More” menu with actions.
6. **User Detail Page**: Clicking a user row routes to a new detail view.
7. **Responsiveness**: The layout should adapt to smaller screens.
8. **Testing**: Validate that form logic, UI states, and interactions work.

---

## Project Structure

    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── shared/
    │   │   ├── users/
    │   ├── pages/
    │   │   ├── Login.tsx
    │   │   ├── Dashboard.tsx
    │   │   ├── UserDetail.tsx
    │   ├── utils/
    │   │   └── models.ts, data.ts
    │   ├── __tests__/
    │   │   └── Login.test.tsx
    │   ├── App.tsx
    │   └── index.tsx

---

## Simple build for production

Build the project for deployment:

    $ npm run build

The build output will be placed in the `/build` directory.

---

## Update dependencies

To clean and refresh your `node_modules`:

    $ npm prune
    $ npm install

Or run all together (if `npm run pull` is defined):

    $ npm run pull

---

## Scripts

    $ npm start         # Start dev server
    $ npm run build     # Create production build
    $ npm test          # Run tests
    $ npm run eject     # Eject CRA config (optional)

---

## Languages & Tools

### HTML

- HTML5 structure via JSX

### JavaScript / TypeScript

- React 19 for building UI
- React Router DOM v7 for routing
- React Hook Form for form handling
- TypeScript for static typing

### CSS

- SCSS (Sass) is used for styling
- Autoprefixer via Create React App
- `sass` is added as a dev dependency

### Testing

- React Testing Library
- Jest
- User Event Simulation

---

## Additional Notes

- App is bootstrapped using [Create React App](https://create-react-app.dev/).
- Avoid deprecated `act()` usage — RTL handles `act()` internally.
- Use semantic HTML and accessible elements (`role`, `aria`, etc.).
- All mock data lives inside `/utils/data.ts`.

---

## Status

- ✅ Login with validation
- ✅ Dashboard and sidebar layout
- ✅ User list table with status badges
- ✅ User filter modal
- ✅ Unit testing for Login
- 🔄 User detail page (in progress or complete)
- ✅ SCSS styling and responsive layout
- ✅ Dropdown menu actions

---

## Good Luck!

Take your time and follow best practices. You’ll be evaluated on:

- Code readability
- Component structure
- Test coverage
- UI/UX
- Accessibility

Happy coding! 🚀
