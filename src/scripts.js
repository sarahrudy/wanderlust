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
import DestinationsRepo from './DestinationsRepo'
import updateDOM from './updateDOM'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let traveler, allTravelers, allTrips, destinations

window.addEventListener('load', getData(14))

function getData(id) {
  Promise.all([getTraveler(id), getAllTravelersData(), getAllTripsData(), getAllDestinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0])
      dataSetter.setTravelers(data[1])
      dataSetter.setTrips(data[2])
      dataSetter.setDestinations(data[3])
      dataSetter.matchTripsToDestinations();
  })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new Traveler(travelerData)
    updateDOM.greetUser(traveler)
  },

  setTravelers(travelersData) {
    allTravelers = travelersData.travelers
  },

  setTrips(tripsData) {
    allTrips = new TripsRepo(tripsData.trips)
    traveler.getMyTrips(tripsData.trips)
  },

  setDestinations(destinationsData) {
    destinations = new DestinationsRepo(destinationsData.destinations)
    updateDOM.displayDestinationDropdown(destinationsData.destinations)
  },

  matchTripsToDestinations() {
    traveler.getTripDetails(destinations.allDestinations)
    updateDOM.displayTripCards(traveler.trips)
    getAnnualSpent()
  }
}

  function getAnnualSpent() {
    const cost = traveler.calculateYearlySpent(traveler.trips)
    updateDOM.displayAmountSpentThisYear(cost.toFixed(2))
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