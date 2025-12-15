

// Select the navbar collapse element
const navbarCollapse = document.getElementById('navbarNav');

// Listen for clicks on the document
document.addEventListener('click', function (event) {
    // Check if navbar is shown
    if (navbarCollapse.classList.contains('show')) {
        // Check if click is outside the navbar
        const isClickInside = navbarCollapse.contains(event.target) || event.target.classList.contains('navbar-toggler');
        if (!isClickInside) {
            // Collapse the navbar
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    }
});


/* ---------------------------- Footer Dynamic DateTime ------------------------ */
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    document.getElementById("currentDateTime").textContent = now.toLocaleString('en-IN', options);
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Update every second

setInterval(updateDateTime, 1000);
updateDateTime();