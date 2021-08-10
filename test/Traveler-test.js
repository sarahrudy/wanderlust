import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler.js'
import sampleTravelerData from '..src/data/sampleData.js'

// Add variables for sampleTravelerData here

describe('Traveler', () => {
  beforeEach(() => {
    Traveler = new Traveler(sampleTravelerData)
  })


  }
})