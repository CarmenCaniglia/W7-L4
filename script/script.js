// card
const renderImages = function (arrayOfImages) {
  const row = document.getElementById("images-row");

  arrayOfImages.photos.forEach((photo) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-md-4");
    newCol.innerHTML = `<div class="card mb-4 shadow-sm">
        <img
          src="${photo.src.medium}"
          class="bd-placeholder-img card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">Lorem Ipsum</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                id = "hide"
                onclick="hideCard(event)"
              >
                Hide
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
        `;
    row.appendChild(newCol);
  });
};
// hide button
const hideCard = function (e) {
  console.log("elimino", e.target.closest(".col"));
  e.target.closest(".col").remove();
};

// fetch
const getImages = function () {
  fetch("https://api.pexels.com/v1/search?query=music", {
    headers: {
      Authorization: "4td83ep6OVU067sdX1LBBhfCEYTHSl0M8NGgGRhhG7PmmYgfKfRVHEC6",
    },
  })
    .then((res) => {
      console.log("Response ottenuta dal GET", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((images) => {
      console.log("images", images);
      //   qui ricreo le card
      renderImages(images);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};

getImages();
