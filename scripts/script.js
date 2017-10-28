       $(document).ready(function(){

       	$('#searchForm').submit(function(e){

       	   e.preventDefault();
           var searchTerm = $('#search').val();
          
           var $results = $('#results');

           $results.html('Wikipedia results for ' + searchTerm + ' are:' );

           var $url = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm+ "&limit=10";
           
           $.getJSON( $url, function(data){
        	console.log(data);
        	});
      	});
     

       });
        
 
  
          
