# achiav

Achiav is a productivity application will encourage users to improve their habits by means of an achievement
system, daily quests, and social interactions.

## Core concepts
* Embark on quests - quests challenge the user to practice healthy habits over a period of time.  Upon completion of a quest, a user will be granted a reward.
* Spend rewards - rewards can be gifted by friends or earned by quest completion.  Rewards can be spent on activites that one enjoys and are used to reinforce habits

## Implementation
Achiav is built with React Native using the create-react-native-app tool.

## Important Libraries
* react-native-navigation - used for React Native navigation UI elements
* react-redux - centralized application state store
* aws-amplify-react-native - AWS javascript library simplifying application integration with AWS cognito for user authentication.  Provides login user flows and UI elements out of the box.

## Setup
1. Install Expo
2. Create `environment.js` file with the required environment variables
3. (iOS only) Link icons library to react-native `react-native link react-native-vector-icons`.  This is required because the library has native dependencies.
4. run `yarn start`
5. Copy the expo URL into your Expo phone app or simulator
