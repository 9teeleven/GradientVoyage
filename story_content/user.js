function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69yf16WQxDZ":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="bgm.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

