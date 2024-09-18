
document.addEventListener("DOMContentLoaded", function() {
    var aboutModal = document.getElementById("aboutModal");
    var aboutBtn = document.getElementById("aboutButton");
    var aboutNavLink = document.getElementById("aboutNavLink");
    var aboutClose = aboutModal.querySelector(".close");

    aboutBtn.onclick = function() {
        aboutModal.style.display = "block";
    }

    aboutNavLink.onclick = function(event) {
        event.preventDefault();
        aboutModal.style.display = "block";
    }

    aboutClose.onclick = function() {
        aboutModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == aboutModal) {
            aboutModal.style.display = "none";
        }
    }

    var modals = document.querySelectorAll('.modal');
    var btns = document.querySelectorAll('[data-modal]');
    var spans = document.querySelectorAll('.close');

    btns.forEach(btn => {
        btn.onclick = function() {
            var modal = document.getElementById(this.getAttribute('data-modal'));
            modal.style.display = "block";
        }
    });

    spans.forEach(span => {
        span.onclick = function() {
            var modal = span.closest('.modal');
            modal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
