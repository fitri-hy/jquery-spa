$(document).ready(function () {
  $('#app').html(`
    <div id="layout">
      <header class="fixed top-0 z-50 w-full p-4 items-center bg-white flex gap-4 justify-between shadow">
        <a href="/">
          <img class="h-6 w-auto" src="/assets/images/logo.png" alt="logo">
        </a>
        <nav class="flex gap-4 items-center">
          <a href="/#/home">Home</a>
          <a href="/#/about">About</a>
        </nav>
      </header>
      <main id="page-content">Loading...</main>
    </div>
  `);
});
