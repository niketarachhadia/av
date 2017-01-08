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
* StandardLy App utilizes Smarty Streets API to lookup, verify and standardize addresses. State management is handeled by Redux reducers while business logic and services layer is provided by Action creators.Navigation and conditional rendering is handeled by Redux-Routes. Calls to Smarty Streets APIs are made using Isomorphic Fetch.


##Development Roadmap

This is v1.0 of the app, but future enhancements are expected to include:

* Database of USPS addresses, NCOA, Census and other datasets for address lookup and standardization
* Server side APIs to make the App self containing without external dependencies
* Business and places lookup
