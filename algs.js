// An algorithm that determines if a string is a palindrome
// returns true if true, false if not

function isPalindrome(string) {
    var words = string.split("");
    var reversedWord = words.reverse().join("").trim();
    // array: [1, 2, 3, 4, 5];
    // string: 12345
    console.log(reversedWord);
    console.log(string);

    if (string === reversedWord) {
        return true
    }

    else return false;
}

function factorial(num) { // 5
    var product = 1; 
    // return num * (num-1)....until we get to 1
    for (var i = num; i >= 1; i--) {
        product *= i;
                // i * product = result
                // 5 * 1 = 5
                // 4 * 5 = 20
                // 3 * 20 = 60
                // 2 * 60 = 120
                // 1 * 120 = 120
    }

    return product;
}

// write a function that grabs a string and returns all the words
// capitalized
// hello, everybody, my name is hunter
// result: Hello, Everybody, My Name Is Hunter

function capitalize(string) {
    var words = string.split(" ");
    var result = [];

    for (var i = 0 ; i < words.length; i++) {
        result.push(words[i][0].toUpperCase() + words[i].slice(1));
        // [h]ello    
    }

    return result.join(" ");
}


console.log(isPalindrome("test tset"));

console.log(factorial(5));
console.log(capitalize("hey, guys, thanks for coming to office hours! Yaaaaay."));