const key = "Melodify musics";
const initMusics = [
  { src: "/music/Back In Black.mp3", isFavorite: false },
  { src: "/music/Eruption - One Way Ticket.mp3", isFavorite: false },
  {
    src: "/music/PSY - GANGNAM STYLE(강남스타일) MV.mp3",
    isFavorite: false,
  },
  { src: "/music/Shocking Blue - Venus.mp3", isFavorite: false },
  { src: "/music/The Weeknd - Blinding Lights.mp3", isFavorite: false },
];

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, JSON.stringify(initMusics));
}

export function getMusics() {
  return JSON.parse(localStorage.getItem(key));
}

export function saveMusics(musics) {
  localStorage.setItem(key, JSON.stringify(musics));
}
