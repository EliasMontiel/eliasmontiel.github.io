// /JS_Project/js/albums.js
// Simple, config-first setup to add/edit albums without touching HTML.
// Keeps your color theme; just supply images and links.

(function () {
    const albums = [
      {
        title: "Random",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/Album1/train.jpeg",
      },
      {
        title: "CU MTB RACE",
        href: "/JS_Project/album2.html",
        cover: "/JS_Project/photos/Album2/sydney.jpg",
      },
      {
        title: "Album 3",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/Album1/stone.jpeg",
      },
      {
        title: "Album 4",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/Album1/stone.jpeg",
      },
      

    ];
  
    const grid = document.getElementById("albumsGrid");
    if (!grid) return;
  
    // Build album cards
    const frag = document.createDocumentFragment();
    albums.forEach(({ title, href, cover }) => {
      const a = document.createElement("a");
      a.className = "album-card";
      a.href = href;
      a.style.setProperty("--cover", `url('${cover}')`);
      a.setAttribute("aria-label", title);
  
      const label = document.createElement("span");
      label.className = "album-label";
      label.textContent = title;
  
      a.appendChild(label);
      frag.appendChild(a);
    });
  
    grid.appendChild(frag);
  })();
  