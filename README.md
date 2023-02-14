# Green Dot

## Description

Green Dot is a private location sharing web app.  Users enter a community code or generate one within the app.  They then grant Green Dot permission to access their location, which is shared anonymously with other members of their community. Locations persist for one hour.  

Users can stop and restart location sharing at any time, however they must be actively sharing a location with a community to view the other user locations.

### Dependencies:
* @react-google-maps/api - 2.18.1
* firebase - 9.17.1
* nanoid - 4.0.1
* react - 18.2.0

## Instructions for Setting Up the App:
Developers:  App setup requires a Firestore API key (stored in .env) and a Google Maps API key.  
Clone this repository.
Install React with $ yarn add react 
Add Firestore configurations to a firebase.js file.
Add the Google Maps API key as REACT_APP_MAPS_API_KEY to the .env file. 
Start the server by running `yarn start`

Green Dot is developed by Ada Developers Academy cohort 18 students - Eve Stroud and Jamaica Yancy

