const key = "Melodify musics";
const initMusics = [
  {
    src: `${import.meta.env.BASE_URL}music/Back In Black.mp3`,
    isFavorite: false,
    id: 0,
    name: "Back In Black",
  },
  {
    src: `${import.meta.env.BASE_URL}/music/Eruption - One Way Ticket.mp3`,
    isFavorite: false,
    id: 1,
    name: "Eruption - One Way Ticket",
  },
  {
    src: `${
      import.meta.env.BASE_URL
    }/music/PSY - GANGNAM STYLE(강남스타일) MV.mp3`,
    isFavorite: false,
    id: 2,
    name: "PSY - GANGNAM STYLE(강남스타일) MV",
  },
  {
    src: `${import.meta.env.BASE_URL}/music/Shocking Blue - Venus.mp3`,
    isFavorite: false,
    id: 3,
    name: "Shocking Blue - Venus",
  },
  {
    src: `${import.meta.env.BASE_URL}/music/The Weeknd - Blinding Lights.mp3`,
    isFavorite: false,
    id: 4,
    name: "The Weeknd - Blinding Lights",
  },
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
