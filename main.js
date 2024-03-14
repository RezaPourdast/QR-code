const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const generateBtn = document.getElementById("generateBtn");

function generateQrCode() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}

generateBtn.addEventListener("click", () => {
  if (qrText.value) {
    generateQrCode();
    imgBox.classList.add("show-img");
    qrText.value = "";
  }
});

qrText.addEventListener("keypress", (e) => {
  if (qrText.value) {
    if (e.key === "Enter") {
      generateQrCode();
      imgBox.classList.add("show-img");
      qrText.blur();
      qrText.value = "";
    }
  }
});
