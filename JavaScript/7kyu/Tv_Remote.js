// My TV remote control has arrow buttons and an OK button.

// I can use these to move a "cursor" on a logical screen keyboard to type "words"...

// The screen "keyboard" layout looks like this

// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// Kata task

// How many button presses on my remote are required to type a given word?

// Notes

// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
// Example

// word = codewars

// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

var tvRemote = function (word) {
  let keyboard = [
    ["a", "b", "c", "d", "e", "1", "2", "3"],
    ["f", "g", "h", "i", "j", "4", "5", "6"],
    ["k", "l", "m", "n", "o", "7", "8", "9"],
    ["p", "q", "r", "s", "t", ".", "@", "0"],
    ["u", "v", "w", "x", "y", "z", "_", "/"],
  ];

  let count = 0;
  let currentRow = 0,
    currentCol = 0;

  for (let char of word) {
    let targetRow, targetCol;

    for (let r = 0; r < keyboard.length; r++) {
      if (keyboard[r].includes(char)) {
        targetRow = r;
        targetCol = keyboard[r].indexOf(char);
        break;
      }
    }

    count +=
      Math.abs(targetRow - currentRow) + Math.abs(targetCol - currentCol);

    count += 1;

    currentRow = targetRow;
    currentCol = targetCol;
  }

  return count;
};

//Input - String
//Output - Integer, number of steps took to write the word

//Check if the letter is on that row,
//If the letter is on the same row,
//start looping that row until the letter is reached and add to the counter,
//else move on to the next row
//continue from the same row and the index,
//when the word is done,
//add the number of length of that word to the counter for each letter "ok"s.
