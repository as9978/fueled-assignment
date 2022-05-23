# Welcome to My Assignment!

Hello, first and foremost, I am grateful for the opportunity to participate in your technical task.
This repository contains my code for the needed assignment; I did not use any libraries, only Vanila React!
I made an Icon component to save all relevant svgs in one file and use them directly when needed.
I also created a Form component since we require it for every single question we have, and putting it within the main component would be really messy, in order to facilitate interaction I defined several properties for this component, the most essential of which is onChange props. I utilize these props to modify the parent component's state by sending new values as parameters to its method, don't worry if you don't understand how it works! I can go through everything in the technical review meeting.
I used flex to design my components since I feel more comfortable with it than Grid or other ways. Just a short note, flex is really crucial when developing React Native applications, so knowing how to utilize it correctly will be beneficial.
I created a Button component because we will be using it in multiple places. I also included a variant prop to the component so that we can render alternative styles by just altering the variant., I also added two other custom props including the 'fullWidth' and 'haveIcon', I use the fullWidth prop to render a button with an 100% width that use all available space and I use haveIcon props to render the plus icon on left of the button, since we only have one icon I use this prop otherwise I would define this prop as a React node which would able us to render different icons, but generally we did not need that in this component.
I created an Index file in each folder to make importing easier. It will also help us in the future if we need to rename a component without worrying about unintended repercussions.
I defined a styles folder where simply put my css files there.
We have all of our states that make our application interactive in the App.tsx file. I basically store our question data in the questions state, which includes an array of question and answer objects, and whenever we need to do an action, I will modify this state. I also defined a 'u' and 'setU' state to simply ensure the component is re-rendering correctly.

That was a brief discussion of my task; I am eager to meet with you for a technical interview.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
