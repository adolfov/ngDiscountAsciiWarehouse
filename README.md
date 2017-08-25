## What I did

- I implemented ALL features except for "pre-emptively fetch the next batch of results".
- I used:
    - **angular 4** as the main framework
    - **angular material** for the grid and select
    - **moment** to handle dates on the custom pipe
    - **ngx-loading** for the loading indicator
    - **express** to serve the api and static angular
- I created 3 components:
    - A header component
    - a Products component that contains the grid and sort selector
    - a Product component that contains each product
- I created 2 pipes:
    - a Price pipe that formats the price
    - a RelativeTime pipe that formats the date
- I implemented a Products service that consumes the api
- I implemented some unit tests for the pipes and Products service

## How to run

### Easy way

- Run `npm install` to install dependencies
- Run `npm run go` to build and run the app

### Step by step

- Run `npm install` to install dependencies
- Run `ng build` to build the app
- Then run `node server.js` to run the app

## Access app

- Navigate to `http://localhost:3000/` to use the app

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
