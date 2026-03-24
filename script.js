// Animation au scroll pour les barres de progression
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.progress-fill');
            fills.forEach(fill => {
                const width = fill.style.width;
                fill.style.width = width;
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skills-grid').forEach(grid => {
    observer.observe(grid);
});
const btn = document.getElementById('theme-toggle');
        
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    btn.textContent = '☀️ Mode clair';
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Mode clair';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙 Mode sombre';
        localStorage.setItem('theme', 'light');
    }
});