const playlistCollection = [
  {
    id: "01",
    title: "Beethoven Sonatas",
    songs: [
      {
        id: "04",
        title: "Piano Sonata No. 3",
        artist: "Beethoven",
      },
      {
        id: "05",
        title: "Piano Sonata No. 7",
        artist: "Beethoven",
      },
      {
        id: "06",
        title: "Piano Sonata No. 10",
        artist: "Beethoven",
      }
    ]
  },
  {
    id: "02",
    title: "Beethoven Concertos",
    songs: [
      {
        id: "07",
        title: "Piano Concerto No. 0",
        artist: "Beethoven",
      },
      {
        id: "08",
        title: "Piano Concerto No. 4",
        artist: "Beethoven",
      },
      {
        id: "09",
        title: "Piano Concerto No. 6",
        artist: "Beethoven",
      }
    ]
  },
  {
    id: "03",
    title: "Beethoven Variations",
    songs: [
      {
        id: "10",
        title: "Opus 34: Six variations on a theme in F major",
        artist: "Beethoven",
      },
      {
        id: "11",
        title: "Opus 120: Thirty-three variations on a waltz by Diabelli in C majo",
        artist: "Beethoven",
      }
    ]
  }
];

// EXERCISES:
// Try each of the following approaches to displaying the playlist data
// View the results in the console

// EXERCISE 1:

console.log (playlistCollection);

// EXERCISE 2:

for (let i = 0; i < playlistCollection.length; i++) {
  console.log(playlistCollection[i]);
}

// EXERCISE 3:

for (let i = 0; i < playlistCollection.length; i++) {
  console.log(playlistCollection[i].title)
}

// EXERCISE 4A:
for (let i = 0; i < playlistCollection.length; i++) {
  console.log(playlistCollection[i].title)
  for (let j=0; j < playlistCollection[i].songs.length; j++) {
    console.log(playlistCollection[i].songs[j]);
  }
}

// EXERCISE 4B:
for (let i = 0; i < playlistCollection.length; i++) {
  console.log(playlistCollection[i].title)
  for (let j=0; j < playlistCollection[i].songs.length; j++) {
    console.log(playlistCollection[i].songs[j].title);
    console.log(playlistCollection[i].songs[j].artist);
  }
}