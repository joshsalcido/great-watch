const deleteButton = document.getElementsByClassName("delete-button")

for (let i = 0; i < deleteButton.length; i++) {
  const button = deleteButton[i]
  button.addEventListener("click", async(e)=> {
    e.preventDefault()
    const reviewId = e.target.id.split("-")[1]

    const res = await fetch(`/review/${reviewId}`, {
      method: "DELETE"
    })

    const data = await res.json()
    if(data.message = "Delete successful!") {
      const container = document.getElementById(reviewId)
      container.remove()
    } else {
      console.log("It broke")
    }
  })
}
