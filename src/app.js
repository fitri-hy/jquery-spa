$(document).ready(function () {
  $.getScript('src/routes/web.js', function () {
    $.getScript('src/components/header.js', function () {
      $.getScript('src/components/footer.js', function () { 

        function loadComponent(name) {
          $('#page-content').html('Loading...');
          $.getScript(`src/pages/${name}.js`).fail(() => loadComponent('404'));
        }

        function router() {
          const path = window.location.hash.slice(1) || '/home';
          const page = window.ROUTES[path] || '404';
          loadComponent(page);
		  
          $('a').removeClass('text-blue-600 font-semibold');
          $(`a[href="/#${path}"]`).addClass('text-blue-600 font-semibold');
        }
        $(window).on('hashchange', router);
        router();
		
      });
    });
  });
});
