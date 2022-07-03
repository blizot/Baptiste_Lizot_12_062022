# SportSee

SportSee is a sport coaching startup.
This repository is the new version of the app.

## Table of contents

- [Technologies](#technologies)
- [Instalation](#instalation)
  - [Front](#front-1)
  - [Back](#back-without-docker) (without Docker)
  - [Back](#back-with-docker) (with Docker)
- [API Endpoints](#api-endpoints)
- [API Mock](#api-mock)
- [How to contribute](#how-to-contribute)
- [Next features](#next-features)
- [Credits](#credits)
- [License](#license)

## Technologies
### Front

- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Recharts](https://recharts.org)
- [SASS](https://sass-lang.com)
- [JSDoc](https://jsdoc.app/index.html)

### Back

- [NodeJS](https://nodejs.org)

## Instalation

**⚠️ To run the project you'll need to run both the front and back-end at the same time**.

### Front
#### Prerequisites
- [Yarn](https://yarnpkg.com/)
#### Launching the front-end of the project

- Fork the repository
- Clone it on your computer, and go on the `dev` branch
- In a terminal, move to the `front` directory
- `yarn` will install all the dependencies
- `yarn start` will launch the front-end on your [`localhost:5000`](http://localhost:5000)

**⚠️ Currently only the profile has been made, it can be found on the route: `/user/:userID`**.

### Back (without Docker)
#### Prerequisites

- [NodeJS](https://nodejs.org/en/) (**v12.18** or above)
- [Yarn](https://yarnpkg.com/)

#### Launching the back-end of the project

- Fork the repository
- Clone it on your computer, and go on the `dev` branch
- In a terminal, move to the `back` directory
- `yarn` will install all the dependencies
- `yarn dev` will launch the back-end on your [`localhost:3000`](http://localhost:3000)

### Back (with Docker)
#### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### Launching the back-end of the project

- `docker image build --no-cache -t micro-api .` will build your image
- `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` will create your Docker container and run your image on port 3000
- `docker container stop micro-api` will stop your micro-api
- `docker container rm micro-api` will delete your micro-api container

#### Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.

## API Endpoints

- `/user/:userId` — retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.)
- `/user/:userId/activity` — retrieves a user's activity day by day with kilograms and calories
- `/user/:userId/average-sessions` — retrieves the average sessions of a user per day. The week starts on Monday
- `/user/:userId/performance` — retrieves a user's performance (energy, endurance, etc.)


**⚠️ Currently only two `userId` have been mocked: `12` and `18`**.

### Examples of queries

- `http://localhost:3000/user/12/performance` — retrieves user's 12 performance
- `http://localhost:3000/user/18` — retrieves user 18's main information

## API Mock

 - Import `REACT_APP_API_MOCK` from `process.env` and the JSON file directly inside the React component
 - Define the variable you'll be using in the component as such:
```javascript
const variable = REACT_APP_API_MOCK === 'true' ? JSON.path : API.path
```
- In the `.env.development` file set the `REACT_APP_API_MOCK` variable to `true`

Set `REACT_APP_API_MOCK` back to `false` when you want to use the API itself, not mock it.

**⚠️ Every time you change the value of `REACT_APP_API_MOCK` you need to restart the server with `yarn start` in the `front` directory**.

### Best practice

Create the JSON mock file in a `API/subDirectory/mock` directory.

## How to contribute

- Create features in `.jsx` functional files, they can be assisted with `.js` files.
- Every function file must be accompanied by a JSDoc.
- Style must be in separate `.scss` files in the `assets` directory.
- Add comments along your code when necesarry.
- New features requests must be submitted using Pull Requests.

## Next features

- a better fetch API client, supporting multiple methods, body, etc.
- better handling of the errors; currently displaying the loader instead
- rest of the app; currently only has the user profile

## Credits

- Nicolas Patschkowski
- Thomas Dimnet
- Clara Corazza
- Yassin Hammou Ouali
- Emdsh

## License

SportSee, all rights reserved — **A FAKE COMPANY**

Actually made as a project to learn React and API.