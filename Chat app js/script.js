const input=document.getElementById('input-text');
const btn=document.getElementById('send-button');
const chat=document.querySelector('.chat-msg');

//createing func to send the msg
function sendMessage()
{
    const msg=input.value.trim();
    if(msg!=='')
    {
        const element=document.createElement('div');
        element.classList.add('message');
        element.textContent=msg;
        chat.appendChild(element);
        input.value='';
    }
}

//send button clicked then call func to send the msg 
btn.addEventListener('click',sendMessage);
