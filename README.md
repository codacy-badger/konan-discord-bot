# CONAN DISCORD BOT `CIATEK`

<!-- [![Build Status](https://travis-ci.com/ahmadyassinkhoja/supermarket-front-end.svg?token=qygxqkdc5qqrxr91xxDH&branch=master)](https://travis-ci.com/ahmadyassinkhoja/supermarket-front-end)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/929bed75b3cd4b07abb341c7a5591725)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=ahmadyassinkhoja/supermarket-front-end&utm_campaign=Badge_Grade)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)](<>) -->

## Getting Started

> You Can Join US at Ciatek Server at Discord
>
> [![Discord](https://discordapp.com/api/guilds/497486687681773579/widget.png)](https://discord.gg/Y9hjA3T)
>
> Click Here to See this Project Live  
> [![N|Solid](src/assets/images/minimall.jpg)](https://supermarket-1542828174855.firebaseapp.com/client)
>
> This is a living document, so please check back occasionally for changes. Any major changes will be communicated to the team.

### Repository Conventions

-   Remote repository is hosted on GitHub
-   Use `npm`, not `yarn`
-   `tslint` standards will be enforced
-   Use project structure defined below
-   **Do not** commit `node_modules` files or other sensitive information
-   **Do not** commit changes directly to the `master` branch
-   Commit changes via a branch named as follows:
    -   `year-month-module-feature`
    -   `year` should be a number, two digit year in which branch was created
    -   `month` should be a number, two digit month in which branch was created
    -   `module` should be camel case, starts with a lower case letter
    -   `feature` should be sentence case, starts with upper case letter
    -   If the feature is not for a single module then use `general`
    -   Examples are `18-11-accounting-Add Account graphQL type` or `19-01-general-Add User graphQL type`

### Visual Studio Code

It would be best to use Visual Studio code so we can all use the same plugins. However, if you feel more comfortable using a different editor/IDE please do so.

> Visual Studio Code has great Git integration. If you use something else you may need to learn various Git commands - good luck!

#### Recommended Plugins

-   GitLens // for github inetrgration
-   Tslint // for TS linting
-   Toggle Format on Save // for auto correct
-   Babal ES6/ES7 // for writing es6 in js (get integrates with nodemon or node)
-   npm Intellisense // autocompletes npm modules in import statements.
-   Rainbow Brackets // for nice color for brackets, etc..
-   Better Comment // for upgrading comments to Alerts, Queries, TODOs, Highlights, Strikethrough, etc...

## Installing

These steps will allow for local development of the _application_ on your machine.

1.  Make sure you already have `npm`, `firebase-tools`, `@angular/cli` and `node` (version 10 or greater) installed
2.  Clone this repository
3.  Run `npm install` from the project root
4.  Run `npm start` to start the server locally
5.  In your browser open `http://localhost:4200/client` to access the client application
6.  In your browser open `http://localhost:4200/admin` to access the application

> By default it will load the client application

## Deploying

### Netlify

> Just push your code to Github

### Firebase

1.  Run `firebase login` from the root project
2.  Run `npm run build` from the root project
3.  Run `firebase deploy` from the root project

## Commands

List of commands found in `package.json`. Most of the actions you need to perform via the command line will be available via these commands. These all assume you are in the project root.

`npm start` - start development server locally and watch for changes

`npm run build` - output into `dist` directory for production

`ng serve` - run contents of `dist` directory

## Project Structure

This structure is important because it will alleviate issues when we attempt to merge our code. We should not have to create any new folders at this point. If the need arises please communicate the need to the project manager.

Of course, the project structure will change as the project grows. But we will make any structural change decisions as a team when needed.

    ├───.firebase
    ├───dist
    ├── e2e
    ├── node_modules
    ├── public
    │ └──src
    │    ├───app
    │    │   ├───admin-app
    │    │   │   ├───components
    │    │   │   │   ├───admin-dashboard
    │    │   │   │   │   ├───dashboard-components
    │    │   │   │   │   │   ├───dialog-forms
    │    │   │   │   │   │   │   ├───current-orders-edit-form
    │    │   │   │   │   │   │   ├───current-orders-show-form
    │    │   │   │   │   │   │   └───product-edit-form
    │    │   │   │   │   │   ├───pages
    │    │   │   │   │   │   │   ├───admin-dashboard-home
    │    │   │   │   │   │   │   ├───admin-setting
    │    │   │   │   │   │   │   ├───admin-view-products
    │    │   │   │   │   │   │   ├───all-orders
    │    │   │   │   │   │   │   ├───current-orders
    │    │   │   │   │   │   │   └───users
    │    │   │   │   │   │   └───reusable-components
    │    │   │   │   │   │       └───admin-table
    │    │   │   │   │   ├───menu-items
    │    │   │   │   │   └───sidebar
    │    │   │   │   └───admin-login
    │    │   │   └───guards
    │    │   │       └───auth
    │    │   ├───client-app
    │    │   │   ├───components
    │    │   │   │   ├───about
    │    │   │   │   ├───addresses
    │    │   │   │   ├───cart
    │    │   │   │   ├───checkout-form
    │    │   │   │   ├───contact-us
    │    │   │   │   ├───home
    │    │   │   │   ├───login
    │    │   │   │   ├───mainmenu
    │    │   │   │   ├───orders
    │    │   │   │   ├───phone-number
    │    │   │   │   ├───product
    │    │   │   │   ├───products
    │    │   │   │   ├───promo
    │    │   │   │   ├───shareapp
    │    │   │   │   └───signup
    │    │   │   └───guards
    │    │   │       └───auth
    │    │   ├───page-not-found
    │    │   ├───pipes
    │    │   ├───services
    │    │   ├───shared
    │    │   │    └───accordion
    │    │   │
    │    │   ├───app-routing.module.ts
    │    │   ├───app.component.css
    │    │   ├───app.component.html
    │    │   ├───app.component.ts
    │    │   ├───app.module.ts
    │    │   └───shared.module.ts
    │    │
    │    ├───assets
    │    │   ├───images
    │    │   │   ├───alert
    │    │   │   ├───background
    │    │   │   ├───big
    │    │   │   ├───browser
    │    │   │   ├───document
    │    │   │   ├───gallery
    │    │   │   ├───icon
    │    │   │   ├───tooltip
    │    │   │   └───users
    │    │   ├───js
    │    │   └───styles
    │    │
    │    ├──environments
    │    ├──index.html
    │    ├──main.ts
    │    ├──manifest.json
    │    └──styles.css
    │
    ├── angular.json
    ├── .gitignore
    ├── package.json
    ├── firebase.json
    ├──.firebaserc
    ├── README.md
    └── tslint.json
