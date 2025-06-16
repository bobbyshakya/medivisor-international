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


    document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const tabContentHeading = document.querySelector('.tab-content-container h2'); // Select the heading to be updated

    // Function to apply dynamic grid classes based on card count
    const applyDynamicGrid = (panel) => {
        // Clear any existing grid classes first
        panel.classList.remove('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'grid', 'justify-items-center', 'justify-items-start');

        const cards = panel.querySelectorAll('.card-item');
        const cardCount = cards.length;

        panel.classList.add('grid'); // Ensure grid display for the panel

        if (cardCount === 1) {
            panel.classList.add('grid-cols-1', 'justify-items-center'); // Center single card
            // For a single card, you might want to apply a max-width to the card itself for better aesthetics
            // This would typically be done in CSS or by adding specific Tailwind classes to the single card item in HTML
            // Example: cards[0].classList.add('max-w-xl'); if you wanted to control it via JS
        } else if (cardCount >= 2) {
            // For two or more, use 2 per row on medium screens and up
            panel.classList.add('grid-cols-1', 'md:grid-cols-2', 'justify-items-start');
        } else {
            // Fallback for 0 cards, or other unexpected counts
            panel.classList.add('grid-cols-1', 'justify-items-start');
        }
    };


    // Function to activate a tab
    const activateTab = (tabId) => {
        // Deactivate all buttons
        tabButtons.forEach(button => {
            button.classList.remove('text-red-600', 'border-red-600');
            button.classList.add('text-gray-600', 'border-transparent');
            button.setAttribute('aria-selected', 'false');
        });

        // Deactivate all panels
        tabPanels.forEach(panel => {
            panel.classList.add('hidden');
        });

        // Activate the selected button
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const activePanel = document.getElementById(`panel-${tabId}`);

        if (activeButton && activePanel) {
            activeButton.classList.remove('text-gray-600', 'border-transparent');
            activeButton.classList.add('text-red-600', 'border-red-600');
            activeButton.setAttribute('aria-selected', 'true');

            // Show the active panel
            activePanel.classList.remove('hidden');

            // Apply dynamic grid for the active panel
            applyDynamicGrid(activePanel);

            // Update the main heading based on the active tab
            let newHeadingText = '';
            switch (tabId) {
                case 'hospital':
                    newHeadingText = 'Where you are treated matters – we make no compromises.';
                    break;
                case 'emergency':
                    newHeadingText = 'We don’t wait for help to arrive. We bring it to you.';
                    break;
                case 'care':
                    newHeadingText = 'Care doesn’t end at the hospital door – it travels with the patient.';
                    break;
                case 'information':
                    newHeadingText = 'Informed patients make safer choices.';
                    break;
                default:
                    newHeadingText = 'Our Patient Safety Measures'; // Default heading
            }
            if (tabContentHeading) {
                tabContentHeading.textContent = newHeadingText;
            }
        }
    };

    // Add click listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            activateTab(tabId);
        });
    });

    // Activate the first tab by default on page load
    if (tabButtons.length > 0) {
        activateTab(tabButtons[0].dataset.tab);
    }
});

    function showStep(stepNumber) {
        // Hide all step content
        document.querySelectorAll('.step-content').forEach(function (content) {
            content.classList.add('hidden');
        });

        // Deactivate all step buttons
        document.querySelectorAll('.step-btn').forEach(function (button) {
            button.classList.remove('active-step-btn'); // Assuming 'active-step-btn' is your active class
            button.classList.remove('border-[#E22026]'); // Remove active border
            button.classList.remove('bg-[#E22026]/10'); // Remove active background
            button.classList.add('border'); // Add default border
            button.classList.add('hover:bg-[#E22026]/10'); // Add hover background
            button.classList.add('text-gray-700'); // Set default text color
            button.classList.remove('text-[#E22026]'); // Remove active text color
        });

        // Show the selected step content
        document.getElementById('step-' + stepNumber).classList.remove('hidden');

        // Activate the selected step button
        const activeButton = document.getElementById('btn-' + stepNumber);
        activeButton.classList.add('active-step-btn'); // Add active class
        activeButton.classList.add('border-[#E22026]'); // Add active border
        activeButton.classList.add('bg-[#E22026]/10'); // Add active background
        activeButton.classList.remove('border'); // Remove default border
        activeButton.classList.remove('hover:bg-[#E22026]/10'); // Remove hover background
        activeButton.classList.remove('text-gray-700'); // Remove default text color
        activeButton.classList.add('text-[#E22026]'); // Set active text color
    }

    // Function to handle the "Open Patient Workflow" button click
    function openPatientWorkflow() {
        // Replace 'your-workflow-url.html' with the actual URL of your patient workflow
        window.open('./assets/patient-workflow.png', '_blank');
    }

    // Initialize by showing the first step and activating its button
    document.addEventListener('DOMContentLoaded', function () {
        showStep(1);
    });