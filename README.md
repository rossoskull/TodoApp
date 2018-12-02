<p align='center'><img align='center' height='100px' src='https://github.com/rossoskull/TodoApp/blob/master/src/img/green_over-white-1.png'></img></p>  

You can visit the app [here](https://rossoskull.me/TodoApp).


This is a ReactJS app, which uses the Redux and Firebase services.

### Running on your local system
#### Clone the repository
```sh
$ git clone https://github.com/rossoskull/TodoApp.git
```
#### Installing & setting up
```sh
$ npm install
```
### Firebase
#### Setting up Firebase
Create a firebase project on [Firebase Console](https://console.firebase.google.com/)  
After creating it, you will need to create a `Config` directory in the `/src/` directory.  
Create a file named `fbconfig.js` in the `Config` directory.  
##### Put the following details in `fbconfig.js` from your firebase project.  
![screenshot from 2018-12-02 13-36-06](https://user-images.githubusercontent.com/27884543/49337338-efb43900-f637-11e8-965c-22cf19b492b8.png)
#### Running the app
```sh
$ npm start
```
#### Building the app
```sh
$ npm run build
```
##### You can view the app at `http://localhost:3000`
