import { expect } from 'chai'
import Traveler from '../src/Traveler'
import TripsRepo from '../src/TripsRepo'
import DestinationsRepo from '../src/DestinationsRepo'

import { sampleTraveler, 
         sampleTrips,
         sampleDestinations
} from './sample-test-data/sampleData.js'



describe('Traveler', () => {
  let traveler

  beforeEach(() => {
    traveler = new Traveler(sampleTraveler[0])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler)  
  })

  describe('traveler properties', () => {
    it('should instantiate with an id', () => {
      expect(traveler.id).to.deep.equal(14)
    })

    it('should instantiate with a name', () => {
      expect(traveler.name).to.deep.equal('Ellynn Kyne')
    })

    it('should instantiate with a traveler type', () => {
      expect(traveler.travelerType).to.deep.equal('history buff')
    })

    it('should start off with an empty array of trips', () => {
      expect(traveler.trips).to.deep.equal([])
    })
  })

  describe('getMyTrips', () => {
    it('should be able to get trips that match traveler id', () => {
      traveler.getMyTrips(sampleTrips)
      expect(traveler.trips[0]).to.deep.equal(sampleTrips[1])
    })

    it('should be able to count how many trips a traveler has', () => {
      traveler.getMyTrips(sampleTrips)
      expect(traveler.trips.length).to.equal(2)
    })

    it('should be able to return trip details for that traveler only', () => {
      traveler.getMyTrips(sampleTrips)
      expect(traveler.trips[0].userID).to.equal(14)
      expect(traveler.trips[0].travelers).to.equal(1)
      expect(traveler.trips[0].date).to.equal("2022/02/12")
    })
  })






 

})