export default function bubble_sort(arr: number[]): void {
    let end = arr.length;

    for (let i = 0; i < end; i++) {
        for (let j = 0; j < end - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

