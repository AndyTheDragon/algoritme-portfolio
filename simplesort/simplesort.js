export default function simpleSort(arr) {
    for (let i=0; i < arr.length - 1; i++) {
        let j = i;
        while (arr[j] > arr[j + 1] && j >= 0) {
            console.log(`Array is not sorted at index ${j}: ${arr[j]} > ${arr[j + 1]}`);
            swap(j, j+1);
            console.log(`Array now looks like: ${arr}`);
            j--;
        }
    }
    return arr;


    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}