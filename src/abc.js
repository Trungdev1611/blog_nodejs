var canConstruct = function(ransomNote, magazine) {
    if(magazine.includes(ransomNote)) {
        return true
    }
    else {
        let lengthRansomeNote = ransomNote.length
        while(lengthRansomeNote>0 ) {
            let index = magazine.indexOf(ransomNote[0])
            if(index > -1) {
               magazine = magazine.replace(magazine[index], "")
               ransomNote =  ransomNote.replace(ransomNote[0],"")
                lengthRansomeNote = lengthRansomeNote - 1
            }
            else {
                return false
            }
        }
        return true
    }

};



var canConstruct = function(ransomNote, magazine) {
    let charCount = new Array(26).fill(0); // Array to store the count of each letter
    console.log(`charCount`, charCount)
    // Count the occurrences of each letter in magazine
    for (let i = 0; i < magazine.length; i++) {
        charCount[magazine.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    
    // Check if ransomNote can be constructed
    for (let i = 0; i < ransomNote.length; i++) {
        let charIndex = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0);
        if (charCount[charIndex] === 0) {
            return false; // Not enough occurrences of the current letter in magazine
        }
        charCount[charIndex]--;
    }
    
    return true;
};

let test = canConstruct("abaaca", "aaaaabc")
console.log(`test`, test)