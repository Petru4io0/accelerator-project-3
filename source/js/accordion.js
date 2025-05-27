const accordion = document.querySelector('.accordion');
const accordionTitles = accordion.querySelectorAll('.accordion__item-title');

accordionTitles.forEach.call(accordionTitles,(accordionTitle) => {
  accordionTitle.addEventListener('click', () => {
    const clickedContent = accordionTitle.parentElement.querySelector('.accordion__item-content');

    accordionTitle.classList.toggle('accordion__item-title--active');
    clickedContent.classList.toggle('accordion__item-content--visible');


    if (clickedContent.classList.contains('accordion__item-content--visible')) {
      clickedContent.style.maxHeight = `${clickedContent.scrollHeight}px`;
    } else {
      clickedContent.style.maxHeight = null;
    }
  });
});
