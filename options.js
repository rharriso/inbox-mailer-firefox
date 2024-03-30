function saveOptions() {
  const emailTo = document.getElementById('emailTo').value;
  const emailFrom = document.getElementById('emailFrom').value;
  const charCount = document.getElementById('charCount').value || 100;

  browser.storage.local.set({
    emailTo: emailTo,
    emailFrom: emailFrom,
    charCount: charCount
  });
  alert('Options saved.');
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get(['emailTo', 'emailFrom', 'charCount']);
  gettingItem.then((res) => {
    document.getElementById('emailTo').value = res.emailTo || '';
    document.getElementById('emailFrom').value = res.emailFrom || '';
    document.getElementById('charCount').value = res.charCount || 100;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
