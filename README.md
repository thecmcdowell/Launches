# Launch Tracker
A simple app that (by default) displays the next 10 schduled launches from launchlibrary.net api, and allows you to see more infomation on, and favorite a, launch.

Built in React Native and used Redux for state managment.

![alt text](./ScreenShot_1.png)
![alt text](./ScreenShot_2.png)
### Run This App
#### Ensure you have all dependencies installed:
```
$ brew install node
$ brew install npm
$ brew install watchman
``` 
Ensure that you have xCode installed, you can get xCode from the MacOS App Store
Install React Native and the React Native CLI
```
$ npm install react-native
$ npm install react
$ npm install -g react-native-cli
```                                                         
#### Run the app
clone this repo: 
```
$ git clone https://github.com/thecmcdowell/Launches
```
Change into project directory (eg Launches) and initialize node for the app:
```
$ cd Launches
$ npm install
```
Build and run the app on the iOS simulator: 
```
react-native run-ios
```