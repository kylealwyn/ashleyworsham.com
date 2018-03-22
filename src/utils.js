export const appendImageDescriptions = (selector = '.markdown img') => {
  const nodes = document.querySelectorAll(selector);

  [].forEach.call(nodes, (img) => {
    const alt = img.getAttribute('alt');
    if (!alt) {
      return;
    }
    const span = document.createElement('p');
    span.classList.add('image-description');
    span.innerText = alt;
    img.parentNode.appendChild(span);
  });
};

