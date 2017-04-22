# Slidd.it

Slidd.it - lectures at your pace is an intuitive and lightweight web application where users can
give feedback to the lecturer regarding the pace of the lecture. The user does this by sliding a slider
and can see the avarage of all users slider values in the 'meter'. The lecturer will adjust the pace
of the lecture based on the meter.

If the lecture is going too fast, set the meter to low and the lecturer will explain the concept more throughoutly and slowly,
and the other way around.
You can check out the application live at Slidd.it

This application was a school project in the course TDT4140 at the Norwegian University of Science and Technology.

## Requirements
- [Node.js v7.7.4](https://nodejs.org/en/)
- [Node package manager v4.1.2](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
- [Meteor v1.4.3.1 ](https://www.meteor.com/install) `curl https://install.meteor.com/ | sh`
- [React v15.4.2](https://facebook.github.io/react/) `meteor npm install --save react react-dom`

## Setup
- After making sure you have all the requrements, run: `git@github.com:enstulen/Slidd.it.git` in the console
- This will make a folder called 'Slidd.it' in your system
- While in this folder, run `npm install` to get all dependencies

## Running
To run the application locally, type `meteor` into the console. The application is now running at *localhost:3000*.

## Architecture
Routing with [Flow router](https://github.com/kadirahq/flow-router), unit tests with [Mocha](https://mochajs.org/) and [Jest](https://facebook.github.io/jest/) and snapshot tests with [react-test-renderer](https://www.itdagene.no/frontpage/joblistings) and linting with ESLint 6 using [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)s rules

## Testing
We use two frameworks for testing:

| Mocha  | Jest                                                       |
| ----------------------------------------------------|------------- |
| `meteor test --driver-package practicalmeteor:mocha`  | `npm test`  |

