function NumberToWordConverter(input) 
{
	var dict = {};
  dict["0"]="Zero"
  dict["1"]="One"
  dict["2"]="Two"
  dict["3"]="Three"
  dict["4"]="Four"
  dict["5"]="Five"
  dict["6"]="Six"
  dict["7"]="Seven"
  dict["8"]="Eight"
  var i = 0
  while (i<input.length)
  {
  	if(!isNaN(input[i]))
    {
      var numberInStringForm=input[i].toString()
      var digitsToWords = ""
      var j=0
      while (j < numberInStringForm.length)
      {
        digitsToWords += dict[numberInStringForm[j]]
        j+=1
        
      }
      input[i]=digitsToWords
    }
    i+=1
  }
  alert(input)
}