// 28) Find the missing number from sorted array with O(n) complexity  :: need to undertstand completely>

let array28 = [1,2,3,4,6,7,8,9];

function findMissingNumberSorted(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the missing element is on the left or right side
        if (arr[mid] !== mid + 1) {
            if (mid === 0 || arr[mid - 1] === mid) {
                return mid + 1;
            }
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // If no missing number is found
    return null;
}

var res28 = findMissingNumberSorted(array28);

console.log(res28);



