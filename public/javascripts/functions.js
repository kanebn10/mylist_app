$(document).ready(function(){
    
    $('span :checkbox[id="1"], span :checkbox[id="2"], span :checkbox[id="3"]').click(function(){
        
        $('span#' +$(this).attr("id")).addClass("hidden");
    });
});