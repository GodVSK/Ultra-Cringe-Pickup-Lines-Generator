const pickupLines = {
    1: [
        "Are you a parking ticket? Because you've got 'FINE' written all over you.",
        "Do you have a map? I keep getting lost in your eyes.",
        "Are you a magician? Because whenever I look at you, everyone else disappears."
    ],
    3: [
        "If being sexy was a crime, you'd be guilty as charged.",
        "Is your name Google? Because you've got everything I've been searching for.",
        "Do you believe in love at first sight, or should I walk by again?"
    ],
    5: [
        "I'm no photographer, but I can picture us together.",
        "Are you a bank loan? Because you've got my interest.",
        "Do you have a name, or can I call you mine?"
    ],
    7: [
        "I must be a snowflake, because I've fallen for you.",
        "Are you a time traveler? Because I see you in my future.",
        "If kisses were snowflakes, I'd send you a blizzard."
    ],
    10: [
        "Roses are red, violets are blue, I'm not a poet, but damn, I want to cuddle you!",
        "Do you have a map? I just got lost in the sauce... I mean, your eyes.",
        "Are you a WiFi signal? Because I'm really feeling a connection."
    ]
};

const pickupLineElement = document.getElementById('pickup-line');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const cringeSlider = document.getElementById('cringe-slider');
const cringeLevelDisplay = document.getElementById('cringe-level');

function getRandomPickupLine(cringeLevel) {
    const availableLevels = Object.keys(pickupLines)
        .map(Number)
        .filter(level => level <= cringeLevel);
    
    const selectedLevel = availableLevels[Math.floor(Math.random() * availableLevels.length)];
    const linesAtLevel = pickupLines[selectedLevel];
    
    return linesAtLevel[Math.floor(Math.random() * linesAtLevel.length)];
}

generateBtn.addEventListener('click', () => {
    const cringeLevel = cringeSlider.value;
    const pickupLine = getRandomPickupLine(cringeLevel);
    pickupLineElement.textContent = pickupLine;
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(pickupLineElement.textContent).then(() => {
        copyBtn.textContent = '✅ Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Line 📋';
        }, 2000);
    });
});

cringeSlider.addEventListener('input', () => {
    cringeLevelDisplay.textContent = cringeSlider.value;
});

// Add random heart animations
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-bg');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.opacity = Math.random() * 0.5;
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHearts, 300);
