const switchButton = document.getElementById("switch-button-checkbox");

switchButton.addEventListener("change", function () {
  if (this.checked) {
    browser.storage.local.set({ active: true });
    browser.tabs.executeScript({ file: "../content_scripts/dictionary.js" });
  } else {
    browser.storage.local.set({ active: false });
  }
});

browser.tabs
  .executeScript({ file: "background/background.js" })
  .then(switchButton)
  .catch(console.log("ooooo"));
