var bigArray = [100,4,2,3,5,7,9,11,8,10,30,32,34,20,18,17,15,22,24,25,26,15];
var subArr = []; 
var reversedSubArr = [];

subArr[0] = bigArray[0]; //my subArr will, initially, contain the first element from bigArr
var j = 0;

for(var i=0; i<= bigArray.length-1; ++i)
{
    if ( subArr[0]  > bigArray[i]  ) subArr[0] = bigArray[i]; // if at some point while iterating the bigArray, I can find an element lower than subArr[0], reset the starting value of the subArr to it
    if ( bigArray[i] > subArr[j] ) {                          // if there is a number bigger than the maximum found until this point, push it.
        subArr.push( bigArray[i] );
        j++;
    }
    var c = find(subArr, 0, j, bigArray[i]);        // perform search operation in subArr 
    if (c !== false)  subArr[c] = bigArray[i];      // and after getting the result,start all over again
}

console.log("longest subsequence:  ",subArr);

                                            //reverse the longest found subsequence
for(var j = subArr.length -1; j >= 0; --j){  // Iterate the array containing the subsequence starting from end to beginning
    reversedSubArr.push(subArr[j]);          // and push all elements in the empty array 
}
console.log("reversed subsequence: ", reversedSubArr);

//recursive function
function find( arr, left, right,  x)
{
    if(left === right) return left;                                // if array contains only one element, return it
    if(left > right) return false;                                 // if the element in the left > the one in the right, stop here.      
    var mid = (left+right)/2;                                      // find the middle point of the array 
    if( arr[mid] < x && arr[mid+1] > x )  ++mid;                   // find in which half is situated the x, If it is bigger than the middle value, go to the right
    else if( arr[mid] > x ) return find(arr, left, mid, x);        // else,go to the left and keep searching in the first half of the array
    return find(arr, mid+1, right, x);                             // keep searching in the second half of the array
}
