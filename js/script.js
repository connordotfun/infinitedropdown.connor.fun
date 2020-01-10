$(document).ready(function(){
    var incr=0;

    function addDropdown(){
        //var target=$(this).find(":selected").attr("data-target");
        //var id=$(this).attr("id");
        //$("div[id^='"+id+"']").hide();
        //$("#"+id+"-"+target).show();

        var name = $("<div/>",{"text":'imamoron',"test":"name","class":"test"});

        var select = $("<select/>", {"name":"customname" , "class":"custom"+incr});
        var option1 = $("<option/>", {"class":'option'+incr, "text":"testtext"+incr});
        $("body").append(option1);  

        var option2 = $("<option/>", {"class":'option'+incr, "text":"11testtext"+incr});
        $("body").append(option2);

        $('.option'+incr).wrapAll(select)
        $(".custom"+incr).wrap("<div class='cool'> </div>")
        
        $("body").append("TEST");   
        incr++;
    }

    $(document).on('change', addDropdown);
    
});