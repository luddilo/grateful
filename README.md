# grateful

- **What?** A simple react/react-native/redux/firebase project. 
- **Why?** The goal was to do a simple todo-style app for keeping notes of stuff that you are grateful for (posititive psychology style) every day. But hey, it doesn't stop there, the app will also remind you of what you were grateful for in the past. To cheer you app and make you a happy(er) panda.

## Status
- Very, very much WIP
- Web part is currently broken since adding Native, but this will be fixed. Eventually. 
- A nodeJS worker (not doing anything else than fetching grateful from firebase and randomly spitting them out to console) lives in /src/worker and will eventually send some notifications to users to cheer them up

## Prerequisites
- A firebase account is needed to start it up. Add credentials to /config/firebase.default.js and rename it to firebase.js
- Xcode for iOS, Android studio for Android

## Instructions
- Start with the usual 'npm install --save'
- Start react native packager with 'npm run native' and then run ios simulator with "npm run ios" or android simulator with "npm run android" 
