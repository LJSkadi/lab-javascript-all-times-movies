/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function getMinutes(list){
    return list.map(function (films) {
        //Task1 Convert string to number 
        //Step1: Find Nmbr in Str -> a[][]
        if (films.duration.indexOf("h") !== -1) {
            var dur = films.duration.match(/[0-9]+/g);
            //Step2: Convert a[][] -> a[];
            return (dur.length == 1) ? dur[0] * 60 : dur.reduce(function (acc, curr) { return (parseInt(acc) * 60) + parseInt(curr) })
        }
        return parseInt(films.duration.match(/[0-9]+/g));

    })
}

function turnHoursToMinutes(list) {
    var copyThatList = Object.assign({},list); 
    var newdur = getMinutes(list);
    if (copyThatList.length === 0) {return undefined}
    //Step3: Exchange the values of all duration-keys
    for (var i = 0; i < copyThatList.length; i++) {
        copyThatList[i].duration = newdur[i];
        console.log(list);}
    return copyThatList;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var avr = 0;
    var sum = [];
    // Returns Zero, if array is empty
    if (array.length === 0) {
        return 0
    }
    for (var i = 0; i < array.length; i++) {
        // Creates an array to store the rates of the movies
        sum.push(parseFloat(array[i].rate));
    }
    // Get the average
    avr = sum.reduce(function (acc, curr) { return acc + curr; })
    // Returns the average rounded to two digits
    return Math.round(avr / array.length).toFixed(2)
}

// Get the average of Drama Movies
// filter the array and store it in a new array to get the average
//Step1: Search through the Genre-Arrays and try to find matching Strings
//Step2: If there is no Drama -> continue; if there is -> store it
//Step3: Get the average of the new array
function dramaMoviesRate(array) {
    var newArr = array[0];
    // If array is empty return Zero
    if (array.length === 0) {
        return 0
    }
    // Create an array with all Drama movies
    newArr = array.map(function (elem) {
        if (elem.genre.includes("Drama")) {
            return elem
        }
    });
    // Remove the undefined placeholders from the array
    newArr = newArr.filter(function (elem) { return elem != undefined })
    // If there aren't any Drama movies
    if (newArr.length === 0) {
        return undefined
    }
    // Call ratesAverage function with the trimed array including only Dramas
    return ratesAverage(newArr)
}

// Order by time duration, in growing order
function orderByDuration(array) {
    var newArr = array[0];
    // If array is empty return Zero
    if (array.length === 0) {
        return 0
    }
    newArr = turnHoursToMinutes(array);
    return newArr.sort(function (movie1, movie2) {
        return movie2.duration - movie1.duration
    })
}

// How many movies did STEVEN SPIELBERG
// reduce
//Step1: Search through the Directors-Array for matching strings
//Step2: If the director is Steven S -> store it; otherwise continue
function howManyMovies(array) {
    var newArr = array[0];
    // If the array is empty return Zero
    if (array.length === 0) {
        return undefined
    }
    var directorsname = "Steven Spielberg";
    newArr = array.map(function (elem) {
        if (elem.director === directorsname && elem.genre.includes("Drama")) {
            return elem
        }
    });
    newArr = newArr.filter(function (elem) { return elem != undefined });
    return "Steven Spielberg directed " + new.Arr.length + " drama movies!"
}

// Order by title and print the first 20 titles
//sort
function orderAlphabetically(array) {
    var newArr = array[0];
    // If array is empty return Zero
    if (array.length === 0) {
        return 0
    }
    newArr.map(function(movie){newArr.sort(function (title1, title2) {
        return title2 - title1
    })})
}

// Best yearly rate average
