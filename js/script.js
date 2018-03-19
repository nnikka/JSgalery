$(document).ready(function(){
    $('nav a').on('click', function(){
        //current class assigmant//
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //set heading text
        $('h1#heading').text($(this).text());
        
        //get filter link tezt
        var category = $(this).text().toLowerCase().replace(' ','-');
        
        //remove hidden class id 'all-projects' is selected
        if(category == "all-projects") {
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)){
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        //stop link bahaviour
        return false;
    });
    
    //mouse entet
    $('ul#gallery li').on('mouseenter',function(){
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');
        
        //validation
        if(desc == null){
            desc = 'Click To Enlarge';
        }
        
        if(title == null){
            title='';
        }
        
        // Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay');
        
        //add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
        
        //fade in and overlay
        overlay.fadeIn(800);
    });
    
    //mouseleave overlay
    $('ul#gallery li').on('mouseleave',function(){
       // Create overlay div
        $(this).append('<div class="overlay"></div>');
        
        //get the overlay div
        var overlay = $(this).children('.overlay'); 
        
        //fade in out overlay
        overlay.fadeOut(800);
    });
});