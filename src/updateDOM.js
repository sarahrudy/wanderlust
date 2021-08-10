let updateDOM = {
  
  greetUser(traveler) {
    const greeting = document.querySelector("#greeting")
    greeting.innerText = `Hi, ${traveler.name}!`
  }
}

export default updateDOM