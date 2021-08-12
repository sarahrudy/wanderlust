import { expect } from 'chai'
import Traveler from '../src/Traveler'
import TripsRepo from '../src/TripsRepo'
import DestinationsRepo from '../src/DestinationsRepo'

import { sampleTravelerData, 
         sampleTripsData,
         sampleDestinationsData 
} from './sample-test-data/sampleData.js'



describe('Traveler', () => {
  let traveler

  beforeEach(() => {
    traveler = new Traveler(sampleTravelerData[0])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler)  
  })

  it('should instantiate with an id', () => {
    expect(traveler.id).to.deep.equal(14)
  })

  it('should instantiate with a name', () => {
    expect(traveler.name).to.deep.equal('Ellynn Kyne')
  })

  it('should instantiate with a traveler type', () => {
    expect(traveler.travelerType).to.deep.equal('history buff')
  })


})