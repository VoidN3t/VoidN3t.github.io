const terminal = document.getElementById('terminal');

// Utility per attendere un certo tempo
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Funzione per digitare un testo lettera per lettera
async function typeLine(text, delay = 0) {
  await wait(delay);
  const p = document.createElement('p');
  p.classList.add('line');
  terminal.appendChild(p);

  for (let i = 0; i < text.length; i++) {
    p.textContent += text.charAt(i);
    window.scrollTo(0, document.body.scrollHeight);
    await wait(50); // intervallo tra caratteri
  }
}

// Funzione per stampare una riga vuota o immediata
async function printLine(text = '', delay = 0) {
  await wait(delay);
  const p = document.createElement('p');
  p.classList.add('line');
  p.textContent = text || '\u00A0'; // spazio non interrotto
  terminal.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

// Funzione per stampare il prompt con digitazione + input
async function printPromptWithInput(delay = 0) {
  await wait(delay);
  await typeLine('WHAT GAME WOULD YOU LIKE TO PLAY?');

  const inputWrapper = document.createElement('p');
  inputWrapper.classList.add('line');

  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('terminal-input');
  input.autofocus = true;
  input.spellcheck = false;
  input.style.background = 'black';
  input.style.color = 'white';
  input.style.border = 'none';
  input.style.font = 'inherit';
  input.style.outline = 'none';
  input.style.width = '100%';
  input.style.textTransform = 'uppercase';

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const userInput = input.value.trim().toUpperCase();
      input.disabled = true;

      if (userInput === 'WHOAMI') {
        window.location.href = 'whoami.html';
      } else {
        const error = document.createElement('p');
        error.classList.add('line');
        error.textContent = 'UNKNOWN GAME. TRY AGAIN.';
        terminal.appendChild(error);
      }
    }
  });

  inputWrapper.appendChild(input);
  terminal.appendChild(inputWrapper);
  input.focus();
}

// Sequenza principale asincrona
async function main() {
  await typeLine('');
  await typeLine('GREETINGS PROFESSOR FALKEN.', 500);
  await printLine('', 200);
  await printLine('', 200);
  await printLine('', 200);
  await typeLine('GAMES AVAILABLE:', 300);
  await typeLine('- WHOAMI', 500);
  await printLine('', 500);
  await printPromptWithInput(500);
}

main();
