# PushIT (the way to push yourself into IT sector)

## Information about direcories
The folder **ConfirmScreen** inside the screen diretory is not used in the project
We use reset password by email link method
Dont include Social sign in

All image that are used for this project are under /assets folder and assets/images folder
All the components [customButtons,customForms,customBlocks,customInputs] are placed inside src/components 
All the Screens are placed under /src/Screens
All navigation functions are called under /src/navigation/index.js file
App.js is the entry point of the project

please create an firebase account and paste the configurations under the /firebaseConfig.js file located in the root folder

https://firebase.google.com/docs/auth

To run this app make sure node 18.16.0 or higher version is installed
```
node --version

```
 if not install node js in your local computer using this link
https://nodejs.org/en/download/current

check the following requirements are satisfied or not before going to the next step:
Requirements

To use Expo, you need to have the following tools installed on your machine:

    Node.js LTS release - Only Node.js LTS releases (even-numbered) are recommended.

    As Node.js officially states, "Production applications should only use Active LTS or Maintenance LTS releases". You can install Node.js using a version management tool (such as nvm or volta or any other of your choice) to switch between different Node.js versions.
    Git for source control.
    Watchman (for Linux or macOS users).




Now install all the required dependencies

```
npm install
```

to run the application run this command on the terminal
```
npx expo start
```

Once you complerte these steps go to the playstore with your android phone and install the *Expo Cli* application 
And scan the code using that application

Congratulations ... App is running...
This application is built using 
```
1.React-Native expo
2.Firebase authentication
3.Firebase data-store
```
