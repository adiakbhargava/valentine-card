# Valentine Card React App

A simple React application that displays a Valentine's Day card component.

## Project Structure

```
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── components/
│       ├── ValentineCard.js
│       ├── ValentineCard.css
│       └── asset01.jpg 
```

## Files Overview

- `App.js`: Main application component that renders the ValentineCard component
- `App.css`: Contains styling for the application, including animations and layout
- `index.js`: Entry point of the application that renders the App component to the DOM
- 'ValentineCard.js' : Contains the interactive components of the Valentine's Card with dynamic features
- 'ValentineCard.css' : Contains the specific styling for the Valentine's Card

## Features

# Interactive Elements
- "No" button, represented by 'pmo', playfully moves away when the user tries to hover over it
- "Yes" button, represented by 'ts', triggers a celebratory heart animation and message when clicked

# Styling Features
- Flexbox-based layouts for responsive positioning
- Custom animations for falling hearts
- Shadow effects for depth and visual interest

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Component Description

The main component of this application is the `ValentineCard` component, which is imported and rendered by `App.js`. The component is styled using the CSS classes defined in `App.css`.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production

## Dependencies

- React
- React DOM

## Notes

This is a basic React application structured using Create React App conventions. The CSS includes a spinning animation and responsive design features that can be customized as needed.
