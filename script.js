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
      span.style.opacity = '1';
    }, i * 100);
  }
  await new Promise(r => setTimeout(r, (chars.length * 100) + 200));
}
async function animateAll() {
  // 1. "압도적인 기술력, 검증된 경험"
  await typeLine(lines[0], 500);
  // 2. "나라스페이스는 "
  await typeLine(lines[1], 500);
  // Show scroll container (fade-in with first item)
  const scroller = document.getElementById('master-container-scroller');
  scroller.style.display = 'block';
  // Wait for full scroll animation (6.2s)
  await new Promise(r => setTimeout(r, 6200));
  // 3. "가치사슬의 전 과정을 직접 수행합니다."
  await typeLine(lines[2], 500);
  // 4. "글로벌 리더, 나라스페이스와 함께하세요."
  await typeLine(lines[3], 500);
}
animateAll();
