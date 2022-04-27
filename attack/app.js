const myMessages = [];
const myMessageForm = document.querySelector('form');
const myMessagesList = document.querySelector('ul');

function renderMyMessages() {
  //defining new variable 
  let messageItems = '';
  //loops through all user message and renders them
  for (const message of myMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <img src="${message.image}" alt="${message.text}">
        </div>
        <!--script code rendered here-->
        <p>${message.text}</p>
      </li>
    `;
  }
  //string is handled to innerHtml to be interpreted as HTML
  myMessagesList.innerHTML = messageItems;
}
/**This is a helper funciton for submit button */
function formSubmitHandler(event) {
  event.preventDefault();
  const myMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  
  //Returning the value property
  const myMessage = myMessageInput.value;
  const imageUrl = messageImageInput.value;
  
  //Validates if usr input is empty
  if (
    !myMessage ||
    !imageUrl ||
    myMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid message and image.');
    return;
  }

  myMessages.push({
    text: myMessage,
    image: imageUrl,
  });
  //Setting the value property
  myMessageInput.value = '';
  messageImageInput.value = '';

  //calling function here
  renderMyMessages();
}

myMessageForm.addEventListener('submit', formSubmitHandler);
