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

document.getElementById('draw4x4').addEventListener('click', () => {
  const CANVAS_SIZE = 4;
  const CANVAS_DEFAULT = 512;
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let canvas_size = CANVAS_DEFAULT / CANVAS_SIZE;

  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    .then(res => res.json())
    .then(data => {
      for( let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
        ctx.fillStyle = `#${data[i][j]}`;
        ctx.fillRect(i * canvas_size, j * canvas_size, canvas_size, canvas_size);
      }
    }
  });
      
});

document.getElementById('draw32x32').addEventListener('click', () => {
  const CANVAS_SIZE = 32;
  const CANVAS_DEFAULT = 512;
  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let canvas_size = CANVAS_DEFAULT / CANVAS_SIZE;

  fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    .then(res => res.json())
    .then(data => {
      for( let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
        ctx.fillStyle = `rgba(${data[i][j]})`;
        ctx.fillRect(i * canvas_size, j * canvas_size, canvas_size, canvas_size);
      }
    }
  });
      
});

document.getElementById('draw256x256').addEventListener('click', () => {
  drawImg();
});