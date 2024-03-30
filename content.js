function extractInfo() {
  const title = document.title;
  const url = window.location.href;
  const bodyText = Array.from(document.querySelectorAll('article > h2,p'))
    .map((p) => p.textContent.replaceAll('\n', '').trim())
    .filter((text) => text.length > 0)
    .join('\n\n');

  let trimmedBodyText = bodyText.substring(0, 500);

  if (trimmedBodyText.length < bodyText.length) {
    trimmedBodyText = trimmedBodyText + '...';
  }

  console.log({ title, url, bodyText });
  return { title, url, bodyText: trimmedBodyText };
}

function openMailDialog(info) {
  const subject = encodeURIComponent(info.title);

  var gettingItem = browser.storage.local.get(['emailTo', 'emailFrom']);
  gettingItem.then((res) => {
    if (!res.emailTo || !res.emailFrom) {
      alert('Please set the emailTo and emailFrom addresses in the extension options.');
      return;
    }

    const to = res.emailTo;
    const from = res.emailFrom;
    const body = encodeURIComponent(`${info.url}\n\n${info.bodyText}`);

    const mailtoLink = `mailto:?subject=${subject}&body=${body}&to=${to}&from=${from}`;
    window.location.href = mailtoLink;
  }, (err) => alert(err.message));
}

openMailDialog(extractInfo());
