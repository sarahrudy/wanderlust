// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

import './css/base.scss'

import {
  getTraveler,
  getAllTravelersData,
  getAllTripsData,
  getAllDestinationsData
} from './API'

import dayjs from 'dayjs'
import Traveler from './Traveler'
import TripsRepo from './TripsRepo'
import updateDOM from './updateDOM'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let traveler, allTravelers, allTrips, allDestinations

window.addEventListener('load', getData(1))

function getData(id) {
  Promise.all([getTraveler(id), getAllTravelersData(), getAllTripsData(), getAllDestinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0])
      allTravelers = data[1]
      allTrips = data[2]
      allDestinations = data[3]
  })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new Traveler(travelerData)
    updateDOM.greetUser(traveler)
  }
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