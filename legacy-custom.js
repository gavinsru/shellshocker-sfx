let legacyBasicInterval = setInterval(() => {
    if (typeof BAWK === "undefined" || !BAWK.sounds || !Object.keys(BAWK.sounds)[0] || !BAWK.sounds[Object.keys(BAWK.sounds)[0]].buffer) return;
    clearInterval(legacyBasicInterval);

    // Load your custom sounds JSON
    BAWK.load("https://cdn.jsdelivr.net/gh/gavinsru/shellshocker-sfx@latest/sounds.json");

    // Override shoot sound with your custom boom sound (assumes "customBoom" in your JSON)
    BAWK.sounds['shoot'] = BAWK.sounds['customBoom'];

    // Rename items and modify meshes like legacy
    extern.catalog.findItemsByIds([3000, 3100, 3400, 3600, 3800, 4000, 4200]).forEach(item => {
        item.name = item.name.replace(" ", " Legacy ");
        item.item_data.meshName += "_Legacy";
    });
}, 250);
