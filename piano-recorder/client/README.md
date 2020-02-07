# Piano

The user can play and store songs via the keyboard on the screen.

## Requirement

* Node.js
* npm
* React
* Redux
* GraphQL

## Usage

Start Apollo server at first.

Install dependencies

`
npm install
`

Run

`
npm start
`

1. Press `Start Song` button to start recording a song. 
2. Click keys on the keyboard.
3. Enter the title of the song.
4. Press `Store Song` button to end recording.
5. Refresh the page.
6. Press `Replay` to replay the song.

## Notes

* The list of song cannot be updated without refreshing.
* The replaying can only play the sound one by one.
* No support for mobile or small screen.

## Design

* Redux stores the keys that are played during recording.
* GraphQL database contains all the songs.