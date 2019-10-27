var frames = [];
var defaultFrame = [
  [["000"]],
  [["000"]]
];

const getFrames = () => {
  const frames = [];
  const frame = [
    [["FFFF00"]],
    [["0000ff"]]
  ];

  frames.push(frame);
  return frames;
}

function draw(frames){
  var canvas = document.getElementById('canvas');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // imageData.data = [
    //     ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    //     ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    //     ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    //     ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
    // ]

    // const frame = frames[0];

    // frame.forEach((row, i) => {
    //   row.forEach((column, j) => {
    //     ctx.fillStyle = "#" + column;
    //     ctx.fillRect(0, i*256, 512, (i+1)*256);
    //   });
    // });

    // ctx.fillStyle = "#0000ff";
    // ctx.fillRect(0, 256, 512, 512);
  }
}

// const xhr = new XMLHttpRequest();
// xhr.addEventListener("load", function(){
//   const data = this.response;
//   draw(data);
//   alert(data);
// });
// xhr.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
// xhr.send();



function drawImg(){
  var canvas = document.getElementById('canvas');
  if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    var img = new Image();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
  }
}

document.getElementById('draw').addEventListener('click', () => {
  // const frames = getFrames();
  // draw(frames);

  // const response = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json');
  // const x4Json = await response.json();
  // console.log(JSON.stringify(x4Json));

  let x4Data = '';
  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    .then(res => res.json())
    .then(data => x4Data = data);
  console.log(x4Data);
});

document.getElementById('draw256x256').addEventListener('click', () => {
  drawImg();
});