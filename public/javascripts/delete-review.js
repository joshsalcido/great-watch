const deleteButtons = document.getElementsByClassName("delete-button")

for (let i = 0; i < deleteButtons.length; i++) {
  const button = deleteButtons[i]
  button.addEventListener("click", async (e) => {
    e.preventDefault()
    const reviewId = e.target.id.split("-")[1]
    const res = await fetch(`/review/${reviewId}`, {
      method: "DELETE"
    })
    const data = await res.json()
    if (data.message = "Delete successful!") {
      const container = document.getElementById(reviewId)
      container.remove()
    } else {
      console.log("Couldn't delete!")
    }
  })
}
