// ==========================================
// FPS CHECKER DATABASE
// ==========================================


// ===============================
// CPU DATABASE
// ===============================

const CPUs = {

    "i3-10100": 70,
    "i3-12100F": 85,
    "i3-13100F": 90,
    "i5-10400F": 80,
    "i5-11400F": 90,
    "i5-12400F": 105,
    "i5-13400F": 115,
    "i5-13450HX": 120,
    "i5-13500": 120,
    "i5-13600K": 135,
    "i5-14400F": 120,
    "i5-14600K": 140,

    "i7-10700K": 100,
    "i7-11700K": 110,
    "i7-12700K": 130,
    "i7-13700K": 145,
    "i7-14700K": 155,

    "i9-10900K": 110,
    "i9-12900K": 145,
    "i9-13900K": 160,
    "i9-14900K": 170,

    "Ryzen 5 3600": 75,
    "Ryzen 5 5600": 95,
    "Ryzen 5 5600X": 100,
    "Ryzen 5 7500F": 120,
    "Ryzen 5 7600": 125,
    "Ryzen 5 7600X": 130,
    "Ryzen 5 9600X": 150,

    "Ryzen 7 3700X": 85,
    "Ryzen 7 5700X": 105,
    "Ryzen 7 5800X3D": 130,
    "Ryzen 7 7700": 130,
    "Ryzen 7 7800X3D": 150,
    "Ryzen 7 9700X": 155,
    "Ryzen 7 9800X3D": 165,

    "Ryzen 9 5900X": 115,
    "Ryzen 9 5950X": 120,
    "Ryzen 9 7900X": 150,
    "Ryzen 9 7950X": 160,
    "Ryzen 9 9950X": 175
};


// ===============================
// GPU DATABASE
// ===============================

const GPUs = {

    "GTX 1050": 35,
    "GTX 1050 Ti": 42,
    "GTX 1060": 55,
    "GTX 1070": 70,
    "GTX 1080": 80,

    "GTX 1650": 50,
    "GTX 1660": 65,
    "GTX 1660 Super": 72,
    "GTX 1660 Ti": 75,

    "RTX 2060": 80,
    "RTX 2060 Super": 88,
    "RTX 2070": 95,
    "RTX 2070 Super": 105,
    "RTX 2080": 115,
    "RTX 2080 Ti": 125,

    "RTX 3050 Desktop": 65,
    "RTX 3060": 85,
    "RTX 3060 Ti": 105,
    "RTX 3070": 120,
    "RTX 3070 Ti": 130,
    "RTX 3080": 150,
    "RTX 3080 Ti": 165,
    "RTX 3090": 170,
    "RTX 3090 Ti": 180,

    "RTX 4060": 95,
    "RTX 4060 Ti": 110,
    "RTX 4070": 140,
    "RTX 4070 Super": 155,
    "RTX 4070 Ti": 165,
    "RTX 4070 Ti Super": 175,
    "RTX 4080": 200,
    "RTX 4080 Super": 210,
    "RTX 4090": 240,

    "RTX 5050": 100,
    "RTX 5060": 125,
    "RTX 5060 Ti": 140,
    "RTX 5070": 165,
    "RTX 5070 Ti": 190,
    "RTX 5080": 230,
    "RTX 5090": 280,

    "RX 570": 45,
    "RX 580": 50,
    "RX 590": 55,

    "RX 5500 XT": 60,
    "RX 5600 XT": 75,
    "RX 5700": 85,
    "RX 5700 XT": 95,

    "RX 6600": 80,
    "RX 6600 XT": 90,
    "RX 6650 XT": 95,
    "RX 6700 XT": 110,
    "RX 6750 XT": 120,
    "RX 6800": 130,
    "RX 6800 XT": 145,
    "RX 6900 XT": 155,

    "RX 7600": 90,
    "RX 7600 XT": 100,
    "RX 7700 XT": 125,
    "RX 7800 XT": 145,
    "RX 7900 GRE": 155,
    "RX 7900 XT": 175,
    "RX 7900 XTX": 195,

    "Intel Arc A380": 45,
    "Intel Arc A580": 70,
    "Intel Arc A750": 85,
    "Intel Arc A770": 95
};


// ===============================
// GAME DATABASE
// ===============================

const Games = {

    "Valorant": 1.8,

    "Counter-Strike 2": 1.2,

    "Fortnite": 0.95,

    "Minecraft": 1.4,

    "GTA V": 1.0,

    "Forza Horizon 5": 0.75,

    "Forza Motorsport": 0.65,

    "Apex Legends": 0.95,

    "Overwatch 2": 1.25,

    "Rocket League": 1.8,

    "Rainbow Six Siege": 1.4,

    "Cyberpunk 2077": 0.55,

    "Red Dead Redemption 2": 0.55,

    "Hogwarts Legacy": 0.55,

    "Elden Ring": 0.65,

    "Call of Duty Warzone": 0.65
};


// ===============================
// HTML ELEMENTS
// ===============================

const cpuSelect =
    document.getElementById("cpu");

const gpuSelect =
    document.getElementById("gpu");

const gameSelect =
    document.getElementById("game");

const ramSelect =
    document.getElementById("ram");

const channelSelect =
    document.getElementById("channel");

const resolutionSelect =
    document.getElementById("resolution");

const graphicsSelect =
    document.getElementById("graphics");

const upscalingSelect =
    document.getElementById("upscaling");

const calculateButton =
    document.getElementById("calculateBtn");

const resultSection =
    document.getElementById("resultSection");


// ===============================
// LOAD CPUs
// ===============================

for (const cpu in CPUs) {

    const option =
        document.createElement("option");

    option.value = cpu;

    option.textContent = cpu;

    cpuSelect.appendChild(option);
}


// ===============================
// LOAD GPUs
// ===============================

for (const gpu in GPUs) {

    const option =
        document.createElement("option");

    option.value = gpu;

    option.textContent = gpu;

    gpuSelect.appendChild(option);
}


// ===============================
// LOAD GAMES
// ===============================

for (const game in Games) {

    const option =
        document.createElement("option");

    option.value = game;

    option.textContent = game;

    gameSelect.appendChild(option);
}


// ===============================
// GAME LIST
// ===============================

const gameList =
    document.getElementById("gameList");

for (const game in Games) {

    const item =
        document.createElement("div");

    item.className = "game-item";

    item.textContent = game;

    gameList.appendChild(item);
}


// ===============================
// CALCULATE FPS
// ===============================

calculateButton.addEventListener(
    "click",
    calculateFPS
);


function calculateFPS() {

    const cpu = cpuSelect.value;

    const gpu = gpuSelect.value;

    const game = gameSelect.value;

    const ram =
        Number(ramSelect.value);

    const channel =
        channelSelect.value;

    const resolution =
        resolutionSelect.value;

    const graphics =
        graphicsSelect.value;

    const upscaling =
        upscalingSelect.value;


    // Check required selections

    if (!cpu || !gpu || !game) {

        alert(
            "Please select your CPU, GPU and game."
        );

        return;
    }


    // Get performance values

    const cpuPower =
        CPUs[cpu];

    const gpuPower =
        GPUs[gpu];

    const gameMultiplier =
        Games[game];


    // ===============================
    // BASE FPS
    // ===============================

    let fps =
        gpuPower *
        gameMultiplier;


    // ===============================
    // CPU LIMIT
    // ===============================

    const cpuFactor =
        cpuPower / 100;

    fps *=
        Math.min(
            1.15,
            0.70 + cpuFactor * 0.30
        );


    // ===============================
    // RAM
    // ===============================

    if (ram === 8) {

        fps *= 0.82;

    } else if (ram === 16) {

        fps *= 1.0;

    } else if (ram === 32) {

        fps *= 1.04;

    } else if (ram === 64) {

        fps *= 1.05;
    }


    // ===============================
    // RAM CHANNEL
    // ===============================

    if (channel === "single") {

        fps *= 0.90;

    } else {

        fps *= 1.00;
    }


    // ===============================
    // RESOLUTION
    // ===============================

    if (resolution === "1080") {

        fps *= 1.00;

    } else if (resolution === "1440") {

        fps *= 0.70;

    } else if (resolution === "2160") {

        fps *= 0.40;
    }


    // ===============================
    // GRAPHICS
    // ===============================

    const graphicsMultiplier = {

        low: 1.35,

        medium: 1.15,

        high: 1.00,

        ultra: 0.78

    };


    fps *=
        graphicsMultiplier[graphics];


    // ===============================
    // UPSCALING
    // ===============================

    const upscalingMultiplier = {

        off: 1.00,

        quality: 1.15,

        balanced: 1.28,

        performance: 1.45

    };


    fps *=
        upscalingMultiplier[upscaling];


    // ===============================
    // RANDOM VARIATION
    // ===============================

    const variation =
        0.90 +
        Math.random() * 0.20;

    fps *= variation;


    // ===============================
    // ROUND FPS
    // ===============================

    fps =
        Math.max(
            10,
            Math.round(fps)
        );


    // ===============================
    // 1% LOW
    // ===============================

    const lowFPS =
        Math.max(
            5,
            Math.round(fps * 0.70)
        );


    // ===============================
    // FPS RANGE
    // ===============================

    const minFPS =
        Math.round(fps * 0.88);

    const maxFPS =
        Math.round(fps * 1.12);


    // ===============================
    // DISPLAY
    // ===============================

    document.getElementById(
        "fpsResult"
    ).textContent =
        fps + " FPS";


    document.getElementById(
        "fpsRange"
    ).textContent =
        minFPS +
        " - " +
        maxFPS +
        " FPS";


    document.getElementById(
        "averageFPS"
    ).textContent =
        fps + " FPS";


    document.getElementById(
        "lowFPS"
    ).textContent =
        lowFPS + " FPS";


    // ===============================
    // RESOLUTION TEXT
    // ===============================

    let resolutionText;

    if (resolution === "1080") {

        resolutionText = "1080p";

    } else if (resolution === "1440") {

        resolutionText = "1440p";

    } else {

        resolutionText = "4K";
    }


    document.getElementById(
        "resultResolution"
    ).textContent =
        resolutionText;


    // ===============================
    // PERFORMANCE BAR
    // ===============================

    const performance =
        Math.min(
            100,
            (fps / 240) * 100
        );


    document.getElementById(
        "performanceFill"
    ).style.width =
        performance + "%";


    // ===============================
    // PERFORMANCE TEXT
    // ===============================

    let performanceText;


    if (fps >= 240) {

        performanceText =
            "Excellent • 240+ FPS";

    } else if (fps >= 144) {

        performanceText =
            "Excellent • 144+ FPS";

    } else if (fps >= 100) {

        performanceText =
            "Very Good • 100+ FPS";

    } else if (fps >= 60) {

        performanceText =
            "Good • 60+ FPS";

    } else if (fps >= 30) {

        performanceText =
            "Playable • 30+ FPS";

    } else {

        performanceText =
            "Low • Under 30 FPS";
    }


    document.getElementById(
        "performanceText"
    ).textContent =
        performanceText;


    // ===============================
    // SYSTEM SUMMARY
    // ===============================

    document.getElementById(
        "systemSummary"
    ).textContent =
        cpu +
        " + " +
        gpu +
        " • " +
        ram +
        " GB RAM • " +
        channel +
        " • " +
        game +
        " • " +
        resolutionText +
        " • " +
        graphics;


    // ===============================
    // SHOW RESULT
    // ===============================

    resultSection.classList.remove(
        "hidden"
    );


    // Scroll to result

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}