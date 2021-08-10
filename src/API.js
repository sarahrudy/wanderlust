// https://codesandbox.io/s/network-request-practice-forked-with-changes-cfs77


export function getTraveler(id) {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
  .then(response => checkForError(response))
  .catch(err => console.log(`Traveler API Error: ${err.message}`))
}
export function getAllTravelersData() {
  return fetch("http://localhost:3001/api/v1/travelers")
    .then(response => checkForError(response))
    .catch(err => console.log(`Traveler API Error: ${err.message}`))
}

export function getAllTripsData() {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => checkForError(response))
    .catch(err => console.log(`Trips API Error: ${err.message}`))
}

export function getAllDestinationsData() {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => checkForError(response))
    .catch(err => console.log(`Destinations API Error: ${err.message}`))
}

export function checkForError(response) {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}