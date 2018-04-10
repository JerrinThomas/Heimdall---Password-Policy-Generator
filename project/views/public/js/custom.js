$(document).ready(function(){
    $('.button-collapse').sideNav();
  }); 

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

function drop() {
    var id = document.getElementById("profile-dropdown");
    if (id.style.display == "block") {
        id.style.display = "none";
    } else {
        id.style.display = "block";
    }

}

function chng(a) {
    var n = document.getElementsByClassName("a_clr");
    var i;
    for (i = 0; i < n.length; i++) {
        var j = n[i];
        if (j.classList.contains('slct')) {
            j.classList.remove('slct');
        }
    }
    var n = document.getElementsByClassName("lg");
    var i;
    for (i = 0; i < n.length; i++) {
        var j = n[i];
        if (j.classList.contains('lg_white')) {
            j.classList.remove('lg_white');
        }
    }
    if (a === 1) {
        document.getElementById("s1").classList.toggle("slct");
        document.getElementById("l1").classList.toggle("lg_white");
    } else if (a === 2) {
        document.getElementById("s2").classList.toggle("slct");
        document.getElementById("l2").classList.toggle("lg_white");
    } else if (a === 3) {
        document.getElementById("s3").classList.toggle("slct");
        document.getElementById("l3").classList.toggle("lg_white");
    } else {
        document.getElementById("s4").classList.toggle("slct");
        document.getElementById("l4").classList.toggle("lg_white");
    }
}

