const terminal = document.getElementById('terminal');

// Utility per aspettare
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Scrive una riga con typing effect
async function typeLine(text, delay = 0) {
  await wait(delay);
  const p = document.createElement('p');
  p.classList.add('line');
  terminal.appendChild(p);

  for (let i = 0; i < text.length; i++) {
    p.textContent += text[i];
    window.scrollTo(0, document.body.scrollHeight);
    await wait(40); // velocità tra caratteri
  }
}

// Riga vuota o immediata
async function printLine(text = '', delay = 0) {
  await wait(delay);
  const p = document.createElement('p');
  p.classList.add('line');
  p.textContent = text || '\u00A0';
  terminal.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

// Esempio: scrivere stringhe personalizzate (da modificare o rimuovere)
async function main() {
    await typeLine('VOIDN3T DATABASE, FOUND.');
    await typeLine('THESE ARE TOP SECRET INFORMATION, DO NOT SHARE.');
    await printLine();
    await printLine();
    await printLine('VOIDN3T IS A DEVELOPER, HERE ARE LISTED MAIN SKILLS:');
    await printLine();
    await printLine();
    await printLine('MINECRAFT PLUGINS');
    await printLine('80% [########--]');
    await printLine();
    await printLine('JS, HTML, CSS');
    await printLine('50% [#####-----]');
    await printLine();
    await printLine('PYTHON');
    await printLine('60% [######----]');
    await printLine();
    await printLine('DISCORD.JS');
    await printLine('20% [#######---]');

}

main();
