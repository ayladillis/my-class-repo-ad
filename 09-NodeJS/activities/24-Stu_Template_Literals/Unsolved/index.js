const music = {
  title: "Love Yourself",
  artist: "Justin Bieber",
  album: "Old Song"

};

// write code between the <p> tags to output the data from the music object above
const songSnippet = `my favorite song is ${music.title}! from the ${music.album}! album
  
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
