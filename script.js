const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Inställningar för pennan
ctx.strokeStyle = '#000000'; // Svart färg
ctx.lineWidth = 2.5;          // Linjens tjocklek
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Starta ritning vid musklick
window.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
});

// Rita linje när musen rör sig
window.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    
    [lastX, lastY] = [e.clientX, e.clientY];
});

// Sluta rita när man släpper musknappen
window.addEventListener('mouseup', () => isDrawing = false);
