$(document).ready(function(){
    var incr=0;

    function addDropdown(){

        var name = $("<div/>",{"text":'imamoron',"test":"name","class":"test"});

        var select = $("<select/>", {"name":"customname" , "class":"custom"+incr});

        // this is like the worst code I've written in my life
        // I'd like to take this opportunity to apologize to my mom and to god

        if (incr==0){
            var option1 = $("<option/>", {"class":'option'+incr, "text":"imgay"+incr});
            $("body").append(option1);  

            var option2 = $("<option/>", {"class":'option'+incr, "text":"11testtext"+incr});
            $("body").append(option2);
        }
        else{
            var option1 = $("<option/>", {"class":'option'+incr, "text":"testtext"+incr});
            $("body").append(option1);  

            var option2 = $("<option/>", {"class":'option'+incr, "text":"11testtext"+incr});
            $("body").append(option2);
        }
        

        $('.option'+incr).wrapAll(select)
        $(".custom"+incr).wrap("<div class='cool'> </div>")
        
        incr++;
    }

    $(document).on('change', addDropdown);
    
});