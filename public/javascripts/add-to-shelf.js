const addToShelfButton = document.getElementsByTagName("button")[0]

addToShelfButton.addEventListener("click", async (e) => {
  // e.preventDefault()
  const movieId = e.target.id
  const shelfId = document.getElementById(`shelf-${shelfId}`)
  // const res = await fetch(`/shelves/${shelfId}`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     reviewBody,
  //     rating
  //   })
  // });
  console.log(movieId)
})
