// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "re

class Ghost {
  constructor() {
    this.color = ["white", "yellow", "purple", "red"][
      Math.floor(Math.random() * 4)
    ];
  }
}
