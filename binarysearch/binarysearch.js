"use strict";

export function binarySearch( searchFor, values ) {
    let lower_index = 0;
    let upper_index = values.length-1;
    let middle_index = -1;
    let found = false;
    let iterations = 0;
    while (values[middle_index] !== searchFor && iterations < Math.log2(values.length)) {
        //console.log(`Searching for ${searchFor} between index ${lower_index} and ${upper_index}.`);
        middle_index = lower_index + Math.floor((upper_index - lower_index) / 2);
        iterations++;
        if (values[middle_index] === searchFor) {
            found = true;
            break;
        } else if (values[middle_index] < searchFor) {
            lower_index = middle_index + 1;
        } else {
            upper_index = middle_index - 1;
        }
        //console.log(`${iterations} : At position ${middle_index} I found ${values[middle_index]}`);
    }
    if (!found) {
        middle_index = -1;
    }
    return {"found": found, "index": middle_index, "iterations": iterations};
}
