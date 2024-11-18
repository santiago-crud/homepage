document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'tab'
    const tabs = document.querySelectorAll('.inactive');
    

    tabs.forEach(tab => {
        // Add event listener for mouseover (hover start)
        tab.addEventListener('mouseover', () => {
            console.log(tab.style.backgroundColor);
            tab.style.backgroundColor = 'white'; // New background color
            const link = tab.querySelector('a');
            if (link) {
                link.style.color = 'black'; // New font color
            }
        });

        // Add event listener for mouseout (hover end)
        tab.addEventListener('mouseout', () => {
            tab.style.backgroundColor = '#292929'; // Revert to original background color
            const link = tab.querySelector('a');
            if (link) {
                link.style.color = ''; // Revert to Bootstrap's default (empty restores CSS cascade)
            }
        });
    });
});
