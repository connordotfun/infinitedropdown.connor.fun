$(document).ready(function(){
    var incr=0;
    
    //words = require('./words').arr;
    function addDropdown(){

        var name = $("<div/>",{"text":'imamoron',"test":"name","class":"test"});

        var select = $("<select/>", {"name":"customname" , "class":"custom"+incr});

        // this is like the worst code I've written in my life
        // I'd like to take this opportunity to apologize to my mom and to god
        var yeet= 'yeet';

        if (incr==0){
            var option1 = $("<option/>", {"class":'option'+incr, "text":"Pick a Smell" });
            $("body").append(option1);  

            var option2 = $("<option/>", {"class":'option'+incr, "text":"cinnamon rolls" });
            $("body").append(option2);

            var option2 = $("<option/>", {"class":'option'+incr, "text":"baked potatoes" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"putrid meat" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"peppermint" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"raging fires" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"lavender" });
            $("body").append(option2);

        }
        if (incr==1){
            var option1 = $("<option/>", {"class":'option'+incr, "text":"Pick a Sensation" });
            $("body").append(option1);  

            var option2 = $("<option/>", {"class":'option'+incr, "text":"warmth" });
            $("body").append(option2);
            // I realized halfway through I never changed the option 2 but it works so I'm not changing it
            var option2 = $("<option/>", {"class":'option'+incr, "text":"stretch" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"caress" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"burning" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"pain" });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":"agony" });
            $("body").append(option2);

        }
        else{
            // todo: put at a random place
            var option1 = $("<option/>", {"class":'option'+incr, "text":"Pick a Thing" });
            $("body").append(option1);  

            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2); 

            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2);
            
            var option2 = $("<option/>", {"class":'option'+incr, "text":words[Math.floor(Math.random() *  9898)] });
            $("body").append(option2);             

        }

        $('.option'+incr).wrapAll(select)

        if (incr>6){
            var top = Math.floor(Math.random() * window.innerHeight);
            var left = Math.floor(Math.random()* window.innerWidth);
            $(".custom"+incr).wrap("<div class='"+yeet+"' style=\"top: "+top+"px; left: "+left+"px; position:fixed\"> </div>");
        }
        else{
            $(".custom"+incr).wrap("<div class='cool'> </div>");
        }
        
        incr++;
    }

    $(document).on('change', addDropdown);
    
});
