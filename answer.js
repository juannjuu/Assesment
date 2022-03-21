const anagram = (str1, str2) => {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let anagram1 = []
    let anagram2 = []
    if(arr1.length != arr2.length){
        return false 
    } else {
        for(let i = 0; i < arr1.length; i++){
            if(arr2.includes(arr1[i])){
                anagram1.push(arr1[i])
                anagram2.push(arr2[arr2.indexOf(arr1[i])])
                delete arr2[arr2.indexOf(arr1[i])]
            } else anagram1.push(arr1[i])
        }
        if(anagram1.length == anagram2.length){
            return true
        } else return false
    }
}

console.log(anagram('aaz', 'zza'))
console.log(anagram('ayam', 'maya'))
console.log(anagram('anagram', 'nagaram'))