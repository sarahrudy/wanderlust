import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import sampleTravelerData from '..src/data/sampleData'

// Add variables for sampleTravelerData here

describe('Traveler', () => {
  let traveler 

  beforeEach(() => {
    traveler = new Traveler(sampleTravelerData)
  })


  }
})