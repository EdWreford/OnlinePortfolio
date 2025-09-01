const typeWriter = (element, text, speed = 50) => {
  return new Promise((resolve) => {
    let i = 0;
    element.textContent = "";
    const interval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
};

async function runSequence() {
  const title = document.getElementById("bigTitle");
  const subtitle = document.getElementById("categoryTitle");

  const titleText = title.textContent;
  const subtitleText = subtitle.textContent;

  title.textContent = "";
  subtitle.textContent = "";

  await typeWriter(title, titleText, 75);
  await typeWriter(subtitle, subtitleText, 50);
}

runSequence();