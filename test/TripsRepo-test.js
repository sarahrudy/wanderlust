import { expect } from 'chai'
import TripsRepo from '../src/TripsRepo'
import { sampleTripsData } from '../src/data/sampleData'


describe('Trips Repo', () => {
  let tripsRepo

  beforeEach(() => {
    tripsRepo = new TripsRepo(sampleTripsData)
  })

  it('should be a function', () => {
    expect(TripsRepo).to.be.a('function')
  })

  it('should be an instance of TripsRepo', () => {
    expect(tripsRepo).to.be.an.instanceOf(TripsRepo)
  })
})