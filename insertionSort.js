// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


const insertionSort = function(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        let current = arr[i];
        let j = i - 1;

        while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
};

console.log(insertionSort(arr1));
// [ 2,  4,  6,  7,  8, 23, 34, 45, 54, 77, 78, 99, 567 ]

console.log(insertionSort(arr2));
// [ 3,  4, 12, 34, 45, 56, 58, 65, 68, 90, 98 ]