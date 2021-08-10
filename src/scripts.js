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

// ------- QUERY SELECTORS --------
const bookItButton = document.querySelector(".book-it-button")
const destinationDropdown = document.querySelector("#destination")
const numTravelers = document.querySelector("#num-travelers")
const departDate = document.querySelector("#travel-date")
const tripDuration = document.querySelector("#trip-duration")
const tripCostLine = document.querySelector("#trip-cost")
const calculateTripCostButton = document.querySelector(".calculate-cost-button")

// ------- EVENT LISTENER --------
bookItButton.addEventListener("click", submitTripRequest)
calculateTripCostButton.addEventListener("click", calculateTripCost)

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

function submitTripRequest() {
  event.preventDefault()
  postTripRequest()
}

function postTripRequest() {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify({
      "id": Date.now(),
      "userID": parseInt(traveler.id),
      "destinationID": parseInt(destinationDropdown.value),
      "travelers": parseInt(numTravelers.value),
      "date": formatDate(departDate.value),
      "duration": parseInt(tripDuration.value),
      "status": "pending",
      "suggestedActivities": []
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => traveler.trips.push(data))
    .then(tripCostLine.innerText = "Trip request submitted!")
    .catch(err => console.log(`POST Error: ${err.message}`))
}

function formatDate(dateValue) {
  let splitDate = dateValue.split("-");
  let joinedDate = splitDate.join("/");
  return joinedDate
}

function calculateTripCost() {
  event.preventDefault();
  tripCostLine.innerText =
    `This trip will cost $${destinations.getTripCost().toFixed(2)}.`;
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