function search(nums: number[], target: number): number {
    const length = nums.length;

    let indexBottom = 0;
    let indexTop = length - 1;

    while(indexBottom <= indexTop) {
        const gap = indexTop - indexBottom;
        const midIndex = indexBottom + Math.floor(gap / 2);
        const valueAtMidPoint = nums[midIndex];
        if(valueAtMidPoint == target){
            return midIndex;
        }
        if(indexBottom == indexTop){
            return -1;
        }
        if(valueAtMidPoint < target){
            indexBottom = midIndex + 1;
            continue;
        }
        indexTop = midIndex - 1;
    } 

    return -1;

};