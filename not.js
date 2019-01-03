   console.log("connected0");
   $(document).ready(function () {

        // ANIMATEDLY DISPLAY
        $('#noti_Counter')
            .css({ opacity: 0 })
            .text('7')  
            .css({ top: '-10px' })
            .animate({ top: '-2px', opacity: 1 }, 500);

        $('#noti_Button').click(function () {

            // TOGGLE (SHOW OR HIDE) 
            $('#notifications').fadeToggle('fast', 'linear', function () {
                if ($('#notifications').is(':hidden')) {
                    $('#noti_Button').css('background-color', '#000');
                }
                // CHANGE BACKGROUND COLOR OF THE BUTTON.
                else $('#noti_Button').css('background-color', '#FFF');
            });

            $('#noti_Counter').fadeOut('slow');     // HIDE THE COUNTER.

            return false;
        });

       
    });