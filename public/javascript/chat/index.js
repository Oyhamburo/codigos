const userName = 'jere' 
const socket = io(); 
socket.on('messages', messages => {
  chatBox.innerHTML = ''; 
  console.log({messages})
  messages.forEach(message => {
    console.log(message)
    // const me = userName === message.user 
    // chatBox.innerHTML += ` 
    //   <li class='${me ? 'me' :'other'}'> 
    //     ${me 
    //       ? message.message 
    //       :`<span>${message.user}</span>${message.message}`
    //     } 
    //   </li> `;
  })
//   chatBox.scrollTop = chatBox.scrollHeight;
}); 
const chatForm = document.querySelector('#formChat'); 
const chatText = document.querySelector('#chatText'); 
const chatBox = document.querySelector('#chat-thread'); 
chatForm.addEventListener('submit', e => {
  e.preventDefault(); 
  socket.emit('chat', {
    messageId: socket.id, 
    user: userName,
    message: chatText.value
  }); 
  chatText.value = '';
});