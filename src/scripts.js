import './css/base.scss'

import {
  getTraveler,
  getAllTravelersData,
  getAllTripsData,
  getAllDestinationsData
} from './API'

import Traveler from './Traveler'
import TripsRepo from './TripsRepo'
import DestinationsRepo from './DestinationsRepo'
import updateDOM from './updateDOM'

// ------- QUERY SELECTORS --------
const bookItButton = document.querySelector(".book-it-button")
const travelDate = document.querySelector("#travel-date")
const tripDuration = document.querySelector("#trip-duration")
const numTravelers = document.querySelector("#num-travelers")
const destinationDropdown = document.querySelector("#destination")
const tripCostLine = document.querySelector("#trip-cost")
const calculateTripCostButton = document.querySelector(".calculate-cost-button")
const loginSubmitButton = document.querySelector(".login-button")
const usernameInput = document.querySelector(".username-input")
const passwordInput = document.querySelector(".password-input")



// ------- EVENT LISTENERS --------
bookItButton.addEventListener("click", bookTrip)
calculateTripCostButton.addEventListener("click", calculateTripCost)
loginSubmitButton.addEventListener("click", checkLogin)
travelDate.addEventListener('change', buttonEnabler)
tripDuration.addEventListener('change', buttonEnabler)
numTravelers.addEventListener('change', buttonEnabler)



window.addEventListener('load', getData(14))


// ------- GLOBAL VARIABLES -------
let traveler, allTravelers, allTrips, destinations


// -------- FETCH ----------
function getData(id) {
  Promise.all([getTraveler(id), getAllTravelersData(), getAllTripsData(), getAllDestinationsData()])
    .then(data => {
      dataSetter.setTraveler(data[0])
      dataSetter.setTravelers(data[1])
      dataSetter.setTrips(data[2])
      dataSetter.setDestinations(data[3])
      dataSetter.matchTripsToDestinations()
  })
}

// -------- FETCH HELPER METHODS -------
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

// ----- POST --------
function postTripRequest() {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify({
      "id": Date.now(),
      "userID": parseInt(traveler.id),
      "destinationID": parseInt(destinationDropdown.value),
      "travelers": parseInt(numTravelers.value),
      "date": formatDate(travelDate.value),
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


// ---- PAGE FUNCTIONALITY ---------
function getAnnualSpent() {
  const cost = traveler.calculateYearlySpent(traveler.trips)
  updateDOM.displayAmountSpentThisYear(cost.toFixed(2))
}

function bookTrip() {
  event.preventDefault()
  postTripRequest()
  setTimeout(function () { getData(traveler.id) }, 250)
}

function buttonEnabler() {
  if (travelDate.value && tripDuration.value && numTravelers.value) {
    calculateTripCostButton.disabled = false
    bookItButton.disabled = false
  }
}

function formatDate(dateValue) {
  let splitDate = dateValue.split("-")
  let joinedDate = splitDate.join("/")
  return joinedDate
}

function calculateTripCost() {
  event.preventDefault()
  tripCostLine.innerText =
    `This trip will cost $${destinations.getTripCost().toFixed(2)}.`;
}

function checkLogin() {
  event.preventDefault()
  if (checkUsername() && passwordInput.value === "travel") {
    getData(traveler.id)
    updateDOM.displayMainPage()
  } else {
    alert("Invalid username and/or password. Please try again.")
  }
}

function checkUsername() {
  if (usernameInput.value.split("traveler")[1]) {
    const id = parseInt(usernameInput.value.split("traveler")[1])
    traveler.id = id
    return allTravelers.find(trav => trav.id === id)
  }
}
