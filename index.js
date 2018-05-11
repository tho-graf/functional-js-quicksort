/**
 * takes a predicate and a list and returns a pair of lists: 
 * those elements of the argument list that do and do not satisfy the predicate, respectively.
 * (a -> Bool) -> [a] -> ([a],[a])
 */
function partition(predicate) {
    return arr =>
        arr.reduce(
            ([left, right], cur) => [
                predicate(cur) ? [...left, cur] : left,
                !predicate(cur) ? [...right, cur] : right
            ],
            [[], []]
        );
}

function quicksort([x, ...xs]) {
    if (typeof x === "undefined") {
        return [];
    }
    const [before, after] = partition(val => val < x)(xs);
    return [...quicksort(before), x, ...quicksort(after)];
}
