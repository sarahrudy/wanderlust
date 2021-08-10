import { expect } from 'chai';
import Traveler from '../src/Traveler'
import sampleTravelerData from '../src/data/sampleData'

// Add variables for sampleTravelerData here

describe('Traveler', () => {
  let traveler 

  beforeEach(() => {
    traveler = new Traveler(sampleTravelerData)
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })
})