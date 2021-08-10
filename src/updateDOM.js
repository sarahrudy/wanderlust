let updateDOM = {

  greetUser(traveler) {
    const greeting = document.querySelector("#greeting")
    const firstName = traveler.name.split(' ')[0]
    greeting.innerText = `Hi, ${firstName}!`
  }
}

export default updateDOM