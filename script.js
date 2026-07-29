const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    // Sätter ritytans upplösning till hela skärmens bredd och höjd
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Nollställer pennans stil efter resize
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Lyssna på musen över hela fönstret
window.addEventListener('mousedown', (e) => {
    // Om man klickar på en länk ska man inte rita
    if (e.target.tagName === 'A') return;
    
    isDrawing = true;
    [lastX, lastY] = [e.clientX, e.clientY];
});

window.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    
    [lastX, lastY] = [e.clientX, e.clientY];
});

window.addEventListener('mouseup', () => isDrawing = false);
