const movies = [
  {
    id: 1,
    title: "Midnight Signal",
    year: 2026,
    runtime: "8 Episodes",
    rating: "TV-14",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    description:
      "A rogue signal awakens a hidden city beneath the digital cloud. As ordinary people become ghostly memetic legends, one woman tries to decode the broadcast before the world goes dark.",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    featured: true,
    badge: "New"
  },
  {
    id: 2,
    title: "Shimmer Ridge",
    year: 2025,
    runtime: "1h 46m",
    rating: "PG-13",
    genre: ["Adventure", "Drama"],
    description:
      "A hidden valley reveals a glowing ecosystem that defies the rules of nature, and a family on the edge of collapse must decide whether to protect it or exploit it.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Hot"
  },
  {
    id: 3,
    title: "Pixel Hearts",
    year: 2024,
    runtime: "1h 38m",
    rating: "PG",
    genre: ["Romance", "Comedy"],
    description:
      "Two designers working in a fading arcade build a love story out of old code, impossible dates, and a one-night digital scavenger hunt.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Top"
  },
  {
    id: 4,
    title: "Silent Harbor",
    year: 2023,
    runtime: "1h 52m",
    rating: "TV-MA",
    genre: ["Mystery", "Crime"],
    description:
      "A dockmaster uncovers a secret network connecting the city’s oldest shipyard to an underground smuggling ring with a future-facing twist.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Watch"
  },
  {
    id: 5,
    title: "Afterglow",
    year: 2026,
    runtime: "2h 03m",
    rating: "PG-13",
    genre: ["Sci-Fi", "Drama"],
    description:
      "When the skies over a small island light up with unknown energy, a grieving scientist and a local musician uncover something that changes human history.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "New"
  },
  {
    id: 6,
    title: "Glass Horizon",
    year: 2022,
    runtime: "1h 44m",
    rating: "PG",
    genre: ["Family", "Adventure"],
    description:
      "A young pilot and her grandfather race across a sky-city to deliver a mysterious ritual to the last open tower before dawn.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    featured: true,
    badge: "Popular"
  },
  {
    id: 7,
    title: "Echoes of Fire",
    year: 2024,
    runtime: "1h 58m",
    rating: "R",
    genre: ["Action", "Thriller"],
    description:
      "A burned-out firefighter and a disgraced journalist follow a trail of arson clues that lead to a conspiracy in the city’s elite neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Live"
  },
  {
    id: 8,
    title: "Velvet Circuit",
    year: 2025,
    runtime: "1h 42m",
    rating: "TV-14",
    genre: ["Drama", "Music"],
    description:
      "A synth-pop duo hits a breaking point when their new AI-assisted sound engine begins composing the songs of their future instead of the present.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Trend"
  },
  {
    id: 9,
    title: "Night Bloom",
    year: 2021,
    runtime: "2h 01m",
    rating: "PG-13",
    genre: ["Fantasy", "Romance"],
    description:
      "In a city where flowers only awaken after sunset, two rival gardeners discover a hidden moonlit plot that may save their neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Classic"
  },
  {
    id: 10,
    title: "Paper Skies",
    year: 2022,
    runtime: "1h 34m",
    rating: "PG",
    genre: ["Animation", "Adventure"],
    description:
      "A young illustrator discovers a universe folded inside her sketches, where every forgotten idea is a world waiting to be explored.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    featured: false,
    badge: "Family"
  }
];

const state = {
  query: "",
  activeGenre: "All",
  watchlist: new Set([3, 6])
};

const genreOptions = ["All", ...new Set(movies.flatMap((movie) => movie.genre))];

const trendingRow = document.getElementById("trendingRow");
const topPicksRow = document.getElementById("topPicksRow");
const catalogueGrid = document.getElementById("catalogueGrid");
const watchlistRow = document.getElementById("watchlistRow");
const genreFilters = document.getElementById("genreFilters");
const searchInput = document.getElementById("searchInput");

function createMovieCard(movie, compact = false) {
  const article = document.createElement("article");
  article.className = compact ? "card compact" : "card";
  article.innerHTML = `
    <div class="card-media" style="background-image: url('${movie.image}')">
      <div class="action-icons">
        <button class="icon-button" data-action="watchlist" data-id="${movie.id}" aria-label="Add to watchlist">
          ${state.watchlist.has(movie.id) ? "✓" : "+"}
        </button>
        <button class="icon-button" data-action="detail" data-id="${movie.id}" aria-label="View details">i</button>
      </div>
      <div class="card-info">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-sub">
          <span>${movie.year}</span>
          <span class="bookmark-badge">${movie.badge}</span>
        </div>
      </div>
    </div>
  `;
  return article;
}

function getVisibleMovies() {
  return movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(state.query.toLowerCase());
    const matchesGenre = state.activeGenre === "All" || movie.genre.includes(state.activeGenre);
    return matchesQuery && matchesGenre;
  });
}

function renderGenreFilters() {
  genreFilters.innerHTML = "";
  genreOptions.forEach((genre) => {
    const button = document.createElement("button");
    button.className = `filter-chip ${state.activeGenre === genre ? "active" : ""}`;
    button.textContent = genre;
    button.addEventListener("click", () => {
      state.activeGenre = genre;
      renderAll();
    });
    genreFilters.appendChild(button);
  });
}

function renderTrending() {
  const list = movies.filter((movie) => movie.featured || movie.badge === "Hot" || movie.badge === "New").slice(0, 6);
  trendingRow.innerHTML = "";
  list.forEach((movie) => trendingRow.appendChild(createMovieCard(movie, true)));
}

function renderTopPicks() {
  const list = movies.filter((movie) => movie.rating !== "TV-14" || movie.genre.includes("Drama")).slice(0, 6);
  topPicksRow.innerHTML = "";
  list.forEach((movie) => topPicksRow.appendChild(createMovieCard(movie, true)));
}

function renderCatalogue() {
  const list = getVisibleMovies();
  catalogueGrid.innerHTML = "";
  list.forEach((movie) => catalogueGrid.appendChild(createMovieCard(movie)));
}

function renderWatchlist() {
  const saved = movies.filter((movie) => state.watchlist.has(movie.id));
  watchlistRow.innerHTML = "";
  if (!saved.length) {
    watchlistRow.innerHTML = '<div class="empty-state">Your watchlist is empty. Add a movie to keep it here.</div>';
    return;
  }
  saved.forEach((movie) => watchlistRow.appendChild(createMovieCard(movie, true)));
}

function renderAll() {
  renderGenreFilters();
  renderTrending();
  renderTopPicks();
  renderCatalogue();
  renderWatchlist();
}

function openMovieModal(movieId) {
  const movie = movies.find((m) => m.id === Number(movieId));
  if (!movie) return;

  const modal = document.getElementById("movieModal");
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalYear").textContent = movie.year;
  document.getElementById("modalRuntime").textContent = movie.runtime;
  document.getElementById("modalRating").textContent = movie.rating;
  document.getElementById("modalDescription").textContent = movie.description;
  document.getElementById("modalMedia").style.backgroundImage = `url('${movie.image}')`;
  document.getElementById("modalWatchlistBtn").textContent = state.watchlist.has(movie.id) ? "✓ Saved" : "+ My List";
  document.getElementById("modalWatchlistBtn").dataset.id = movie.id;
  document.getElementById("modalPlayBtn").dataset.movieId = movie.id;

  const tags = document.getElementById("modalGenres");
  tags.innerHTML = movie.genre.map((tag) => `<span class="genre-tag">${tag}</span>`).join("");

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeMovieModal() {
  const modal = document.getElementById("movieModal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function toggleWatchlist(id) {
  if (state.watchlist.has(id)) {
    state.watchlist.delete(id);
  } else {
    state.watchlist.add(id);
  }
  renderAll();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderCatalogue();
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest("[data-action='detail']")) {
    const movieId = target.closest("[data-action='detail']").dataset.id;
    openMovieModal(movieId);
  }

  if (target.closest("[data-action='watchlist']")) {
    const id = Number(target.closest("[data-action='watchlist']").dataset.id);
    toggleWatchlist(id);
  }

  if (target.closest(".play-button")) {
    const id = target.closest(".play-button").dataset.movieId || 1;
    alert(`Playing: ${movies.find((m) => m.id === Number(id))?.title || "Movie"}`);
  }

  if (target.closest("#modalWatchlistBtn")) {
    const id = Number(target.closest("#modalWatchlistBtn").dataset.id);
    toggleWatchlist(id);
    openMovieModal(id);
  }

  if (target.closest("[data-close-modal='true']") || target.closest(".close-modal") || target.closest("#modalCloseBtn")) {
    closeMovieModal();
  }

  if (target.closest("[data-close-auth='true']") || target.closest(".auth-close")) {
    closeAuthModal();
  }

  if (target.closest("#openAuth")) {
    openAuthModal();
  }

  if (target.closest(".tab")) {
    const tabButtons = document.querySelectorAll(".tab");
    const forms = document.querySelectorAll(".auth-form");
    const nextTab = target.closest(".tab").dataset.tab;

    tabButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.tab === nextTab));
    forms.forEach((form) => form.classList.toggle("is-active", form.dataset.form === nextTab));
  }
});

renderAll();
