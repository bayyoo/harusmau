function moveButton() {
  var button = document.getElementById("no");
  var x = Math.floor(Math.random() * (window.innerWidth - 100));
  var y = Math.floor(Math.random() * (window.innerHeight - 50));
  button.style.position = "absolute";
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function showImage() {
  var image = document.getElementById("heartImage");
  var audio = document.getElementById("audio");
  image.style.display = "block";
  image.src = "image/happy.jpg"; // Pastikan gambar yang benar ditampilkan
  audio.play(); // Memutar lagu

  clearInterval(interval); // Menghentikan timer
}

var timer = 0;
var timerElement = document.getElementById("timer");

function updateTimer() {
  timer++;
  timerElement.innerHTML = timer;

  // Mengatur gambar sesuai dengan detik
  var imageBelowTimer = document.getElementById("imageBelowTimerImage");

  if (timer <= 10) {
      imageBelowTimer.src = "image/menggoda.png";
  } else if (timer <= 15) {
      imageBelowTimer.src = "image/sedih1.png";
  } else if (timer <= 20) {
      imageBelowTimer.src = "image/sedih2.png";
  }

  // Mengubah latar belakang ke gambar "gameover" saat timer mencapai 20 detik
  if (timer === 20) {
      clearInterval(interval);
      document.getElementById("content").style.display = "none"; // Sembunyikan konten lain
      document.body.style.backgroundImage = "url('image/gameover.jpg')";
      document.body.style.backgroundSize = "cover";

      var gameoverAudio = document.getElementById("gameoverAudio");
      gameoverAudio.play(); // Memutar audio gameover
      return; // Keluar dari fungsi jika sudah mencapai detik 20
  }
}

var interval = setInterval(updateTimer, 1000);