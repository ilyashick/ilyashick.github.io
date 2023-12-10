let rawtier = new Decimal("100")
let tier = new Decimal("1")
let rawdifficulty = new Decimal("1")
let difficulty = new Decimal("0")
let progcounter = new Decimal("0")
let rank = 0
let header = document.querySelector("#big-header");
let block1 = document.querySelector(".block-1");
let block2 = document.querySelector(".block-2");
let block3 = document.querySelector(".block-3");
let block4 = document.querySelector(".block-4");
let block5 = document.querySelector(".block-5");
let footer = document.querySelector(".footer-block");

function beginButton() {
    let beginningButton = document.querySelector('.beginning-button');
    let downloadButton = document.querySelector('.download-roblox-button');
    beginningButton.style.display = 'none';
    downloadButton.style.display = 'block';
    header.style.display = "flex";
    footer.style.display = "flex";
    block2.style.display = "flex";
    block5.style.display = "flex";
}

let activeButton = null
let activeProgress = null
let downloadProgress = 0
let downloadInterval;

function toggleDownload(button) {
    const downloadProgbar = button.querySelector('.download-progbar');
    if (!downloadInterval) {
        activeButton = button
        downloadInterval = setInterval(() => {
            downloadProgress += 0.5;
            downloadProgbar.style.width = `${downloadProgress}%`;
            if (downloadProgress >= 100) {
                clearInterval(downloadInterval);
                button.style.display = 'none';
                downloadProgress = 0;
                block2.style.width = "33.333%";
                block5.style.width = "33.333%";
                block1.style.display = "flex";
                block3.style.display = "flex";
                block4.style.display = "flex";
                rank = 1;
                document.getElementById("rank-text").textContent = "Ultimate Noob";
                showRankNotification();
            }
        }, 50);
        activeProgress = downloadInterval
    } else {
        clearInterval(downloadInterval);
        downloadInterval = null;
        activeProgress = null
        activeButton = null
    }
}

function showRankNotification() {
    const notification = document.getElementById('rank-notification');
    notification.textContent = 'GG! New rank!';
    notification.style.opacity = '1';
    notification.style.visibility = 'visible';
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        notification.style.visibility = 'hidden';
      }, 500); // Время анимации затемнения
    }, 900); // Время показа текста
  }