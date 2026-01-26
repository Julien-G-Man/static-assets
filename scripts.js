document.addEventListener('click', (e) => {
  const asset = e.target.closest('.asset');
  if (!asset) return;

  const path = asset.querySelector('p').innerText;
  const url = `${window.location.origin}${path}`;

  navigator.clipboard.writeText(url);
  alert('Asset URL copied');
});
