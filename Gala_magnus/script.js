const nav = document.querySelector('nav');
const frontSection = document.querySelector('.front-section');

const frontSectionOptions = {
    rootMargin: '-45px 0px 0px 0px'
};

const frontSectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('nav-past');
        } else {
            nav.classList.remove('nav-past');
        }
    });
    }, frontSectionOptions);


frontSectionObserver.observe(frontSection);