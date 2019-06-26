"use strict";

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.id = `matrix`;

const main = document.createElement('main');
document.body.appendChild(main);
main.id = `main`;

const div = document.createElement('div');
document.getElementById('main').appendChild(div);
div.id = `caption`;
div.classList = `caption`;

const text = document.createElement('span');
const textnode = document.createTextNode(`Hello, I'm Ibrahim Ragab former Lawyer and Front-End Web Developer. Contact me or stay in touch using links below. Always happy to hear from you.`)
document.getElementById('caption').appendChild(text);
text.id = `str`;
text.classList = `text`;
text.appendChild(textnode);

const cursorType = document.createElement('span');
cursorType.classList = `type-cursor`;
const cursorNode = document.createTextNode(`|`);
document.getElementById('caption').appendChild(cursorType);
cursorType.appendChild(cursorNode);


const footer = document.createElement('footer');
document.body.appendChild(footer);

const twitterLink = document.createElement('a');
twitterLink.href = `https://twitter.com/AbrahamRagab`;
twitterLink.target = '_blank';
twitterLink.rel = 'noopener';
twitterLink.id = `twitter`;
twitterLink.setAttribute('aria-label', 'link to my twitter account');
footer.appendChild(twitterLink);

const twitter = document.createElement('i');
twitter.classList = `fab fa-twitter`;
twitter.title = `Ibrahim Ragab twitter Profile`;
document.getElementById('twitter').appendChild(twitter);

const githubLink = document.createElement('a');
githubLink.href = `https://github.com/Yuribenjamin`;
githubLink.target = '_blank';
githubLink.rel = 'noopener';
githubLink.id = `github`;
githubLink.setAttribute('aria-label', 'link to my github account');
footer.appendChild(githubLink);

const github = document.createElement('i');
github.classList = `fab fa-github`;
github.title = `Ibrahim Ragab github Profile`;
document.getElementById('github').appendChild(github);

const linkedinLink = document.createElement('a');
linkedinLink.href = `https://www.linkedin.com/in/abrahamragab/`;
linkedinLink.target = '_blank';
linkedinLink.rel = 'noopener';
linkedinLink.id = `linkedin`;
linkedinLink.setAttribute('aria-label', 'link to my linked account');
footer.appendChild(linkedinLink);

const linkedin = document.createElement('i');
linkedin.classList = `fab fa-linkedin`;
linkedin.title = `Ibrahim Ragab linkedin Profile`;
document.getElementById('linkedin').appendChild(linkedin);

const devTo = document.createElement('a');
devTo.href = `https://dev.to/yuribenjamin`;
devTo.target = '_blank';
devTo.rel = 'noopener';
devTo.id = `devTo`;
devTo.setAttribute('aria-label','link to my Dev.to');
footer.appendChild(devTo);

const devLink = document.createElement('i');
devLink.classList = `fab fa-dev`
devLink.title = `Ibrahim Ragab DEV Profile`;
document.getElementById('devTo').appendChild(devLink);

let pos = 0;
let speed = 150;
let speedBackWard = 20;
const str = document.getElementById('str').innerText;
document.getElementById('str').innerText = '';
function type() {
    if(pos < str.length) {
        document.getElementById('str').innerText += str.charAt(pos);
        pos++;
        setTimeout(type,speed);
    }else {
        setTimeout(erase, speedBackWard)
    }
}
setTimeout(type,speed);
function erase() {
    if(pos >= 0) {
        var temp = str.substring(0, pos);
        document.getElementById('str').innerText = temp;
        pos --;
        setTimeout(erase, speedBackWard)
    }else {
        setTimeout(type, speed)
    }
}



const serviceWorker = document.createElement('script');
serviceWorker.src = `js/serviceWorker.js`;
document.getElementsByTagName('head')[0].appendChild(serviceWorker);

const fontAwesome = document.createElement('link');
fontAwesome.href = `https://use.fontawesome.com/releases/v5.8.1/css/all.css`;
fontAwesome.integrity = `sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf`;
fontAwesome.rel = `stylesheet`;
fontAwesome.type = `text/css`;
fontAwesome.defer = true;
fontAwesome.crossOrigin = `anonymous`;
document.getElementsByTagName('head')[0].appendChild(fontAwesome);

const manifest= document.createElement('link');
manifest.href = `./manifest.json`;
manifest.rel = `manifest`;
document.getElementsByTagName('head')[0].appendChild(manifest);

const siteIcon = document.createElement('link');
siteIcon.rel = `icon`;
siteIcon.href = `./assets/matrix.png`;
siteIcon.type = `image/png`;
siteIcon.sizes = `16x16`;
document.getElementsByTagName('head')[0].appendChild(siteIcon);

const css = document.createElement('link');
css.href = `css/app.css`;
css.rel = `stylesheet`;
css.type = `text/css`;
css.defer = true;
document.getElementsByTagName('head')[0].appendChild(css);