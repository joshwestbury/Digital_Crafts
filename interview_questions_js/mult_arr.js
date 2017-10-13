function main (arr) {
    arr.sort(function(x,y) {
        if (x > y) {return 1;}
        else if (x < y) {return -1;}
        return 0;
  })
  //console.log(arr)
    //new_arr = []
    //second_arr =[]
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] == arr[i-1]) {
    //         new_arr.push(arr[i])
    //     }
    //     var mySet = new Set(new_arr)
    //     final_arr = Array.from(mySet)
    // }
    // console.log(final_arr)
    var newArr = arr.filter(function(element, i, array){
        if (array[i] == array[i-1]) {
            return true
        }
    })
    console.log(newArr)
    var mySet = new Set(newArr)
    var final_arr = Array.from(mySet)
    console.log(final_arr)
}

main([2, 3, 3, 2, 5, 2, 4, 5, 3])
