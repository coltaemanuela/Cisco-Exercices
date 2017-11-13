function result (array1, array2, givenNumber) {
    var map2 = {};  
    /* map2 is gonna be a map between the value of the elements from the second array and their indexes:            
       e.g: for the array  [-2, 0, 3, 4, 7, 8, 9, 23, 24], 
                    map2 will be: "-2": 0,  "0": 1,  ...,"24": 8  */            
     
    //  iterate the second array just once and, then, using this map2, check if the other term exists
    for (var j = 0; j < array2.length; ++j) {        
        map2[array2[j]] = j;// Build the map with the general format <value>: <index>
    }    
   
    for (var i = 0; i < array1.length; ++i) {  // Iterate the first array
        var b = givenNumber - array1[i];        // `b` is the number I need.                                 
        if (map2[b]) {                          // If it exists in `map2`, I found the solution
            console.log('The given number, '+ givenNumber+', is the sum of the elements identified by the indices ',i +' , respectively '+ map2[b]);
            return [i, map2[b]];
        }
    }
}
//call the function result() with its 3 parameters: array1, array2 and a given number. Here, I will hardcode them for the purpose pf testing
result( [0, 1, 2, 3, 4, 7, 8, 9,  23, 24, 42], [-2, 0, 3, 4, 7, 8, 9, 23, 24],   14);

/*-------------------------------------Q3B---Complexity description ---------------------------------------------------

    For the implementation of the solution with 2 sorted arrays, I iterated both of the arrays, but NOT in nested fors, 
    which means that the complexity is not O(N^2), but is less: 2 O(N). 
    I have 2 linear searches. Each loop has the O(N) comeplexity - is executed in n time.
    N is equal to the dimension of the array.

---------------------------------------------------------------------------------------------------------------------*/