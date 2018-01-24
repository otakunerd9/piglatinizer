/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
  $("#translate").click(function(){
     var message = $("#input").val();
    var parrotMessage = wordToPigLatin(message);
    $("#h4").text(parrotMessage);
  })
  
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin(word){
  
  if (word[0]==="a" || word[0]==="e" || word[0]==="i" || word[0]==="o" || word[0]==="u" ){
    
  }else{
    
  }
  
  return  word + "ay";
}




// Create the sentenceToPigLatin function that takes a sentence as a parameter

function sentenceToPigLatin(sentence){
  var pigwords = sentence.split(" ") ;
  
  for(var i = 0; i < pigwords.length; i++){
    var word = pigwords[i];
    var pglatin = wordToPigLatin(word);
    pigwords[i] = pglatin;
  }
  
  return pigwords;
};


	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
	
	function pigLatin2 (word) {
	  
	 var firstLetter = word.substr();
	 var suffix = firstLetter + 'ay';
	}
	
var  vowelArray = ["a","e","i","o","u"]