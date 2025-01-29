const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

document.addEventListener('mousemove', (e) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4); // Limit distance so pupil doesn't go out of bounds
    
    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;
    
    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});