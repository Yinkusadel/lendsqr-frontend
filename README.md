# LENDSQR FRONTEND ENGINEERING ASSESSMENT

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node.js](http://nodejs.org/) is easy to install and includes [NPM](https://npmjs.org/).  
You should be able to run the following commands after installation:

    $ node --version
    v16.x.x

    $ npm --version
    v8.x.x

#### Node installation on OS X

You’ll need to use Terminal. On OS X, you can find it in  
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if you haven’t already, using:

    $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Then install Node:

    $ brew install node

#### Node installation on Linux

    $ sudo apt-get update
    $ sudo apt-get install nodejs npm

#### Node installation on Windows

Go to [nodejs.org](http://nodejs.org/) and download the installer.  
Also, ensure `git` is available in your system PATH — `npm` might need it.

---

## Install

Clone the repo and install dependencies:

    $ git clone https://github.com/your-username/lendsqr-frontend.git
    $ cd lendsqr-frontend
    $ npm install

---

## Start & watch

Run the development server:

    $ npm start

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Simple build for production

Build the project with:

    $ npm run build

---

## Update dependencies

To keep your packages fresh, occasionally run:

    $ npm prune
    $ npm install

Or run all together with:

    $ npm run pull

---

## Languages & Tools

### HTML

- Basic HTML5 structure via React

### JavaScript / TypeScript

- React 19 for building UI
- React Router DOM v7 for routing
- React Hook Form for form handling
- TypeScript for static typing

### CSS

- SCSS (Sass) is used for styling
- Autoprefixer is included (via CRA)
- `sass` is already added as a dev dependency

---

## Scripts

    $ npm start         # Start dev server
    $ npm run build     # Create production build
    $ npm test          # Run tests
    $ npm run eject     # Eject CRA config (optional)

---

## Notes

- App is bootstrapped using [Create React App](https://create-react-app.dev/).
- The setup supports SCSS out of the box (via `sass`).

