Element Widget

[+] Write a "widget" to select 3 elements from a certain list (initially set as an array).
[+] As test data, 300 elements with sequence numbers will be suitable - ["Element 1", "Element 2", "Element 3", ..].

Logical conditions:

[+] A list of already selected items is displayed (no more than three).
[+] By clicking on the "Change my choice" button, a dialog opens with a list of Cl elements (a scrollable list of fixed height), as well as a search field and filter.
[+] Checkboxes of already selected items are checked, and the selected items are duplicated as blocks at the bottom of the dialog box.
[+] Search: as you type characters, the list of elements is filtered (using substring search).
[+] Additional filter (selectbox) - filter by element number (> 10,> 50 > 100).
[+] Search and filter complete each other.
[+] You can select no more than three items, in case three items are selected, the remaining checkboxes become disabled.
[+] The selected items have a link "X" which removes the item from the list of selected items.
[+] Clicking on the "Save" button closes the dialog box and the list of selected items on the main page is updated from the dialog.
[+] When you click on the "Cancel" button, the dialog box closes and the list of selected items on the main page remains unchanged.

Technical conditions:

[+]The main technologies - React. js or Native JS + web components
Using TS - a big plus
[-]If you want to use a state manager - MobX is preferred
[-]Using UI frameworks such as bootstrap, Tailwind and etc and component libraries is highly undesirable, but allowed There is a concept of the widget below. Appearance is up to you, in this task js and its implementation is emphasized.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
