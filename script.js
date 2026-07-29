const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

// Sätt storlek på canvas till hela fönstret
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Pennans inställningar
ctx.strokeStyle = '#000000'; // Svart färg
ctx.lineWidth = 2.5;          // Linjebredd
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Lyssna på musen DIREKT på canvas-elementet
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    
    [lastX, lastY] = [e.clientX, e.clientY];
});

window.addEventListener('mouseup', () => isDrawing = false);
