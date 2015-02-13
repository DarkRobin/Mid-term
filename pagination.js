(function($){

       $.fn.customPaginate = function(options)
       {
        console.log("runnnnn")
           var paginationContainer = this;
           var itemsToPaginate;
           console.log(paginationContainer)
           
            
           var defaults = {
       
                itemsPerPage : 2
           
           };
        
           var settings = {};
        
           $.extend(settings, defaults, options);
           
           var itemsPerPage = settings.itemsPerPage;
           console.log(itemsPerPage)
        
           itemsToPaginate = $(settings.itemsToPaginate);
           console.log(itemsToPaginate)
           var numberOfPaginationLinks = Math.ceil((itemsToPaginate.length / itemsPerPage));
        
           $("<ul></ul>").prependTo(paginationContainer);
           
           for(var index = 0; index < numberOfPaginationLinks; index++)
           {
                paginationContainer.find("ul").append("<li>"+ (index+1) + "</li>");
           }
           
           itemsToPaginate.filter(":gt(" + (itemsPerPage - 1)  + ")").hide();
           
           paginationContainer.find("ul li").on('click', function(){
           
               var linkNumber = $(this).text();
               
                var itemsToHide = itemsToPaginate.filter(":lt(" + ((linkNumber-1) * itemsPerPage)  + ")");
                $.merge(itemsToHide, itemsToPaginate.filter(":gt(" + ((linkNumber * itemsPerPage) - 1)  + ")"));
                itemsToHide.hide();
                
                var itemsToShow = itemsToPaginate.not(itemsToHide);
                itemsToShow.show();
           });
           
       }
            
})(jQuery);