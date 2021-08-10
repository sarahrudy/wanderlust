import { expect } from 'chai'
import DestinationsRepo from '../src/DestinationsRepo.js'
import { sampleDestinationsData } from '../src/data/sampleData'


describe("Destinations Repo", () => {
  let destinationsRepo

  beforeEach(() => {
    destinationsRepo = new DestinationsRepo(sampleDestinationsData)
  });

  it("should be a function", () => {
    expect(DestinationsRepo).to.be.a("function")
  });

  it("should be an instance of DestinationsRepo", () => {
    expect(destinationsRepo).to.be.an.instanceOf(DestinationsRepo)
  });

  it("should instantiate with an array of all destination objects", () => {
    expect(destinationsRepo.allDestinations).to.be.an("array")
  });
})


