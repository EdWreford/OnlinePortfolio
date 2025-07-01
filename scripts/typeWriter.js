const typeWriter = (element, text, speed = 50) => {
        return new Promise((resolve) => {
            let i = 0;
            const interval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
            }, speed);
        });
        };

        async function runSequence() {
            const title = document.getElementById('bigTitle');
            const subtitle = document.getElementById('categoryTitle');

            await typeWriter(title, "Project Title", 75);
            await typeWriter(subtitle, "Subtitle", 50);
        }

        runSequence();