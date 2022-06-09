const addToShelfButton = document.getElementsByTagName("button")[0]
console.log(addToShelfButton)


addToShelfButton.addEventListener("click", async (e) => {
  // e.preventDefault()
  const movieId = e.target.id
  console.log(movieId)
})
