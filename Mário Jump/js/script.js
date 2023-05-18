const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const puloCounter = document.querySelector('#pulo-counter');
let puloCount = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if 
    (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80)
   {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = 'images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);}
  }, 10);
  
const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)

    puloCount++;
    puloCounter.textContent = `Pulos: ${puloCount}`;
}

document.addEventListener('keydown', jump);
document.addEventListener('keydown', () => {
    puloCount++;
    puloCounter.textContent = `Pulos: ${puloCount}`;
});
