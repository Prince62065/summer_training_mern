let arr=[7,8,6,3,74,4,10];
let start=0;
let end=arr.length-1;
console.log("The elements of the array before reversing are : ");
console.log(arr);

while(start<end){
    let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
    start++;
    end--;
}

console.log("The elements of the array after reversing are : ");
console.log(arr);