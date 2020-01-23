
function update() {
    $('#clock').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
  
  setInterval(update, 1000);







