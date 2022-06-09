const deleteShelfButton = document.getElementById("delete-shelf-button")

deleteShelfButton.addEventListener("click", async (e) => {
  // e.preventDefault()
  const shelfId = e.target.id.split('-')[1];
  const res = await fetch(`/shelves/${shelfId}`, {
    method: "DELETE"
  });
  const data = await res.json()
  if (data.message = "Delete successful!") {
    const container = document.getElementById(shelfId)
    container.remove()
  } else {
    console.log("Unsuccessful")
  }
})
