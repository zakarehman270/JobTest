// Question 1:
function sortDescending(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let array1 = [33, 21, 7, 41, 62, 9];
console.log(sortDescending(array1));

// Question 2:
function isPalindrome(str) {
    str = str.toLowerCase();
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedStr += char;
        }
    }
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("doctor"));
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("No 'x' in Nixon")); 
// Question 3:
function sumOfTwoLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }
    let largest = arr[0];
    let secondLargest = arr[1];
    if (secondLargest > largest) {
        let temp = largest;
        largest = secondLargest;
        secondLargest = temp;
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return largest + secondLargest;
}
let array2 = [3, 7, 1, 5, 11, 19];
console.log(sumOfTwoLargest(array2));

// Question 4:
function findMissingElements(arr) {
    if (arr.length === 0) {
        return [];
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let present = new Array(max + 1).fill(false);
    for (let i = 0; i < arr.length; i++) {
        present[arr[i]] = true;
    }
    let missingElements = [];
    for (let i = 0; i <= max; i++) {
        if (!present[i]) {
            missingElements.push(i);
        }
    }

    return missingElements;
}
let array3 = [3, 4, 9, 1, 7, 3, 2, 6];
console.log(findMissingElements(array3));
// Question 5:
function mostRepeatedElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (frequency[num] === undefined) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }
    let mostRepeated = arr[0];
    let maxCount = frequency[mostRepeated];
    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            mostRepeated = parseInt(num);
            maxCount = frequency[num];
        }
    }

    return `${mostRepeated} is repeated ${maxCount} times`;
}
let array4 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(mostRepeatedElement(array4));
// Question 6:
function rotateRight(arr) {
    if (arr.length === 0) {
        return [];
    }
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;

    return arr;
}
let array6 = [3, 8, 9, 7, 6];
console.log(rotateRight(array6));
