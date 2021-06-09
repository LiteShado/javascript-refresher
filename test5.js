//find longest word. write a function that takes a string. return the longest word the string contains.

function longest_word(str) {
    let arr = str.split(" ");
    return arr.sort((a, b) => {
        return b.length - a.length;
    })[0];
}
console.log(longest_word(('The quick brown fox jumped over the lazy elephant')));
