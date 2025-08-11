const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function() {
    document.getElementById('header').style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";
});

