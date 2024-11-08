const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volume');
// Volume Control (Slider)
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

audio.volume = 0.005;
// Play/Pause Button Toggle
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
    }
});

const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

// دریافت مختصات موس
document.addEventListener('mousemove', (e) => {
    // دریافت مختصات موس
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // به‌روزرسانی موقعیت موس فانتزی
    mousePointer.style.top = `${mouseY}px`;
    mousePointer.style.left = `${mouseX}px`;
});