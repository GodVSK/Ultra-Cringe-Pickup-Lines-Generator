document.addEventListener('DOMContentLoaded', () => {
    const pickupLines = {
        cheesy: [
            "Are you a parking ticket? Because you've got FINE written all over you! 😏",
            "Is your name Google? Because you've got everything I've been searching for! 🔍",
            "Do you have a Band-Aid? Because I just scraped my knee falling for you! 🩹",
            "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
            "Is your dad a boxer? Because you're a knockout! 🥊",
            "Do you have a map? I keep getting lost in your eyes! 🗺️",
            "Are you French? Because Eiffel for you! 🗼",
            "Are you a camera? Because every time I look at you, I smile! 📸",
            "Do you like science? Because I've got my ion you! ⚗️",
            "Are you a campfire? Because you are hot and I want s'more! 🔥"
        ],
        nerdy: [
            "Are you a computer keyboard? Because you're just my type! ⌨️",
            "Are you made of Copper and Tellurium? Because you're CuTe! 🧪",
            "Are you a README file? Because I'd love to check you out! 💻",
            "Is your name Wi-Fi? Because I'm really feeling a connection! 📶",
            "Are you a JavaScript promise? Because I'd await for you! 🤓",
            "Are you HTML? Because you're the </body> I need! 💘",
            "Are you a RAM? Because you're always on my memory! 💾",
            "Is your name Google? Because you've got everything I'm searching for! 🔍",
            "Are you a keyboard? Because you're just my type! ⌨️",
            "Do you have an extra electron? Because I'm positively attracted to you! ⚡"
        ],
        foodie: [
            "Are you a cake? Because I want a piece of that! 🍰",
            "Are you a coffee bean? Because I like you a latte! ☕",
            "Are you a pizza? Because you're all I knead! 🍕",
            "Do you like sushi? Because I think we'd make a great roll! 🍱",
            "Are you a banana? Because I find you a-peeling! 🍌",
            "Are you a taco? Because I'd shell out anything to be with you! 🌮",
            "Are you a cookie? Because you're looking real sweet! 🍪",
            "Are you a burger? Because you're meat to be mine! 🍔",
            "Are you chocolate? Because you're looking like a snack! 🍫",
            "Are you popcorn? Because you make my heart pop! 🍿"
        ],
        puns: [
            "Are you a dictionary? Because you're adding meaning to my life! 📚",
            "Do you like math? Because I can add you to my life, subtract your ex, multiply the love and divide the distance! ➗",
            "Are you a cat? Because you're purr-fect! 😺",
            "Do you play soccer? Because you're a keeper! ⚽",
            "Are you a bank loan? Because you've got my interest! 💰",
            "Are you a time traveler? Because I can see you in my future! ⏰",
            "Do you like astronomy? Because you're the star of my life! ⭐",
            "Are you a gardener? Because you've planted yourself in my heart! 🌱",
            "Do you like music? Because we could make a great duet! 🎵",
            "Are you a beaver? Because dam, you're fine! 🦫"
        ]
    };

    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const pickupDisplay = document.getElementById('pickup-line');
    const cringeMeter = document.getElementById('cringe-level');
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    
    let currentCategory = 'cheesy';

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💝';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Generate hearts periodically
    setInterval(createHeart, 300);

    // Generate random pickup line
    function generatePickupLine() {
        const lines = pickupLines[currentCategory];
        const randomIndex = Math.floor(Math.random() * lines.length);
        const line = lines[randomIndex];
        
        // Animate the display
        pickupDisplay.style.opacity = '0';
        setTimeout(() => {
            pickupDisplay.textContent = line;
            pickupDisplay.style.opacity = '1';
        }, 200);

        // Update cringe meter
        const cringeLevel = Math.random() * 100;
        cringeMeter.style.width = cringeLevel + '%';
        
        // Add extra sparkle effect
        createSparkleEffect();
    }

    // Create sparkle effect
    function createSparkleEffect() {
        const sparkles = document.querySelector('.sparkles');
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.innerHTML = '✨';
            sparkles.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    }

    // Copy to clipboard
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(pickupDisplay.textContent)
            .then(() => {
                copyBtn.innerHTML = '<span>Copied! 💖</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = '<span>📋 Copy to Clipboard</span>';
                }, 2000);
            });
    });

    // Category selection
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            generatePickupLine();
        });
    });

    // Generate initial pickup line
    generateBtn.addEventListener('click', generatePickupLine);
    generatePickupLine();

    // Add some CSS animations
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes sparkle {
                0% { transform: scale(0) rotate(0deg); opacity: 0; }
                50% { transform: scale(1) rotate(180deg); opacity: 1; }
                100% { transform: scale(0) rotate(360deg); opacity: 0; }
            }
            .sparkle {
                position: fixed;
                animation: sparkle 1s linear forwards;
                font-size: 24px;
                pointer-events: none;
            }
            #pickup-line {
                transition: opacity 0.2s ease;
            }
        </style>
    `);
});
