const deleteButton = document.querySelectorAll(".delete-button")
console.log(deleteButton)

for (i = 0; i < deleteButton.length; i++) {
  const button = deleteButton[i]
  button.addEventListener("click", async(e)=> {
    e.preventDefault()
    const reviewId = e.target.id.split("-")[2]
    console.log(reviewId)
  })
}
