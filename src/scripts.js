// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/base.scss'

import {
  getTravelersData,
  getTraveler,
  getTripsData,
  getDestinationsData
} from './API'

import dayjs from 'dayjs'
import Traveler from './Traveler'
import TripsRepo from './TripsRepo'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'






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