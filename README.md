# employeeDirectory

As a user, I want to be able to view my entire employee directory at once so that I have quick access to their non-sensitive information.

## Description

The purpose of this project is to create an employee directory using React.This requires breaking up the application's UI into components, managing component state and responding to user events.

The intent of such a directory is to provide users with quick access to an array of information for reference. No sensitive information is accessed via this database.

## Business Context

An employee or manager would greatly benefit from being able to view non-sensitive data about other employees in their company or group of collaborators. In this case, it would be particularly helpful to be able to filter employees by name to assist in the reference use of the application.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Usage

An application of this type is meant for use within an intranet portal rather than a public domain despite the data manipulated being considered non-sensitive. Employees' full name, contact information and photo may be available via professional network services online at their discretion but is totally independent of the directory held within their company/organization for internal use.

PLEASE NOTE: At present time this app doesn't contain any data storage code so the list of users generated is new every time the app is launched or refreshed.

## Sample of Application in Use
![Sample](public/emp_directory-example.png)

A deployed sample of this app is hosted at https://employee-directory-v2.herokuapp.com/

## Technologies Used

- JavaScript
- React
- Random User API via Postman
- Moment.js

## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.<br>
![badge](https://img.shields.io/badge/license-mit-brightgreen)<br />

## Contributing

Pull requests are welcome. For any changes, please open an issue first to discuss what you would like to change.
