class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = []
  }

  getMyTrips(tripsData) {
    this.trips = tripsData.filter(trip => trip.userID === this.id);
  }

  getTripDetails(destinationData) {
    this.trips.forEach(trip => {
      let matchedDest = destinationData.find(dest => dest.id === trip.destinationID)
      trip.destination = matchedDest.destination
      trip.image = matchedDest.image
      trip.alt = matchedDest.alt
    });
  }
}

export default Traveler 