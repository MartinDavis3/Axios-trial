axios.get( './data/my-info.json' )
     .then( response => {
         myResponseData = response.data;
         console.log( myResponseData );
     } );