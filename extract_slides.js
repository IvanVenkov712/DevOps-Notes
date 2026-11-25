
(async () => {
    async function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    await loadScript(
        "https://cdn.jsdelivr.net/npm/turndown/dist/turndown.js"
    );

    await loadScript(
        "https://cdn.jsdelivr.net/npm/turndown-plugin-gfm/dist/turndown-plugin-gfm.js"
    );

    await loadScript(
        "https://cdn.jsdelivr.net/npm/jszip/dist/jszip.min.js"
    );

    const turndown = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
        bulletListMarker: "-"
    });

    turndown.use(turndownPluginGfm.gfm);
    turndown.remove(["button", "script", "style"]);

    const zip = new JSZip();
    const images = zip.folder("images");

    const slides = [...document.querySelectorAll(
        "[data-slidev-no]"
    )];

    if (!slides.length) {
        throw new Error("Не са намерени слайдове.");
    }

    const results = [];
    let imageCounter = 0;

    for (const slide of slides) {
        const number = slide.dataset.slidevNo;

        const content = slide.querySelector(
            ".slidev-layout"
        )?.cloneNode(true);

        if (!content) continue;

        // Извличане на изображенията
        for (const img of content.querySelectorAll("img")) {
            const url = img.src;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(response.status);
                }

                const blob = await response.blob();

                const ext = new URL(url).pathname
                    .split(".").pop() || "png";

                const name = `image-${++imageCounter}.${ext}`;

                images.file(name, blob);
                img.setAttribute("src", `images/${name}`);
            } catch (error) {
                console.warn("Image failed:", url);
            }
        }

        // Запазване на SVG диаграмите
        for (const svg of content.querySelectorAll("svg")) {
            svg.setAttribute(
                "xmlns",
                "http://www.w3.org/2000/svg"
            );

            const name = `diagram-${++imageCounter}.svg`;

            images.file(
                name,
                new XMLSerializer().serializeToString(svg)
            );

            const img = document.createElement("img");
            img.setAttribute("src", `images/${name}`);
            img.alt = "Diagram";

            svg.replaceWith(img);
        }

        const markdown = turndown.turndown(content);

        results.push(
            `<!-- Slide ${number} -->\n\n${markdown}`
        );

        console.log(`Exported slide ${number}`);
    }

    zip.file(
        "slides.md",
        results.join("\n\n---\n\n")
    );

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "presentation.zip";
    a.click();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
})();
