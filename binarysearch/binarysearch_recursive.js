export function binarySearchRecursive( search, values, start, end, comparator ) {
    let found = false;
    let index = -1;
    let iterations = 1;

    if (start > end) {
        return { found, index, iterations: 0 };
    }

    const mid = Math.floor((start + end) / 2);
    const comparison = comparator(search, values[mid]);

    if (comparison === 0) {
        found = true;
        index = mid;
    } else if (comparison < 0) {
        const leftResult = binarySearchRecursive(search, values, start, mid - 1, comparator);
        found = leftResult.found;
        index = leftResult.index;
        iterations += leftResult.iterations;
    } else {
        const rightResult = binarySearchRecursive(search, values, mid + 1, end, comparator);
        found = rightResult.found;
        index = rightResult.index;
        iterations += rightResult.iterations;
    }

    return { found, index, iterations };
}
