# StandardLy

Thinkful Full Stack Web Developer Bootcamp React App Project

![Screenshots](https://raw.githubusercontent.com/niketarachhadia/av/master/public/img/screen1.png)

## Overview

Standardly is a web based client to standardize US addresses using Smarty Streets API. The app utilizes React ecosystem libraries and components along with Redux for state management 

##Use Case

Why is this app useful? Everytime you send mail for personal or business reasons, if ever in doubt about the address, give StandardLy a shot. It will provide you receipient address in USPS standard along with location on Map for added confidence.

##UX

The initial wireframes can be seen below:

![Initial Wireframes](https://raw.githubusercontent.com/niketarachhadia/av/master/public/img/mockup.png)

StandardLy is a responsive web application designed around concepts of Google's Materialize design. The app heavily relies on MaterializeCSS to render consistent user interface on various devices alogn with some custom styling as well. The app is designed with simplicity and effciency in mind. StandardLy is a single page app with just one click result without any complexities.

##Working Prototype

You can access a working prototype of the app here: https://niketarachhadia.github.io/av

##Technical

* The app is based on create-react-app starter kit. It utilized Redux, Redux-Routes, Isomorphic Fetch, React-Materialize 
* The app draws data from two sources. The first, a historical Formula 1 data service (http://ergast.com/mrd/). This API provides historic performance data going back to the beginning of Formula 1 as a sport, for both drivers and car constructors. The second source is provided by BetFair (http://www.betfair.com), an online gambling service. BetFair provides a developer API for a fee, but to minimize costs for the prototype app, a screen-scraping approach to data collection has been implemented, returning the grid for the next race along with winning odds for each driver.
* Data is refreshed into the database on an hourly basis.
* An API to access the database has been constructed in ExpressJS with 3 key endpoints, returning race calendar, driver and manufacturer performance data respectively.
* All routing is handled in the front-end by Angular.
* The prototype app is deployed in a Ubuntu 14.04 environment with availability provided and monitored by pm2
* The calculation of odds is based on the following historic data:
    * the driver’s previous finishing positions at the track (going back a maximum 10 years).
    * the driver’s car’s (constructor’s) previous finishing positions at the track (going back a maximum of 10 years).
    * the driver’s current season performance as measured by his points total.
    * the constructor’s current season performance as measured by its points total.
* A weighting of these criteria is applied to create a prediction of the overall likelihood of a driver winning. This weighting can be tailored by the user in-app to suit their own preferences.
* The app is designed and built from a ‘mobile first’ perspective using responsive design techniques.

##Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:

* Providing profile pages showing details about the driver along with the driver’s season record and historic track performance which is used in the prediction algorithm.
* Providing profile pages showing details about the constructor along with the constructor’s season record and historic track performance which is used in the prediction algorithm.
* A track profile page providing information about the forthcoming race venue.
* Introducing other data variables into the prediction algorithm (e.g. weather forecast (rain, temperature), driver’s home grand prix advantage, qualifying grid position, fastest lap times at circuit etc).
* Allowing a bet to be placed on BetFair via the app, initially via a clickable link to the BetFair site, and in time, through integration of the BetFair API into the app.
