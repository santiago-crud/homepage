document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'tab'
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        // Add event listener for mouseover (hover start)
        tab.addEventListener('mouseover', () => {
            tab.style.backgroundColor = 'white'; // New background color
            const link = tab.querySelector('a');
            if (link) {
                link.style.color = 'black'; // New font color
            }
        });

        // Add event listener for mouseout (hover end)
        tab.addEventListener('mouseout', () => {
            tab.style.backgroundColor = 'black'; // Revert to original background color
            const link = tab.querySelector('a');
            if (link) {
                link.style.color = ''; // Revert to Bootstrap's default (empty restores CSS cascade)
            }
        });
    });
});
