const deleteButton = Array.from(document.getElementsByClassName("delete-button"))
console.log(deleteButton)
for (let button of deleteButton) {
  console.log(button)
  button.addEventListener("click", async(e)=> {
    e.preventDefault()
    const reviewId = e.target.id.split("-")[2]
    console.log(reviewId)
  })
}
