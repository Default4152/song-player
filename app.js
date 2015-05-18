var firstSong = document.getElementsByTagName('i')[0];
var secondSong = document.getElementsByTagName('i')[1];
var thirdSong = document.getElementsByTagName('i')[2];
var fourthSong = document.getElementsByTagName('i')[3];
var allButtons = document.getElementsByTagName('i');
var allSongs = document.getElementsByTagName('audio');
var favouriteFood = document.getElementById('favourite-food');
var thrillOfTheHunt = document.getElementById('thrill-of-the-hunt');
var transgenderDysphoria = document.getElementById('transgender-dysphoria');
var whereImFrom = document.getElementById('where-im-from');
var header = document.getElementById('song');

firstSong.addEventListener('click', function() {
    toggle(this, "Favorite Food", favouriteFood, allSongs);
});
secondSong.addEventListener('click', function() {
    toggle(this, "Thrill of the Hunt", thrillOfTheHunt, allSongs);
});
thirdSong.addEventListener('click', function() {
    toggle(this, "Transgender Dysphoria Blues", transgenderDysphoria, allSongs);
});
fourthSong.addEventListener('click', function() {
    toggle(this, "Where I'm From", whereImFrom, allSongs);
});

function toggle(currEl, songName, song, allSongs) {
    if (currEl.className == "fa fa-play") {
        header.innerHTML = "Now Playing: " + "<em>" + songName + "</em>";
        for (var i = 0; i < allSongs.length; i++) {
            allButtons[i].className = "fa fa-play";
            allSongs[i].pause();
        }
        currEl.className = "fa fa-stop";
        song.play();
    } else {
        currEl.className = "fa fa-play";
        header.innerHTML = "Select a song!";
        song.pause();
    }
}
