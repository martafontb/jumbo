document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');

    colors.forEach(color => {
        color.addEventListener('click', () => {
            const originalHex = color.getAttribute('data-hex');
            copyToClipboard(originalHex);
            // Change the data-hex attribute to display "Copied to clipboard!"
            color.setAttribute('data-hex', 'Copied to clipboard!');
            // Revert back to the original hex code after 2 seconds
            setTimeout(() => {
                color.setAttribute('data-hex', originalHex);
            }, 2000); // 2000 milliseconds = 2 seconds
        });
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard:', text);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}
