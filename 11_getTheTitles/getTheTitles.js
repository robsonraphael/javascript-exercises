const getTheTitles = function(books) {
    let myTitles = []
    books.map(element => {
        myTitles.push(element.title)   
    })
    return myTitles
};

// Do not edit below this line
module.exports = getTheTitles;
