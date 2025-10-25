------------ Search Bar as user type -----------
1. uses debouncing to limit the network call every user keystroke
2. uses full text search (ts_vector ) and GIN_index for matching the query with data in the  database
3. server component is used to retrive the data directly from database

   upgrade requires for next version
   -catching
   - i will be using reactquery and handle search functionality in client component cause i will add user interactivity too.
