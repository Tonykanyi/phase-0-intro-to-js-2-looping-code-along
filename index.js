function writeCards(names, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
    
  console.log(messages);

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }