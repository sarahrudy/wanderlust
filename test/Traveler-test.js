import { expect } from 'chai'
import Traveler from '../src/Traveler'

import { sampleTravelerData, 
         sampleTripsData,
         sampleDestinationsData 
} from '../src/data/sampleData'

describe('Traveler', () => {
  let traveler 

  beforeEach(() => {
    traveler = new Traveler(sampleTravelerData[2])
    sampleTrips = sampleTripsData
    sampleDestinations = sampleDestinationsData
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler)  
  })

  it('should be able to get traveler by id', () => {
    traveler.getMyTrips(sampleTravelerData)
    expect(traveler.id).to.deep.equal(3)
  })

  it('should instantiate with the traveler name', () => {
    expect(traveler.name).to.equal("Sibby Dawidowitsch")
  })

  it('should instantiate with a their travel type', () => {
    expect(traveler.travelerType).to.equal('shopper')
  })

  it("should be able to get trips that match ID", () => {
    traveler.getMyTrips(sampleTripsData)
    expect(traveler.trips[0]).to.deep.equal(sampleTripsData[3])
  })



})