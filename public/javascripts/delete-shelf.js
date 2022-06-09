const deleteShelfButtons = document.getElementsByClassName("delete-shelf-button")

const shelfCards = document.getElementsByClassName('shelf-card');

for (let i = 0; i < shelfCards.length; i++) {
  const card = shelfCards[i];
  card.addEventListener("click", async (e) => {
    // e.preventDefault()
    const cardId = e.currentTarget.id;
    const res = await fetch(`/shelves/${cardId}`, {
      method: "DELETE"
    });
    const data = await res.json()
    if (data.message = "Delete successful!") {
      const container = document.getElementById(cardId)
      container.remove()
    }
  })
}
