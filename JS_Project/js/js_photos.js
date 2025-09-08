// /JS_Project/js/albums.js
// Simple, config-first setup to add/edit albums without touching HTML.
// Keeps your color theme; just supply images and links.

(function () {
    const albums = [
      {
        title: "Album 1",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/train.jpeg",
      },
      {
        title: "Album 2",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/stone.jpeg",
      },
      {
        title: "Album 2",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/stone.jpeg",
      },
      {
        title: "Album 2",
        href: "/JS_Project/album1.html",
        cover: "/JS_Project/photos/stone.jpeg",
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
  