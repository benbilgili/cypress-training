console.log("hello world")

let array = [];

let sortName = (name) => {
    for (let letter of name) {
        if (letter != " ") {
            array.push(letter.toLowerCase())
        }
    }
    return array.sort()
}


console.log(sortName("Benan Bilgili"))