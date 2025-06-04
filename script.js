document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.typing-line');

  // 각 줄에 대해, data-text 속성의 문자열을 개별 span으로 분리해서 삽입
  lines.forEach(lineElem => {
    const text = lineElem.getAttribute('data-text');
    const chars = text ? [...text] : [];
    lineElem.innerHTML = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0.5'; // 초기 투명도 50%
      lineElem.append(span);
    });
  });

  // 각 줄의 문자별로 순차적으로 opacity 1로 변경 (타이핑 효과)
  (async function animateLines() {
    for (let i = 0; i < lines.length; i++) {
      const spans = lines[i].querySelectorAll('span');
      for (let j = 0; j < spans.length; j++) {
        await new Promise(r => setTimeout(r, 100));
        spans[j].style.opacity = '1';
      }
      // 줄 간 딜레이 (약 0.5초)
      await new Promise(r => setTimeout(r, 500));
    }
  })();
});
