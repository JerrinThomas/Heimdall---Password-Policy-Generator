(function ($) {
    $(function () {

        //initialize all modals           
        $('.modal').modal();

        //now you can open modal from code
        //$('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();

    }); // end of document ready
})(jQuery);

function count(){
    var val = document.getElementById('password').value;
    if(val.length<7){
        document.getElementById('pd_1').innerHTML = "Password (min 7 character)";
        document.getElementById('pd_1').style.color = "red";
    }
    else{
        document.getElementById('pd_1').innerHTML = "Password";
        document.getElementById('pd_1').style.color = "#26a69a";
    }
}