const deleteButton = document.getElementsByClassName("delete-button")
console.log(deleteButton)
for (let i = 0; i < deleteButton.length; i++) {
  const button = deleteButton[i]
  button.addEventListener("click", async(e)=> {
    e.preventDefault()
    const reviewId = e.target.id
    console.log(reviewId)
  })
}
