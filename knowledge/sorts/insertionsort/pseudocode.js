function insertionSort(array) {
	// Loop through each element
	// store the current item value so it can be placed correctly
	// in the sorted portion of the array
	// Loop backward through the sorted portion of the array
	// and scoot everything over until you find the right place to
	// insert the value you're working with
	// Copy each item to the next slot over, as long as the value is smaller
	// than the item in the sorted array we're looking at (items[j] > value)
	// We can now insert the item in its sorted location
	// Remember to return the list!
}

console.log(insertionSort([12, 6, 3, 7, 13, 8]));
//should return [3,6,7,8,12,13]
