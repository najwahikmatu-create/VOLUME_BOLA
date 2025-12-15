const PI_BOLA = 3.14;
const PENGALI_RUMUS = 4/3; // Konstanta (4/3) dari rumus volume bola

function hitungVolumeBola() {
    const jarijari = parseFloat(document.getElementById('jarijari').value);

    if (isNaN(jarijari) || jarijari <= 0) {
        alert("🚨 Harap masukkan nilai numerik yang valid (lebih dari 0) untuk Jari-Jari.");
        return;
    }

    const volume = PENGALI_RUMUS * PI_BOLA * jarijari * jarijari * jarijari;

    alert(`🎉 Hasil Perhitungan Volume Bola:\nJari-Jari: ${jarijari}\nKonstanta Pi: ${PI_BOLA}\n-------------------------\nVolume: ${volume.toFixed(2)}`);
}