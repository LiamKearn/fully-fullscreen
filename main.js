const updateWindow = (window) =>
    browser.windows.update(window.id, {state: "fullscreen"});

browser.windows.getAll().then(
    windowInfoArray => windowInfoArray.forEach(updateWindow),
    console.error
);

browser.windows.onCreated.addListener(window => setTimeout(updateWindow.bind(null, window), 50));
