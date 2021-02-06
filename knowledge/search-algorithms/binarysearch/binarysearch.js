// WE DON'T WANT TO DO A LINEAR SEARCH WITH A LARGE INPUT SIZE BECAUSE IT WILL TAKE FOREVER
function linearSearch(arr, target) {
	let i = 0;

	while (i < arr.length) {
		if (arr[i] === target) {
			return `Number ${target} was found at ${i}`;
		}
		i++;
	}
    
	return `Number ${target} was not found`;
}

// we are looking for the position/location not the actual number so that is what guess is
function binarySearch(arr, target) {
    // 1. set our minimum to be 0 (start of the array)
	let min = 0;
    // 2. set our maximum to be the end of the array (array.length - 1)
	let max = arr.length - 1;
    // 3. create guess variable
    // 4. create a while loop and each time we run the loop do the following
    let guess;
    // i IS JUST TO VISUALIZE HOW MANY TIMES THE LOOP RUNS
	let i = 0;
	while (max > min) {
        i++;
		console.log('i:', i);
        // 5. set the guess to be the middle of the array (average of min and max rounded down(so that we know its an integer))
		guess = Math.floor((max + min) / 2);
        // 6. if we hit the target with our guess return the guess
		if (arr[guess] === target) {
            // return `Target ${target} is at position ${guess}`;
            return guess
            // 7. if the guess is too low raise the minimum (set minimum to guess)
		} else if (arr[guess] < target) {
            min = guess + 1;
		} else if (arr[guess] > target) {
            // 8. if the guess is too high lower the maximum (set maximum to guess)
			max = guess - 1;
		}
        // 9. after minimum or maximum are raised start loop again
	}
    // 10. if our mimumum and maximum overlap (min > max) return -1 and stop
	return -1;
}
