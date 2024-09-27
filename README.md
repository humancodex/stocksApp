# Expo Stock App

## Overview

The Expo Stock App is a mobile application built using React Native and Expo. It provides users with the ability to search for stocks by name or symbol and view detailed information about various publicly traded companies.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search stocks by company name or stock symbol
- View detailed stock information including currency and stock type
- User-friendly interface with a bottom sheet for easy navigation
- Responsive design for various mobile devices

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or Yarn (v1.22.0 or later)
- Expo CLI (v4.0.0 or later)
- iOS Simulator (for Mac users) or Android Studio (for Android development)
- Expo Go app installed on your mobile device for testing

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/expo-stock-app.git
   cd expo-stock-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.development`, `.env.production`, and `.env.test`
   - Fill in the required environment variables in each file

## Running the App

1. Start the Expo development server:
   ```
   expo start
   ```

2. Run on a specific platform:
   - iOS: `npm run ios` or `yarn ios`
   - Android: `npm run android` or `yarn android`
   - Web: `npm run web` or `yarn web`

3. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or browser to run the app on your device.

## Project Structure

```
src/
├── api/                  # API services and configurations
├── components/           # Reusable React components
├── hooks/                # Custom React hooks
├── layouts/
│   └── BottomSheetContents/  # Bottom sheet layout components
├── modules/              # Feature-specific modules
├── navigator/            # Navigation configuration
├── theme/                # Styling and theme definitions
├── utils/                # Utility functions and helpers
├── views/                # Main screen components
└── App.tsx               # Root component
```

## Development

- Use `eslint` and `prettier` for code linting and formatting:
  ```
  npm run lint
  npm run format
  ```

- Follow the React Native and Expo best practices for component development and state management.

## Testing

- Run tests using Jest:
  ```
  npm test
  ```

- Add unit tests for components and functions in `__tests__` directories.

## Deployment

1. Configure your `eas.json` file for different build profiles.

2. Build the app for production:
   ```
   eas build --platform android
   eas build --platform ios
   ```

3. Submit to app stores:
   ```
   eas submit --platform android
   eas submit --platform ios
   ```


## 🥇 Libraries

- [expo v50](https://docs.expo.dev/versions/v50.0.0)
- [expo-asset](https://docs.expo.dev/versions/latest/sdk/asset/)
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
- [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
- [react-navigation 6.x](https://github.com/react-navigation/react-navigation)
- [redux-toolkit](https://redux-toolkit.js.org/)

## 🥈 Libraries for development

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [jest](https://jestjs.io/)
- [lint-staged](https://github.com/okonet/lint-staged)

## ☀️ Icons

Expo provides a popular set of vector icons. Please search icons from [here](https://icons.expo.fyi/)



