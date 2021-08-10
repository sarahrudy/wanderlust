class DestinationsRepo {
  constructor(destinationData) {
    this.allDestinations = destinationData;
  }

  getTripCost() {
    const destinationDropdown = document.querySelector("#destination")
    const numTravelers = document.querySelector("#num-travelers")
    const tripDuration = document.querySelector("#trip-duration")
    let matchedDest = this.allDestinations.find(dest => dest.id === parseInt(destinationDropdown.value))
    let tripCost = (numTravelers.value * matchedDest.estimatedFlightCostPerPerson
      + tripDuration.value * matchedDest.estimatedLodgingCostPerDay) * 1.1;
    return tripCost;
  }
}

export default DestinationsRepo