(function($){
    
    $(document).ready(function(){
    	console.log('runn')
    
        $(".pagination").customPaginate({
        
            itemsToPaginate : ".tablerows"
        
        });
    
    });
    
})(jQuery);