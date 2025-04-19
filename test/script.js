setTimeout(() => {
    const button = document.querySelector('.btn');
    const se = new Audio ('se.mp3');
    button.click(
        se.play()
    );
}, 1000);