function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6W4cSUqpyc8":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSong');
audio.src="Bgm.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

