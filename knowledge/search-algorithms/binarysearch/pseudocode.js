// arr ARRAY OF INPUTS
// n NUMBER OF ELEMENTS IN THE ARRAY
// target THE NUMBER BEING SEARCHED FOR

// PSEUDOCODE

function binarySearch(arr, element) {
	// 1. let min = 0 and max = n - 1
	// 2. If max < min, stop because target is not present in array, Return -1
	// 3. Create guess as the average of max and min (round down it is an integer)
	// 4. If arr[guess] equals target, stop and Return guess
	// 5. If the guess was too low (array[guess] < target), set min = guess + 1
	// 6. If the guess was too high set max = guess - 1
	// 7. Go back to step 2
}

function recursiveBinarySearch(arr, element, left, right) {
	//  search through the array recursively for the element
	//  you may need to add some default parameters to this function!
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
}
