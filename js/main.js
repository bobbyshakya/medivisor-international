$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: !0,
        margin: 20,
        nav: !1,
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel')
    });
    $('.owl-prev').click(function () {
        owl.trigger('prev.owl.carousel')
    })
});
document.addEventListener('DOMContentLoaded', () => {
    const pdfTriggerButton = document.getElementById('pdf-trigger-button');
    const pdfModal = document.getElementById('pdf-modal');
    const closeModal = document.getElementById('close-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    const openModal = () => {
        pdfModal.classList.remove('hidden');
        pdfModal.classList.add('modal-enter-active');
        document.body.classList.add('overflow-hidden');
        const modalContent = pdfModal.querySelector('.relative');
        if (modalContent) {
            modalContent.classList.add('modal-content-enter-active')
        }
    };
    const closeModalHandler = () => {
        pdfModal.classList.add('modal-leave-active');
        const modalContent = pdfModal.querySelector('.relative');
        if (modalContent) {
            modalContent.classList.add('modal-content-leave-active')
        }
        pdfModal.addEventListener('transitionend', () => {
            pdfModal.classList.add('hidden');
            pdfModal.classList.remove('modal-enter-active', 'modal-leave-active');
            if (modalContent) {
                modalContent.classList.remove('modal-content-enter-active', 'modal-content-leave-active')
            }
        }, {
            once: !0
        });
        document.body.classList.remove('overflow-hidden')
    };
    if (pdfTriggerButton) {
        pdfTriggerButton.addEventListener('click', (event) => {
            event.preventDefault();
            openModal()
        })
    }
    if (closeModal) {
        closeModal.addEventListener('click', closeModalHandler)
    }
    if (pdfModal) {
        pdfModal.addEventListener('click', (event) => {
            if (event.target === pdfModal) {
                closeModalHandler()
            }
        })
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !pdfModal.classList.contains('hidden')) {
            closeModalHandler()
        }
    })
});

function showStep(step) {
    document.querySelectorAll('.step-content').forEach(c => c.classList.add('hidden'));
    document.getElementById(`step-${step}`).classList.remove('hidden');
    document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('bg-[#E22026]/10', 'text-gray-700', 'ring-2', 'ring-[#E22026]/10'));
    const activeBtn = document.getElementById(`btn-${step}`);
    activeBtn.classList.add('bg-[#E22026]/10', 'text-gray-700', 'ring-2', 'ring-[#E22026]/10')
}
window.onload = () => showStep(1);

function changeVideo(el, videoId, titleText) {
    // Correct YouTube embed URL format
    document.getElementById('main-video').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
    document.getElementById('video-title').textContent = titleText;

    // Optional: Add/remove active class for styling the selected video
    document.querySelectorAll('.space-y-4 .cursor-pointer').forEach(item => {
        item.classList.remove('bg-[#E22026]/10'); // Remove active style from others
    });
    el.classList.add('bg-[#E22026]/10'); // Add active style to the clicked one
}
$(document).ready(function () {
    $(".owl-carousel-banner").owlCarousel({
        items: 1,
        loop: !0,
        margin: 10,
        autoplay: !0,
        autoplayTimeout: 3000,
        autoplayHoverPause: !0,
    });
    $(".custom-carousel").owlCarousel({
        items: 2,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav: !0,
        dots: !1,
        margin: 24,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
        },
        navText: [`<div class="custom-prev-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                         </svg>
                       </div>`, `<div class="custom-next-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                         </svg>
                       </div>`, ],
    });
    $(".owl-carousel-testi").owlCarousel({
        loop: !0,
        margin: 20,
        nav: !0,
        dots: !0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
        },
        navText: [`<div class="custom-prev-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                         </svg>
                       </div>`, `<div class="custom-next-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                         </svg>
                       </div>`, ],
    });
    window.onMenuToggle = (e) => {
        const navLinks = document.querySelector(".navLinks");
        e.name = e.name === "menu" ? "close" : "menu";
        navLinks.classList.toggle("left-[0%]")
    };
    const header = document.getElementById("mainHeader");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    });
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                if (window.innerWidth < 768) {
                    const navLinks = document.querySelector(".navLinks");
                    if (navLinks) {
                        navLinks.classList.remove("left-[0%]")
                    }
                }
            }
        })
    });
    const contactModal = document.getElementById("contactModal");
    const modalOpenButtons = document.querySelectorAll(".modal-open-btn");
    const closeModalButton = document.getElementById("closeModalBtn");
    const openModal = () => {
        contactModal.classList.remove("hidden");
        contactModal.classList.add("flex")
    };
    const closeModal = () => {
        contactModal.classList.remove("flex");
        contactModal.classList.add("hidden")
    };
    modalOpenButtons.forEach((btn) => btn.addEventListener("click", openModal));
    closeModalButton?.addEventListener("click", closeModal);
    contactModal?.addEventListener("click", (e) => {
        if (e.target === contactModal) {
            closeModal()
        }
    });
    setTimeout(openModal, 60000)
});