$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    console.log('loaded');
    $('#email-form-alert').hide();
    $('#bug-form-alert').hide();
    
    //mailing list form validation before sending to infusionsoft
    $("#email-submit-button").click(function(event){
      
      var name = $('#inf_field_FirstName').val();
      var email = $('#inf_field_Email').val();

      if(
        name === '' || email === ''
      ){
        event.preventDefault();
        $('#email-form-alert').show();
        console.log('no info submited');
      }else{
        $('#email-form').submit();
      }
    });
    
    //bug report form validation before sending to infustionsoft
    
    $("#bug-form-submit-button").click(function(event){
      
      var bname = $('#inf_field_FirstName2').val();
      var bemail = $('#inf_field_Email2').val();
      var bcomment = $('#inf_custom_Comment').val();
      
      if(
        bname === '' || bemail === '' || bcomment === ''
      ){
        event.preventDefault();
        $('#bug-form-alert').show();
        console.log('no info submited');
      }else{
        $('#bug-form').submit();
      }
    });
});