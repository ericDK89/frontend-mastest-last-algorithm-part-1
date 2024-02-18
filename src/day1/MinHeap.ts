export default class MinHeap {
  public length: number;
  private arr: number[];

  constructor() {
    this.length = 0;
    this.arr = []
  }

  insert(value: number): void {
    this.arr[this.length] = value //can be done with this.arr.push(value)
    this.length++
    this.heapifyUp(this.length - 1)
  }

  delete(): number {
    if (this.length === 0) return -1

    const output = this.arr[0]
    this.length--

    if (this.length === 0) {
      this.arr = []
      return output
    }

    this.arr[0] = this.arr[this.length]
    this.heapifyDown(0)

    return output
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.getleftIdx(idx)
    const rightIdx = this.getRightIdx(idx)

    if (idx >= this.length || leftIdx >= this.length) return

    const leftValue = this.arr[leftIdx]
    const rightValue = this.arr[rightIdx]
    const value = this.arr[idx]

    if (value > rightValue && leftValue > rightValue) {
      this.arr[idx] = rightValue
      this.arr[rightIdx] = value
      this.heapifyDown(rightIdx)
    } else if (value > leftValue && rightValue > leftValue) {
      this.arr[idx] = leftValue
      this.arr[leftIdx] = value
      this.heapifyDown(leftIdx)
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return //? what, I know is the base case, but how the idx turns into 0? what if the parent isn't bigger? 

    const parentIdx = this.getParent(idx)
    const parentValue = this.arr[parentIdx]
    const value = this.arr[idx]

    if (parentValue > value) {
      this.arr[idx] = parentValue
      this.arr[parentIdx] = value
      this.heapifyUp(parentIdx) //? why do we need to call the method here? 
    }
  }

  private getParent(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private getleftIdx(idx: number): number {
    return Math.floor((2 * idx) + 1)
  }

  private getRightIdx(idx: number): number {
    return Math.floor((2 * idx) + 2)
  }
}
