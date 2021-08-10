// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/base.scss'

import {
  getTravelerData,
  getTraveler,
  getTripsData,
  getDestinationsData
} from './API'

import dayjs from 'dayjs'
import Traveler from './Traveler'
import TripsRepo from './TripsRepo'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let traveler, trips, destinations

window.addEventListener('load', getData);

function getData() {
  Promise.all([travelerData(), tripsData(), destinationsData()])
    .then(data => {
      traveler = data[0];
      trips = data[1];
      destinations = data[2];
  })
}



// // SHOW & HIDE HELPER FUNCTIONS

// function hide(elements) {
//   elements.forEach(element => {
//     element.classList.add('hidden');
//   });
// }

// function show(elements) {
//   elements.forEach(element => {
//     element.classList.remove('hidden');
//   });
// }

// hide([yourTripsDashboardPage, wannaJetPage, navBarLinksSection, name]);

// show([loginPage]);