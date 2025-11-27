console.log('hallo wereld');

const img = document.getElementById('nachtwacht');
const highlight = document.getElementById('highlight');

img.addEventListener('load', () => {
  const rect = img.getBoundingClientRect();
  highlight.style.width = rect.width + 'px';
  highlight.style.height = rect.height + 'px';

  img.addEventListener('mousemove', (e) => {
    console.log('mousemove om de x,y,w,h te vinden binnen de img');
    console.log(e);
  });
});

document.querySelectorAll('area').forEach((area) => {
  area.addEventListener('mouseenter', (e) => {
    console.log('mouseenter!');
    console.log(e);

    const coords = e.target.coords.split(',').map(Number);
    const shape = e.target.shape.toLowerCase();

    highlight.style.clipPath = `polygon(${coords[0]}px ${coords[1]}px,
                                        ${coords[2]}px ${coords[1]}px,
                                        ${coords[2]}px ${coords[3]}px,
                                        ${coords[0]}px ${coords[3]}px)`;

    highlight.style.opacity = 1;
  });

  area.addEventListener('mouseleave', () => {
    highlight.style.opacity = 0;
  });
});
