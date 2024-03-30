browser.browserAction.onClicked.addListener((tab) => {
  console.log('Action clicked!');
  browser.tabs.executeScript({
    file: 'content.js'
  });
});
