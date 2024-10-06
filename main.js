const fullscreenWindow = (window) => browser.windows.update(window.id, {state: "fullscreen"});

browser.windows.getAll().then(
    windowInfoArray => windowInfoArray.forEach(fullscreenWindow),
    console.error
);

browser.windows.onCreated.addListener(window =>
    setTimeout(fullscreenWindow.bind(null, window), 50));
