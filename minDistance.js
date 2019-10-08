function minDistance(word1, word2) {
    let word = "";
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        let element = word2[i];
        if (word1[i] !== word2[i]) {
            count++
            word += element
        } else {
            word += element
        }
        // if (word === word2.slice(0, word2.length-1)) {
        //     count++
        //     return count
        // }
        if (word === word2) break
    }
    return count
}

console.log(minDistance("horse", "ros"))