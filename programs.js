document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('program-search');
    const filters = Array.from(document.querySelectorAll('[data-program-filter]'));
    const tiles = Array.from(document.querySelectorAll('.program-tile'));
    const emptyMessage = document.querySelector('.program-empty');
    let activeCategory = 'all';

    function updatePrograms() {
        const query = searchInput.value.trim().toLocaleLowerCase();
        let visibleCount = 0;

        tiles.forEach(function (tile) {
            const categories = tile.dataset.categories.split(' ');
            const searchableText = (tile.dataset.search + ' ' + tile.textContent).toLocaleLowerCase();
            const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);
            const matchesSearch = searchableText.includes(query);
            const isVisible = matchesCategory && matchesSearch;

            tile.hidden = !isVisible;
            if (isVisible) {
                visibleCount += 1;
            }
        });

        emptyMessage.hidden = visibleCount > 0;
    }

    filters.forEach(function (filter) {
        filter.addEventListener('click', function () {
            activeCategory = filter.dataset.programFilter;
            filters.forEach(function (item) {
                const isActive = item === filter;
                item.classList.toggle('is-active', isActive);
                item.setAttribute('aria-pressed', String(isActive));
            });
            updatePrograms();
        });
    });

    searchInput.addEventListener('input', updatePrograms);
});
