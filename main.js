const moreOptions = document.querySelector("#bmore");
const bshowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bshowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

// Videos   =====================================================================================//

const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "XCbMVbeKlCg",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "nXDk86lQhto",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

bNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (current < videos.length - 1) {
    current++;
  } else {
    current = 0;
  }
  renderCurrentVideo(videos[current].id);
});

bPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (current > 0) {
    current--;
  } else {
    current = videos.length - 1;
  }
  renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `
        <iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
  const html = videos.map((video, index) => {
    return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg"></img>
            </a>
        </div>`;
  });
  videosContainer.innerHTML = html.join(" ");
  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = +item.getAttribute("data-id");
      current = id;
      renderCurrentVideo(videos[current].id);
    });
  });
}
