const review = require("../../db/models/review");

const editButtons = document.getElementsByClassName('edit-button');

for (let i = 0; i < editButtons.length; i++) {
  const button = editButtons[i];
  button.addEventListener('click', (e) => {
    const reviewId = e.target.id.split('-')[1];
    const form = document.getElementById(`edit-${reviewId}`);
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
    } else {
      form.classList.add('hidden');
    };
    const submitButton = document.getElementById(`edit-${reviewId}`);
    submitButton.addEventListener('click', async (submitEvent) => {
      submitEvent.preventDefault();
      const reviewBody = document.getElementById(`${reviewId}-edit-body`);
      const rating = document.getElementById(`${userReview.id}-edit-rating`);

      const res = await fetch(`/review/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewBody,
          rating
        })
      });

      const data = await res.json();
      if (data.message === "Successful Edit!") {
        const reviewBodyEl = document.getElementById(`${reviewId}-reviewBody`);
      }
    })
  })
}
