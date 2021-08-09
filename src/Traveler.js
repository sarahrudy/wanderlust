class Traveler {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.travelerType = userData.travelerType;
    this.trips = []
  }
}

export default Traveler 