// https://codesandbox.io/s/network-request-practice-forked-with-changes-cfs77

export function getTravelerData() {
  fetch("http://localhost:3001/api/v1/travelers")
    .then(response => checkForError(response))
    .catch(err => console.log(`Traveler API Error: ${err.message}`))
}

export function getTraveler(id) {
  fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => checkForError(response))
    .catch(err => console.log(`Traveler API Error: ${err.message}`))
}

export function getTripsData() {
  fetch("http://localhost:3001/api/v1/trips")
    .then(response => checkForError(response))
    .catch(err => console.log(`Trips API Error: ${err.message}`))
}

export function getDestinationsData() {
  fetch("http://localhost:3001/api/v1/destinations")
    .then(response => checkForError(response))
    .catch(err => console.log(`Destinations API Error: ${err.message}`))
}