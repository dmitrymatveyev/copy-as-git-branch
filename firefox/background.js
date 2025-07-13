browser.contextMenus.create({
  id: "copy-as-git-branch",
  title: "Copy as Git branch",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-as-git-branch") {
    browser.tabs.sendMessage(tab.id, {
      action: "copyAsGitBranch",
      selectedText: info.selectionText
    });
  }
});