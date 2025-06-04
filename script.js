const lines = document.querySelectorAll('.typing-line');
async function typeLine(lineElem, delayBefore) {
  const text = lineElem.getAttribute('data-text');
  const chars = text ? [...text] : [];
  lineElem.innerHTML = '';
  lineElem.style.display = 'block';
  await new Promise(r => setTimeout(r, delayBefore));
  for (let i = 0; i < chars.length; i++) {
    const span = document.createElement('span');
    span.textContent = chars[i];
    lineElem.append(span);
    setTimeout(() => {
      span.style.transition = 'opacity 0.3s ease';
      span.style.opacity = '1'; // 타이핑되며 완전 불투명(100%)
    }, i * 100);
  }
  await new Promise(r => setTimeout(r, (chars.length * 100) + 200));
}
async function animateAll() {
  // 첫 번째 줄: EXPAND
  await typeLine(lines[0], 500);
  // 두 번째 줄: OUR
  await typeLine(lines[1], 500);
  // 세 번째 줄: UNIVERSE!
  await typeLine(lines[2], 500);
}
animateAll();
