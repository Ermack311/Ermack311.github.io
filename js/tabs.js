const tabs = () => {

    function bindTabs(itClass, innerClass, activeClass, startTitleClass, startContentClass) {

        const it = document.querySelectorAll(itClass);
        const inner = document.querySelectorAll(innerClass);
        const startTitle = document.querySelector(startTitleClass);
        const startContent = document.querySelector(startContentClass);

        
        it.forEach(item => item.addEventListener('click', () => {
            if (item.classList.contains(activeClass)) {
                return;
            }
        
            it.forEach(element => {
                element.classList.remove(activeClass);
            });

            item.classList.add(activeClass);

            inner.forEach(element => {
                element.classList.remove(activeClass);
            });
        
            const activeContent = document.querySelector('#' + item.dataset.tab);
            activeContent.classList.add(activeClass);
        }));

        startTitle.classList.add(activeClass);
        startContent.classList.add(activeClass);
    }

    bindTabs('.work__item', '.work__inner', 'active', '[data-tab="tab-1"]', '#tab-1');
}


document.addEventListener('DOMContentLoaded', () => {
  tabs();
});