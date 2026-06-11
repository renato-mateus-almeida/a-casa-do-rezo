/* ===================================================== */
/* CASA DO REZO — SCRIPT                                  */
/* ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('current-year').textContent = new Date().getFullYear();

    /* --------------------------------------------------- */
    /* DOM REFERENCES                                      */
    /* --------------------------------------------------- */

    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.header__menu a');
    const sections = document.querySelectorAll('section[id]');

    /* --------------------------------------------------- */
    /* HEADER SCROLL EFFECT                                */
    /* --------------------------------------------------- */

    function onScroll() {
        const scrollY = window.scrollY;
        const threshold = 60;

        if (scrollY > threshold) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* --------------------------------------------------- */
    /* MOBILE MENU TOGGLE                                  */
    /* --------------------------------------------------- */

    function openMenu() {
        nav.classList.add('header__nav--open');
        burger.classList.add('header__burger--active');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Fechar menu');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('header__nav--open');
        burger.classList.remove('header__burger--active');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Abrir menu');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (nav.classList.contains('header__nav--open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    burger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    /* Close menu on Escape key */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
            closeMenu();
            burger.focus();
        }
    });

    /* Close menu when clicking overlay background (outside nav links) */
    nav.addEventListener('click', (e) => {
        if (e.target === nav) {
            closeMenu();
        }
    });

    /* --------------------------------------------------- */
    /* SMOOTH SCROLL (fallback & active link)               */
    /* --------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const headerHeight = header.offsetHeight + 24;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        });
    });

    /* --------------------------------------------------- */
    /* ACTIVE NAV LINK (Intersection Observer)              */
    /* --------------------------------------------------- */

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const id = entry.target.getAttribute('id');
            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        });
    }, observerOptions);

    sections.forEach(section => navObserver.observe(section));

    /* --------------------------------------------------- */
    /* SCROLL REVEAL ANIMATIONS                              */
    /* --------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        '.section-header, .essencia__grid, .produto-card, .contato__grid, .footer__grid'
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-reveal--visible', 'anim-fade--visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.1,
        }
    );

    revealElements.forEach((el) => {
        el.classList.add('anim-reveal');
        revealObserver.observe(el);
    });

    /* Hero content — fade in on load */
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.classList.add('anim-fade');
        requestAnimationFrame(() => {
            heroContent.classList.add('anim-fade--visible');
        });
    }

    /* --------------------------------------------------- */
    /* FORM VALIDATION                                      */
    /* --------------------------------------------------- */

    const contactForm = document.querySelector('.contato__form');
    if (!contactForm) return;

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const mensagemInput = document.getElementById('mensagem');

    function showError(input, message) {
        const group = input.closest('.form-group');
        const errorEl = group.querySelector('.form-group__error');

        group.classList.remove('form-group--valid');
        group.classList.add('form-group--error');
        errorEl.textContent = message;
    }

    function showValid(input) {
        const group = input.closest('.form-group');
        const errorEl = group.querySelector('.form-group__error');

        group.classList.remove('form-group--error');
        group.classList.add('form-group--valid');
        errorEl.textContent = '';
    }

    function clearValidation(input) {
        const group = input.closest('.form-group');
        group.classList.remove('form-group--error', 'form-group--valid');
        const errorEl = group.querySelector('.form-group__error');
        errorEl.textContent = '';
    }

    function validateNome() {
        const value = nomeInput.value.trim();
        if (!value) {
            showError(nomeInput, 'Por favor, informe seu nome completo.');
            return false;
        }
        if (value.length < 3) {
            showError(nomeInput, 'O nome deve ter pelo menos 3 caracteres.');
            return false;
        }
        showValid(nomeInput);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (!value) {
            showError(emailInput, 'Por favor, informe seu e-mail.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, 'Por favor, informe um e-mail válido.');
            return false;
        }
        showValid(emailInput);
        return true;
    }

    function validateTelefone() {
        const value = telefoneInput.value.trim();
        if (!value) {
            showError(telefoneInput, 'Por favor, informe seu telefone.');
            return false;
        }
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) {
            showError(telefoneInput, 'Informe um telefone válido (mínimo 10 dígitos).');
            return false;
        }
        showValid(telefoneInput);
        return true;
    }

    function validateMensagem() {
        const value = mensagemInput.value.trim();
        if (!value) {
            showError(mensagemInput, 'Por favor, escreva sua mensagem.');
            return false;
        }
        if (value.length < 10) {
            showError(mensagemInput, 'A mensagem deve ter pelo menos 10 caracteres.');
            return false;
        }
        showValid(mensagemInput);
        return true;
    }

    /* Live validation on blur */
    nomeInput.addEventListener('blur', validateNome);
    emailInput.addEventListener('blur', validateEmail);
    telefoneInput.addEventListener('blur', validateTelefone);
    mensagemInput.addEventListener('blur', validateMensagem);

    /* Clear error on input */
    nomeInput.addEventListener('input', () => clearValidation(nomeInput));
    emailInput.addEventListener('input', () => clearValidation(emailInput));
    mensagemInput.addEventListener('input', () => clearValidation(mensagemInput));

    /* Telefone mask + clear validation (single listener) */
    telefoneInput.addEventListener('input', () => {
        clearValidation(telefoneInput);

        const cursor = telefoneInput.selectionStart;
        const lengthBefore = telefoneInput.value.length;

        let value = telefoneInput.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2 && value.length <= 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 6 && value.length <= 10) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else if (value.length > 10) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        } else if (value.length === 2) {
            value = `(${value}`;
        }

        telefoneInput.value = value;

        const lengthAfter = value.length;
        const newCursor = cursor + (lengthAfter - lengthBefore);
        telefoneInput.setSelectionRange(newCursor, newCursor);
    });

    /* Submit handler */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isTelValid = validateTelefone();
        const isMsgValid = validateMensagem();

        if (isNomeValid && isEmailValid && isTelValid && isMsgValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            /* Simulate async submission — replace with real API call */
            setTimeout(() => {
                contactForm.reset();
                contactForm.querySelectorAll('.form-group').forEach(g => {
                    g.classList.remove('form-group--valid', 'form-group--error');
                });

                submitBtn.textContent = 'Mensagem Enviada!';
                submitBtn.classList.add('btn-primary--success');

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('btn-primary--success');
                }, 3000);
            }, 1200);
        } else {
            /* Focus first invalid field */
            const firstError = contactForm.querySelector('.form-group--error input, .form-group--error textarea');
            if (firstError) firstError.focus();
        }
    });
});
