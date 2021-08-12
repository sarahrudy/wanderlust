let updateDOM = {

  greetUser(traveler) {
    const greeting = document.querySelector("#greeting")
    const firstName = traveler.name.split(' ')[0]
    greeting.innerText = `Hi, ${firstName}!`
  },

  displayTripCards(trips) {
    const tripsContainer = document.querySelector('#tripsContainer')
    tripsContainer.innerHTML = ''
    trips.forEach(trip => {
      tripsContainer.innerHTML +=
      `<section class="card" id=${trip.id}>
        <div class="trips-container">
          <article class="trip-cards">
            <div class="destination-image" style=
                "background: linear-gradient(rgba(0, 0, 0, 0.5), 
                                              rgba(0, 0, 0, 0)),
                 url(${trip.image}); 
                 background-size: cover" 
                 alt="${trip.alt}">
            <div class="h3-container"> 
              <h3 class="destination-name">${trip.destination}</h3>
            </div>
            <p>Travel Date: ${trip.date}</p>
            <p>Number of People on Trip: ${trip.travelers}</p>
            <p>Duration: ${trip.duration} days</p>
            <p>Trip status: ${trip.status}</p>
          </article>
        </div>
      </section>`
    })
  },

  displayAmountSpentThisYear(amountTotal) {
    const amountSpentLine = document.querySelector(".amount-spent")
    amountSpentLine.innerText = `You've only spent $${amountTotal} this year on travel.`
  },

  displayDestinationDropdown(destinationsData) {
    const destinationsDropdown = document.querySelector("#destination")
    destinationsData.map(dest => {
      destinationsDropdown.innerHTML +=
        `<option value="${dest.id}">${dest.destination}</option>`
    })
  },

  displayMainPage() {
    const loginPageSection = document.querySelector(".login-page-section")
    const mainPageSection = document.querySelector(".main-page-section")
    const bookTripSection = document.querySelector(".book-trip-section")
    const tripCardsSection = document.querySelector(".trip-cards-section")
    loginPageSection.classList.add("hidden")
    mainPageSection.classList.remove("hidden")
    bookTripSection.classList.remove("hidden")
    tripCardsSection.classList.remove("hidden")
  }


}



export default updateDOM