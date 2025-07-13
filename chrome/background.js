chrome.contextMenus.create({
  id: "copy-as-git-branch",
  title: "Copy as Git branch",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-as-git-branch") {
    chrome.tabs.sendMessage(tab.id, {
      action: "copyAsGitBranch",
      selectedText: info.selectionText
    });
  }
});