const editButtons = document.getElementsByClassName('edit-button');

for (let i = 0; i < editButtons.length; i++) {
  const button = editButtons[i];
  button.addEventListener('click', (e) => {
    const reviewId = e.target.id.split('-')[1];
    // console.log(reviewId);
    const form = document.getElementById(`form-${reviewId}`);
    // console.log(form);
    if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
    } else {
      form.classList.add('hidden');
    };
    const submitButton = document.getElementById(`edit-submit-${reviewId}`);
    submitButton.addEventListener('click', async (submitEvent) => {
      submitEvent.preventDefault();
      const reviewBody = document.getElementById(`${reviewId}-edit-body`).value;
      const rating = document.getElementById(`${reviewId}-edit-rating`).value;
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
        const ratingEl = document.getElementById(`${reviewId}-rating`)
        reviewBodyEl.innerHTML = data.review.reviewBody;
        ratingEl.innerHTML = data.review.rating;
        form.classList.add('hidden');
      } else {
        // nothing yet
      };
    });
  });
};
