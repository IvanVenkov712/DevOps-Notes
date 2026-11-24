(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const slides = [...document.querySelectorAll(
        '[data-slidev-no]'
    )];

    const results = [];

    for (let i = 0; i < slides.length; i++) {
        await sleep(500);

        const slide = slides[i];
        const number = slide.dataset.slidevNo;
        const title = slide.querySelector("h1")?.textContent
            || `Slide ${number}`;

        const button = document.querySelector(".notes-button");

        let notes = "";

        if (button) {
            button.click();
            await sleep(300);

            notes = document.querySelector(".notes-body")
                ?.innerText.trim() || "";

            document.querySelector(".notes-close")?.click();
            await sleep(100);
        }

        results.push({ number, title, notes });

        console.log(`Slide ${number}: ${title}`, notes);

        if (i < slides.length - 1) {
            document.querySelector(
                'button[title="Go to next slide"]'
            )?.click();
        }
    }

    const markdown = results.map(({ number, title, notes }) =>
        `## ${number}. ${title}\n\n${notes || "*No notes*"}`
    ).join("\n\n---\n\n");

    const blob = new Blob([markdown], {
        type: "text/markdown;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "lecture-notes.md";
    a.click();

    URL.revokeObjectURL(url);
})();
