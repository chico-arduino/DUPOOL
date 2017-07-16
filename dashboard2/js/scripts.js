$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

  fetch('http://localhost:8000/api/leads', {
  	method: 'GET'
  })
  .then(response.json())
  .then((json) => {
  	console.log(json)
  })
});