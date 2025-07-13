function convertToGitBranch(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "copyAsGitBranch") {
    const branchName = convertToGitBranch(message.selectedText);
    
    navigator.clipboard.writeText(branchName).then(() => {
      console.log('Git branch name copied to clipboard:', branchName);
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err);
    });
  }
});