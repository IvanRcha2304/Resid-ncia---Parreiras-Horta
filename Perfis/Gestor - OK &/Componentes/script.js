<<<<<<< HEAD
// Captura a posição de rolagem
let scrollX, scrollY;

window.addEventListener('scroll', () => {
  scrollX = window.scrollX;
  scrollY = window.scrollY;
});

// Aplica a função a todos os links <a> para abrir o link na mesma página
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão
    const url = link.href; // Pega o URL do link

    // Salva a posição de rolagem antes de abrir o novo conteúdo
    sessionStorage.setItem('scrollX', scrollX);
    sessionStorage.setItem('scrollY', scrollY);

    // Redireciona para a nova página
    window.location.href = url;
  });
});

// Ao carregar a nova página, restaura a rolagem
window.addEventListener('load', () => {
  if (sessionStorage.getItem('scrollX') && sessionStorage.getItem('scrollY')) {
    window.scrollTo(
      sessionStorage.getItem('scrollX'),
      sessionStorage.getItem('scrollY')
    );
  }
});
=======
// Captura a posição de rolagem
let scrollX, scrollY;

window.addEventListener('scroll', () => {
  scrollX = window.scrollX;
  scrollY = window.scrollY;
});

// Aplica a função a todos os links <a> para abrir o link na mesma página
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão
    const url = link.href; // Pega o URL do link

    // Salva a posição de rolagem antes de abrir o novo conteúdo
    sessionStorage.setItem('scrollX', scrollX);
    sessionStorage.setItem('scrollY', scrollY);

    // Redireciona para a nova página
    window.location.href = url;
  });
});

// Ao carregar a nova página, restaura a rolagem
window.addEventListener('load', () => {
  if (sessionStorage.getItem('scrollX') && sessionStorage.getItem('scrollY')) {
    window.scrollTo(
      sessionStorage.getItem('scrollX'),
      sessionStorage.getItem('scrollY')
    );
  }
});
>>>>>>> b6d9132 (.)
