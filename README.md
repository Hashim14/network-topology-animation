# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Library used 

- React Force Graph 2D
- React 19
- React Three

# Features 

- React Force graph 2d for visualization
- Implementation of netwrok topology
- Animated Link for every 2 seconds
- Handled OnClick and OnHover for nodes 
- React hooks for state management
- NetworkJson.json contains the Nodes and Links to establish the project 

# JSON Structure 
```
{
  "nodes": [
    {
      "id": "",
      "type": "",
      "name": "",
      "upload": "",
      "download": "",
      "level": 0
    }
  ],
"link" : [
   "source": "",
      "target": ""
]
  }
