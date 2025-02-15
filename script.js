function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function typeText(element, text, speed = 100, delay = 2000) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';
        
        const typing = setInterval(() => {
            if (index < text.length) {
                element.textContent = text.substring(0, index + 1);
                index++;
            } else {
                clearInterval(typing);
                setTimeout(() => eraseText(element, speed, resolve), delay);
            }
        }, speed);
    });
}

function eraseText(element, speed = 100, callback) {
    let text = element.textContent;
    let index = text.length;

    const erasing = setInterval(() => {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
        } else {
            clearInterval(erasing);
            callback();
        }
    }, speed);
}

async function cycleText(element, texts, speed = 100, delay = 2000) {
    let i = 0;
    while (true) {
        await typeText(element, texts[i], speed, delay);
        i = (i + 1) % texts.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const roleElement = document.querySelector('.typing-text');
    const titles = ['Frontend Developer', 'UC Davis Student', 'Backend Developer', 'Full Stack Developer', 'Software Engineer'];
    cycleText(roleElement, titles, 150, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing typing animation code
    const roleElement = document.querySelector('.typing-text');
    const titles = ['Frontend Developer', 'UC Davis Student', 'Backend Developer', 'Full Stack Developer', 'Software Engineer'];
    cycleText(roleElement, titles, 150, 2000);

    // Add slide-in animations with reversed directions
    const profilePic = document.querySelector('#profile .section__pic-container');
    const profileText = document.querySelector('#profile .section__text');

    // Now profile pic slides from left, and text slides from right
    setTimeout(() => {
        profilePic.classList.add('slide-in-left');    // Changed from slide-in-right
        profileText.classList.add('slide-in-right');  // Changed from slide-in-left
    }, 300);
});