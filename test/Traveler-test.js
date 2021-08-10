import { expect } from 'chai';
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

})