export function mergeSort(arr) {
    if (!Array.isArray(arr)) throw new TypeError('mergeSort expects an array');
    if (arr.length <= 1)
    {
        return arr;
    }
    // split array into two equal parts
    const mid = Math.floor(arr.length /2);
    let arrLeft = arr.slice(0,mid);
    let arrRight = arr.slice(mid);

    // Sort each of the parts
    arrLeft = mergeSort(arrLeft);
    arrRight = mergeSort(arrRight);

    // merge the two sorted arrays
    return merge(arrLeft, arrRight);
}

export function merge(left, right) {
    if (!Array.isArray(left) || !Array.isArray(right)) throw new TypeError('merge expects two arrays as arguments');
    let leftIndex = 0;
    let rightIndex = 0;
    const mergedArray = [];

    while (leftIndex<left.length && rightIndex<right.length)
    {
        if (left[leftIndex] <= right[rightIndex]) 
        {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        }
        if (right[rightIndex] <= left[leftIndex])
        {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    for (leftIndex; leftIndex<left.length; leftIndex++)
    {
        mergedArray.push(left[leftIndex]);
    }
    for (rightIndex; rightIndex<right.length; rightIndex++)
    {
        mergedArray.push(right[rightIndex]);
    }
    return mergedArray;
}
