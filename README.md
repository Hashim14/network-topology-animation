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
- Horizontal and Vertical toggle button to toggle between dagmode


https://github.com/user-attachments/assets/c1e8d400-6580-4ac9-b034-7391144d28cd


<img width="1307" alt="Screenshot 2025-03-22 at 6 43 41 PM" src="https://github.com/user-attachments/assets/9733d1e1-f016-47bf-ba98-4c9de69a37bf" />
<img width="1680" alt="Screenshot 2025-03-22 at 6 42 54 PM" src="https://github.com/user-attachments/assets/a793fea4-936a-48c6-be24-5d45b57fcc4f" /> 


# JSON Structure 

- Used level attribute to highlight the hierarchy  
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
