function saveOptions() {
  var emailTo = document.getElementById('emailTo').value;
  var emailFrom = document.getElementById('emailFrom').value;

  browser.storage.local.set({
    emailTo: emailTo,
    emailFrom: emailFrom
  });
  alert('Options saved.');
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get(['emailTo', 'emailFrom']);
  gettingItem.then((res) => {
    document.getElementById('emailTo').value = res.emailTo || '';
    document.getElementById('emailFrom').value = res.emailFrom || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
