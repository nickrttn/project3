// Bron: https://stackoverflow.com/questions/30966415/how-to-create-an-arcade-style-name-input-in-javascript/30966770#30966770
$(document).ready(function(){

  // Name picker script
  $(function(){
    $(document).on("keydown",function(ev){
      ev.preventDefault();
      if(ev.keyCode==37){
        var idx=$('.active').index();
        var next_idx=(+idx + 1) % $('.cyclic_input').length;
        $('.active').removeClass('active');
        $('.cyclic_input').eq(next_idx).addClass('active');
      }
      if(ev.keyCode==39){
        var idx=$('.active').index();
        var next_idx=((+idx)+$('.cyclic_input').length) % $('.cyclic_input').length;
        $('.active').removeClass('active');
        $('.cyclic_input').eq(next_idx).addClass('active');
      }

      if(ev.keyCode==40){
        var char = $(".active").text();
        var ascii=char.charCodeAt(0);
        var nextAscii=65 + (ascii + 1 -65) % 26;
        $(".active").text(String.fromCharCode(nextAscii));
      }
      if(ev.keyCode==38){
        var char = $(".active").text();
        var ascii=char.charCodeAt(0);
        var nextAscii=65 + ((ascii - 1 -65)+26) % 26;
        $(".active").text(String.fromCharCode(nextAscii));
      }
    });
  });

  $(function(){
    $('#new_user').submit(function(){
      var name = $('.l1').text() + $('.l2').text() + $('.l3').text();
      console.log(name);
      $('#user_name').val(name);
    })
  });

  // The actual game
  // Bronnen: https://stackoverflow.com/questions/7686197/how-can-i-avoid-autorepeated-keydown-events-in-javascript
  //          https://stackoverflow.com/questions/3149362/capture-key-press-or-keydown-event-on-div-element
  //          https://github.com/mrchimp/tock#how-do-i-use-it

  $(function(){
    $('.game').focus();

    // Deal with time
    var timer = new Tock();

    // Deal with keypresses
    var keyAllowed = {};

    $('.game').keydown(function(e) {
      if (keyAllowed [e.keyCode] === false) return;
      keyAllowed [e.keyCode] = false;
      console.log(e.keyCode);
    });

    $('.game').keyup(function(e) {
      keyAllowed [e.keyCode] = true;
    });

    $('.game').focus(function(e) {
      keyAllowed = {};
    });

    $('.start').on('click', function(){
      console.log('klik');
      timer.start($('#clock').val());
    })

  });
});
