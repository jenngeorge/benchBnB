
export const fetchBenches = function(success, filters){
   $.ajax({
     method: 'GET',
     url: 'api/benches',
     success,
     filters, 
     error: () => console.log('error')
   });
 };
