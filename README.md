🔗 **Live Demo**: https://jazz-album-covers-infinite-scroll-demo.vercel.app/

# 🎷 Jazz Album Covers Infinite Scroll

A visual tribute to classic jazz, this project dynamically fetches and displays jazz album covers in an infinite scroll layout using the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html). The project is styled with a moody, vintage aesthetic — featuring a fixed gold saxophone on the side and a textured background to evoke the spirit of jazz's golden era.

## 🔧 What I Built

- Fetched real album data (covers, artist name, release year) from the iTunes API using JavaScript.
- Implemented **infinite scroll** to continuously load more albums as the user scrolls.
- Created a responsive, **flexible album grid layout** that adjusts between 1 column on mobile and multiple columns on larger screens.
- Designed a jazz-inspired UI, including:
  - A **fixed saxophone illustration** on the left side of the screen.
  - A **grainy dark background texture** to add visual depth.
  - A **bold, vintage header** using the Bebas Neue font.
- Used **vanilla HTML, CSS, and JavaScript** — no frameworks or libraries.

## 💡 What I Learned

- How to fetch and display data from a public API.
- How to implement infinite scrolling behavior using scroll detection logic.
- How to style a responsive grid layout using `display: grid` and `auto-fill`.
- Better understanding of fixed vs normal flow elements (e.g., dealing with fixed headers and layout offsets).
- How to improve layout usability by preventing overlap between fixed images and scrollable content.

## 📌 Note

- The project uses the **iTunes API**, which has limitations on result relevance and doesn't support full filtering by genre/year. Therefore, some albums may fall slightly outside the intended scope (jazz albums from the 1940s–70s).
- If the API returns unrelated content, a fallback filtering method may be added in future versions.

## 🙏 Credits

- Saxophone illustration designed using AI-based generation.
- Album data provided by the iTunes Search API.
