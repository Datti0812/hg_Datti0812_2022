# hg_Datti0812_2022

The javascript code contains a function named NumberToWordConverter which takes in an argument of type intgers array.
The function converts each integer into word format and converts them into a comma separated string with all the integers converted into words
If there are any negative integers then it will be converted as minus+'number in word format'
The code handles edge cases like null values in the input array.

Time complexity of this function is o(m*n) where m being the length of input array and n being the length of largest integer
Space Complexity will be o(10) as we are using a dictionary to store the word formats of each integer from 0 to 9. So we can in a way consider constant space complexity.
