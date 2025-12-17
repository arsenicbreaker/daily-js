function letterFinder(word, match) {
    for(var i=0;i<word.length;i++) {
        //akses index ke i dari word
        //console.log(word[i])
        if(word[i] == match) {
            console.log("Found on match, and the word alphabet", "at index-", i+1)
        } else {
            console.log("No match found, and the word alphabet", "at index-", i+1)

    }
}
}

letterFinder("test", "t")