const list = document.querySelector(".list")

const token = window.localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}

logout.addEventListener("click", function () {
  window.localStorage.removeItem("token");

  window.location.replace("index.html");
});


fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
  .then(response => response.json())
  .then(data2 => data2.items.map(item => {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-top" width="200" height="200"src="${item.volumeInfo.imageLinks.thumbnail}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${item.volumeInfo.title}</h5>

          <p class="card-text">${item.volumeInfo.publishedDate}</p>
          <div class="d-flex">
              <a href="#" class="btn btn-warning me-2 bookadd"  onclick="bookAdd(${item.id})">Bookmark </a>
              <a href="#" class="btn btn-info">More info</a>
          </div>
              <a href="#" class="btn btn-success w-100 text-center mt-3">Read</a>
      </div>
    </div>
    `
    list.appendChild(div)
  }
  ))


function bookAdd(item1) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
  .then(res => res.json)
  .then(data => console.log(data.items.map(item => item.id == item1)))
}