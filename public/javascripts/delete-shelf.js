
const shelfCards = document.getElementsByClassName('shelf-card');
// console.log(shelfCards);

for (let i = 0; i < shelfCards.length; i++) {
  const card = shelfCards[i];
  // console.log(card);
  const deleteShelfButtons = document.getElementsByClassName("delete-shelf-button");
  // console.log(deleteShelfButtons)
  for (let i = 0; i < deleteShelfButtons.length; i++) {
    const button = deleteShelfButtons[i]
    // console.log(button);
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      const cardId = e.target.parentElement.id;
      console.log(cardId);
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
};
