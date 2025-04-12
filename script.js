import { searchTerms } from './searchTerms.js';

const albumContainer = document.getElementById("album-container");
let page = 0;
let loading = false;

function getRandomSearchTerm() {
  const index = Math.floor(Math.random() * searchTerms.length);
  return searchTerms[index];
}

async function fetchAlbums() {
  if (loading) return;
  loading = true;

  const term = getRandomSearchTerm(); 
  const offset = page * 20;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=album&limit=20&offset=${offset}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(album => {
      const div = document.createElement("div");
      div.className = "album";
      div.innerHTML = `
        <img src="${album.artworkUrl100.replace("100x100", "300x300")}" alt="${album.collectionName}" />
        <p>${album.artistName} - ${album.collectionName} (${new Date(album.releaseDate).getFullYear()})</p>
      `;
      albumContainer.appendChild(div);
    });

    page++;
  } catch (err) {
    console.error("Error loading albums:", err);
  } finally {
    loading = false;
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
  ) {
    fetchAlbums();
  }
});

fetchAlbums();
