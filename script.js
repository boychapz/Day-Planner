
function update() {
    $('#clock').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
  
  setInterval(update, 1000);
  
  var store5 = $("#input5");
  var renderText = $("#store");


    renderLastRegistered();

    function renderLastRegistered() {
        var store5 = localStorage.getItem('id');
      
        if (store5 === null) {
          return;
        }
      
        renderText.attr("value", store5);
        
      }

    $('#btn5').on('click', function(event){
        event.preventDefault();
       
        var inputEl = $('#input5').val();
        $('#input5').text(inputEl);
        console.log(inputEl);

        $('input[type="text"]').each(function(){   
            $(this).addClass('red'); 
            var id = $(this).attr('id');
            var value = $(this).val();
           localStorage.setItem(id, value);
           renderLastRegistered();
           
           
    
        });           


    });
    
    





