'use strict';

function select(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += 'active';
}

function redirect(e) {
  console.log(e);
  e.preventDefault();
  window.location.href = '/';
}

function submit(action, selector, block) {
  const cpf = document.getElementById(selector).value;
  if (!cpf) return alert('CPF é campo obrigatório!');

  fetch(`http://127.0.0.1:3000/${action}?cpf=${cpf}&block=${block}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(() => (window.location.href = '/'));
}

function status() {
  fetch('http://127.0.0.1:3000/status', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      let requests = '';
      for (const key in data.requests) {
        requests += `http://127.0.0.1:3000/${key === '' ? '/' : key}: ${data.requests[key]}\n`;
      }

      document.getElementById(
        'stats'
      ).value = `CPFs Blocks: ${data.count}\nuptime: ${data.uptime}\n\nRequests:\n${requests}`;
    });
}
