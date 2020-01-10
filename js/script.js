$(document).ready(function(){
    var incr=0;

    $('select').on('change', function() {
        var target=$(this).find(":selected").attr("data-target");
        var id=$(this).attr("id");
        $("div[id^='"+id+"']").hide();
        $("#"+id+"-"+target).show();

        var name = $("<div/>",{"text":'imamoron',"test":"name","class":"test"
});
        //$("body").append(name);   

        var select = $("<select/>", {"name":"customname" , "class":"custom"+incr});
        var option = $("<option/>", {"class":'option'+incr, "text":"testtext"+incr});
        
        $("body").append(option);   

        $('.option'+incr).wrap(select)
        $(".custom"+incr).wrap("<div class='cool'> </div>")
        


        var new_dd=""
        $("body").append("TEST");   
        incr++;
    });
    
});