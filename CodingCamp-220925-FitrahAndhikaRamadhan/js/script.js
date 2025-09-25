document.addEventListener('DOMContentLoaded', function() {
  // Live clock (Jakarta/WIB)
  const timeEl = document.getElementById('current-time');
  function updateTime() {
    const now = new Date();
    const formatted = now.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    timeEl.textContent = formatted + ' (WIB)';
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Handle form submission with minimal validation feedback
  const messageForm = document.getElementById('message-form');
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama');
    const tgl = document.getElementById('tanggal-lahir');
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    const pesan = document.getElementById('pesan');

    if (!nama.value.trim()) { nama.focus(); return; }
    if (!tgl.value) { tgl.focus(); return; }
    if (!gender) { alert('Pilih jenis kelamin'); return; }
    if (!pesan.value.trim()) { pesan.focus(); return; }

    document.getElementById('output-nama').innerText = nama.value.trim();
    document.getElementById('output-tanggal-lahir').innerText = tgl.value;
    document.getElementById('output-jenis-kelamin').innerText = gender.value;
    document.getElementById('output-pesan').innerText = pesan.value.trim();

    messageForm.reset();
  });
});
