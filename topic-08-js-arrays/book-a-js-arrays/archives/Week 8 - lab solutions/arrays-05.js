// Extend songList3 to include a 'duration' field for each song. This should be a simple number. Have the this number included in the log when the list is printed out.

const songList3 = [
  {
    title: 'Piano Sonata No. 3',
    artist: 'Beethoven',
	duration: 3,
  },
  {
    title: 'Piano Sonata No. 7',
    artist: 'Beethoven',
	duration: 4,
  },
  {
    title: 'Piano Sonata No. 10',
    artist: 'Beethoven',
	duration: 3,
  },
];

// Output the total number of songs when all song details have been printed out

// Along with the total number of songs, see if you can also print out the total duration. This should be a simple total of the duration of all individual songs.

// declare variables to store a count of songs and the total duration
let songCount = 0;
let totalDuration = 0;

for (let j = 0; j < songList3.length; j++) {
  // print title, artist and duration for each song
  console.log('Song ' + j + ': Title: ' + songList3[j].title + ': Artist: ' + songList3[j].artist + ': Duration: ' + songList3[j].duration);
  
  // increase songCount by 1 with each iteration of the loop
  songCount++;
  
  // add the current song's duration to the totalDuration variable
  totalDuration = totalDuration + songList3[j].duration;
}

// print the songCount and totalDuration variables to the console
console.log('Total number of songs: ' + songCount);
console.log('Total duration: ' + totalDuration);