       $(document).ready(function(){

       	$('#searchForm').submit(function(e){
       	   e.preventDefault();
           var searchTerm = $('#search').val().toLowerCase();
           var $results = $('#results');

          
           var $url = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm+ "&limit=10";
           
           $.getJSON( $url, function(data){
            console.log(data);
            console.log(data[1][0]);
          
            var output = '<ul>';
            $.each(data[1], function(key, val) {
              output += '<a href="' + data[3][key] + '" target="_blank">';
              output += '<li>';
              output += '<h3>' + data[1][key] + '</h3>';
              output += '<p>'  + data[2][key] + '</p>';
              output += '</li>';
              output += '</a>';
            }); // each loop

            output += '</ul>';
            $('#results').html(output);
        	
        	}); // getJSON
      	}); // searchform submit
      
       }); // document ready
        
 
  
          
