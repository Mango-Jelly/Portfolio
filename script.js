// ===== Mobile menu =====
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
    });

    links.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===== Nav border on scroll =====
const nav = document.querySelector('.nav');
const onScroll = () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Active link tracking =====
const sections = document.querySelectorAll('main section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && navLinks.length) {
    const spy = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) =>
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
                );
            });
        },
        { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => spy.observe(section));
}

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
    '.work-item, .exp-item, .about-grid, .skills, .section-head'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                obs.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// ===== Rotating about facts =====
document.querySelectorAll('.rotate[data-rotate]').forEach((el, i) => {
    let items;
    try {
        items = JSON.parse(el.dataset.rotate);
    } catch {
        return;
    }
    if (!Array.isArray(items) || items.length < 2) return;

    let index = 0;
    // Stagger the two rotators so they don't flip in unison
    setTimeout(() => {
        setInterval(() => {
            index = (index + 1) % items.length;
            el.classList.add('rotate-out');
            setTimeout(() => {
                el.innerHTML = items[index];
                el.classList.remove('rotate-out');
            }, 350);
        }, 3600);
    }, i * 1800);
});

// ===== Custom cursor =====
const finePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (finePointer && !reducedMotion) {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        document.body.classList.add('cursor-ready');
    });

    // Ring eases toward the pointer for a trailing effect
    const animateRing = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    // Grow over interactive elements
    const interactive = 'a, button, .work-item, .exp-item, .skill-group';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactive)) ring.classList.add('hovering');
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactive)) ring.classList.remove('hovering');
    });

    document.addEventListener('mousedown', () => ring.classList.add('pressing'));
    document.addEventListener('mouseup', () => ring.classList.remove('pressing'));

    document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-ready'));
    document.addEventListener('mouseenter', () => document.body.classList.add('cursor-ready'));
}

