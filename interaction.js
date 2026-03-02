const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);  
});

const modal = document.getElementById("cvModal");
const btn = document.getElementById("openCV");
const closebtn = ddocument.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}
closebtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}