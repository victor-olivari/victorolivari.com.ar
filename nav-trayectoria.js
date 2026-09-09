(function () {
  function addTrayectoriaLink(nav) {
    if (nav.querySelector('a[href="/trayectoria"]')) return;
    var contact = nav.querySelector('a[href="/contacto"]');
    if (!contact) return;
    var link = document.createElement('a');
    link.href = '/trayectoria';
    link.textContent = 'Trayectoria';
    if (location.pathname.replace(/\/$/, '') === '/trayectoria') {
      link.setAttribute('aria-current', 'page');
    }
    contact.before(link);
  }

  document.querySelectorAll('.desktop-links, .mobile-links').forEach(addTrayectoriaLink);
})();
