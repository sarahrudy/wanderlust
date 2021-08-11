import { expect } from 'chai'
import Traveler from '../src/Traveler'
import { sampleTravelerData } from '../src/data/sampleData'


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

  it('should be able to hold traveler data', () => {
    expect(traveler.id).to.equal(1)
    expect(traveler.name).to.equal('Ham Leadbeater')
    expect(traveler.travelerType).to.equal('relaxer')
  })

  it('should be able to get traveler by id', () => {
    traveler.getMyTrips(sampleTravelerData)
    expect(traveler.id).to.deep.equal(1)
  })

  it('should instantiate with the traveler name', () => {
    expect(traveler.name).to.equal("Ham Leadbeater")
  })

  it('should instantiate with a their travel type', () => {
    expect(traveler.travelerType).to.equal("relaxer")
  })

  it("should be able to get trips that match ID", () => {
    
  })

})