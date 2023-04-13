const delay = ms => new Promise(res => setTimeout(res, ms));

async function play() {
    const target = event.target;
    let urls = ['media/1.mp3','media/2.mp3',]
    const url = urls[Math.floor(Math.random() * urls.length)];
    new Audio(url).play();
    target.style.animation = 'gelatine 0.5s'
    await delay(500)
    target.style.animation = 'none'
}