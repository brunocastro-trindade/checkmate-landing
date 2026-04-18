function scrollReveal() {

    const options = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });

}, options);

const elementos = document.querySelectorAll('.reveal');

elementos.forEach(function(el) {
    observer.observer(el);
});
}

document.addEventListener('DOMContentLoaded', scrollReveal);


function navbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

document.addEventListener('DOMContentLoaded', navbarScroll);


function hamburguerMenu() {
    const btn = document.getElementById('hamburguer');
    const menu = document.getElementById('mobileMenu');

    btn.addEventListener('click', function() {
        const isOpen = btn.classList.contains('open');

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
        const dentroDoMenu = menu.contains(e.target);
        const dentroDoBtn = btn.contains(e.target);
        if (!dentroDoMenu && !dentroDoBtn) {
      closeMenu();
    }
  });

  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');   // display: flex
    setTimeout(function() {
      menu.classList.add('visible'); // dispara transição de entrada
    }, 10);                         // pequeno delay para o display render
    btn.setAttribute('aria-label', 'Fechar menu');
  }

  function closeMenu() {
    btn.classList.remove('open');
    menu.classList.remove('visible');
    setTimeout(function() {
      menu.classList.remove('open'); // remove display após a transição
    }, 300);                          // aguarda 300ms (duração da transition)
    btn.setAttribute('aria-label', 'Abrir menu');
  }
}

document.addEventListener('DOMContentLoaded', hamburgerMenu);


/* =============================================
   CHECKMATE GESTÃO — app.js
   JavaScript principal da landing page
   ============================================= */

// Número do WhatsApp (troque pelo número real)
const WHATSAPP = '5547999999999';

/* -------------------------------------------
   1. NAVBAR — Efeito ao rolar
------------------------------------------- */
function navbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  });
}

/* -------------------------------------------
   2. MENU HAMBURGUER
------------------------------------------- */
function hamburgerMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return; // proteção caso não existam

  btn.addEventListener('click', function() {
    btn.classList.contains('open') ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');
    setTimeout(function() { menu.classList.add('visible'); }, 10);
    btn.setAttribute('aria-label', 'Fechar menu');
  }

  function closeMenu() {
    btn.classList.remove('open');
    menu.classList.remove('visible');
    setTimeout(function() { menu.classList.remove('open'); }, 300);
    btn.setAttribute('aria-label', 'Abrir menu');
  }
}

/* -------------------------------------------
   3. SCROLL REVEAL — IntersectionObserver
------------------------------------------- */
function scrollReveal() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
}

/* -------------------------------------------
   4. FORMULÁRIO DE CONTATO — WhatsApp
------------------------------------------- */
function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name    = document.getElementById('name').value;
    const phone   = document.getElementById('whatsapp').value;
    const service = document.getElementById('service').value;
    const msg     = document.getElementById('message').value;

    const text = `Olá! Vim pelo site.
Nome: ${name}
WhatsApp: ${phone}
Interesse: ${service || 'Não informado'}
${msg ? 'Mensagem: ' + msg : ''}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  });
}

/* -------------------------------------------
   5. INICIALIZAÇÃO
   Tudo começa depois do DOM estar pronto
------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  navbarScroll();
  hamburgerMenu();
  scrollReveal();
  contactForm();
});