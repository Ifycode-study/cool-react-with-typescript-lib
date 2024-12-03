# Build a Component Library for React with Typescript

Learnt from The Nerdy Canuck's youtube tutorial video: https://www.youtube.com/watch?v=V_5ImTOmMh0

# Locally install it in a project

npm install it inside the react project you want to use it in. E.g. if this cool-react-with-typescript-lib folder/repo and the project folder you are installing it in share the same parent, you would install it like so:

````
npm install ../cool-react-with-typescript-lib/
````

# Import and use component
````
// Import component
import { Button } from 'cool-react-with-typescript-lib';

// use component (example)
<Button
    color='white'
    backgroundColor='black'
    style={{ padding: '10px' }}
    onClick={() => alert('Nice! Love it!')}
>
    Really cool button plugin!
</Button>
````

