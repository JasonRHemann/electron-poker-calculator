nums = [1, 2, 3, 4];

function productExceptSelf() {
  i = 0;
  while (i < nums.length) {
    var newArr = nums.splice(0, 1);
    console.log(nums);
  }
}

productExceptSelf(nums);
