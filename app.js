const messagesEl = document.querySelector('#messages');
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const send = document.querySelector('#send');
const suggestions = document.querySelector('#suggestions');
const history = [];
let busy = false;

function append(role, content) {
  const message = document.createElement('div');
  message.className = `message ${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = content;
  message.append(bubble);
  if (role === 'assistant') {
    const label = document.createElement('span');
    label.className = 'sender';
    label.textContent = 'CUTWEL ASSISTANT';
    message.append(label);
  }
  messagesEl.append(message);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return message;
}

async function ask(value) {
  const question = value.trim();
  if (!question || busy) return;
  busy = true;
  send.disabled = true;
  input.disabled = true;
  suggestions.hidden = true;
  append('user', question);
  input.value = '';
  history.push({role:'user', content:question});
  const loading = append('assistant', 'Finding an answer…');
  const progress = setTimeout(() => { loading.querySelector('.bubble').textContent = 'Still working on this — thanks for waiting…'; }, 9000);
  try {
    const response = await fetch('/api/chat', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:history.slice(-8)}),signal:AbortSignal.timeout(70000)});
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unable to reach the assistant.');
    loading.querySelector('.bubble').textContent = data.answer;
    history.push({role:'assistant',content:data.answer});
  } catch (error) {
    loading.querySelector('.bubble').textContent = error.name === 'TimeoutError' ? 'This is taking too long. Please try again or contact our technical team.' : error.message;
    history.pop();
  } finally {
    clearTimeout(progress);
    busy = false;
    send.disabled = false;
    input.disabled = false;
    input.focus();
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
}
form.addEventListener('submit', event => {event.preventDefault();ask(input.value)});
input.addEventListener('keydown', event => {if (event.key === 'Enter' && !event.shiftKey) {event.preventDefault();ask(input.value)}});
suggestions.addEventListener('click', event => {const button = event.target.closest('[data-prompt]'); if (button) ask(button.dataset.prompt)});
