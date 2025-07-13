const btnsEl = document.querySelectorAll('.accordion__item-title ');

btnsEl.forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.accordion__item');
        item.classList.toggle('accordion__item--active');

        const textContent = btn.nextElementSibling;
        if (item.classList.contains('accordion__item--active')) {
            textContent.style.maxHeight = textContent.scrollHeight + "px";
        } else {
            textContent.style.maxHeight = 0;
        }
    });
});