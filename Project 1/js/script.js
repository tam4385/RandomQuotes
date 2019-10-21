

// The list of quotes to be used in the generator
const quotes = [
  {quote: 'By 50, everyone has the face they deserve',
  author: 'George Orwell',
   }
  ,{ quote: 'I declare after all, there is no joy like reading',
  author: 'Jane Austen',
  origin: 'Pride and Prejudice',
   },
  { quote: 'The less there is to justify a traditional custom, the harder it is to get rid of it',
  author: 'Mark Twain',
  origin: 'The Adventures of Tom Sawyer',
  date: '1876'
    },
  {quote: 'Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it',
  author: 'Ferris Bueller',
  origin: 'Ferris Bueller\'s day off',
  date: '11th June, 1986' 
   },
  {quote: 'I have no idea. People who boast about their IQ are losers',
  author: 'Stephen Hawking',
  origin: 'To the New York Times',
  date: 'December 2004'
  }

];

// This function uses generates a random number and stores it to the array of objects 'quotes'.

function getRandomQuote(){
  randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


//Function calls the getRandomQuote function and assembles the string 'string' to concatenate the quote onto the html page.

function printQuote() {
  let getQuote = getRandomQuote();
  let string = '';
  string += '<p class="quote">' + getQuote.quote + '</p>';
  string += '<p class="source">' + getQuote.author;
    if (getQuote.origin) {
  string += '<span class="citation">' + getQuote.origin + '</span>';
    }
      if (getQuote.date) {
        string += '<span class="year">' + getQuote.date + '</span>';
      }
  string += '</p>';
  document.getElementById('quote-box').innerHTML = string;
 
}
printQuote(); 

// This code adds an event to the button to enable the generation of quotes.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
