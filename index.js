var videoSource = './animals.mp4';
// videoSource = './earth.mp4';
var videoWidth = window.innerHeight / 3.0; // 140;
var debug = false;

function createVideo(src, transformation) {
  var video = document.createElement('video');
  video.setAttribute('loop', true);
  video.setAttribute('style', '');
  video.setAttribute('preload', 'auto');
  video.setAttribute('src', src);
  video.setAttribute('width', videoWidth);
  video.setAttribute('height', videoWidth);
  video.style.transform = transformation;
  if (debug) {
    video.style.border = '1px solid white';
  }
  return video;
}

var rowWidth = (videoWidth * 3) + 'px';

var row1 = document.getElementById('row-1');
var row2 = document.getElementById('row-2');
var row3 = document.getElementById('row-3');

var row1cell1 = document.getElementById('row-1-cell-1');
var row1cell2 = document.getElementById('row-1-cell-2');
var row1cell3 = document.getElementById('row-1-cell-3');
var row2cell1 = document.getElementById('row-2-cell-1');
var row2cell2 = document.getElementById('row-2-cell-2');
var row2cell3 = document.getElementById('row-2-cell-3');
var row3cell1 = document.getElementById('row-3-cell-1');
var row3cell2 = document.getElementById('row-3-cell-2');
var row3cell3 = document.getElementById('row-3-cell-3');

row1.style.width = rowWidth;
row2.style.width = rowWidth;
row3.style.width = rowWidth;

row1cell1.style.width = videoWidth + 'px';
row1cell2.style.width = videoWidth + 'px';
row1cell3.style.width = videoWidth + 'px';
row2cell1.style.width = videoWidth + 'px';
row2cell2.style.width = videoWidth + 'px';
row2cell3.style.width = videoWidth + 'px';
row3cell1.style.width = videoWidth + 'px';
row3cell2.style.width = videoWidth + 'px';
row3cell3.style.width = videoWidth + 'px';

var video1 = createVideo(videoSource);
var video2 = createVideo(videoSource, 'rotateZ(270deg)');
var video3 = createVideo(videoSource, 'rotateZ(90deg)');
var video4 = createVideo(videoSource, 'rotateX(180deg) rotateY(180deg)');

row1cell2.appendChild(video1);
row2cell1.appendChild(video2);
row2cell3.appendChild(video3);
row3cell2.appendChild(video4);

video1.play();
video2.play();
video3.play();
video4.play();
