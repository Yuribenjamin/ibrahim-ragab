"use strict";

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.id = `matrix`;

const menuheader = document.createElement('header');
document.body.appendChild(menuheader);
menuheader.id = `menuheader`;

const menudrop = document.createElement('div');
document.getElementById('menuheader').appendChild(menudrop);
menudrop.id = `dropdown`;
menudrop.setAttribute('class','dropdown');

const menuspan = document.createElement('span');
document.getElementById('dropdown').appendChild(menuspan);
menuspan.id = `menuspan`;


const menuicon = document.createElement('i');
document.getElementById('menuspan').appendChild(menuicon);
menuicon.classList = `fas fa-bars`;
menuicon.id = `menuicon`;

const divC = document.createElement('div');
document.getElementById('dropdown').appendChild(divC);
divC.id = `dropdown-content`;
divC.setAttribute('class','dropdown-content');

const link = document.createElement('a');
link.href = `#`;
link.id = `profile`;
link.title = `resume`;
link.setAttribute('aria-label', 'link to my resume');
document.getElementById('dropdown-content').appendChild(link);

const profile = document.createElement('i');
document.getElementById('profile').appendChild(profile);
profile.classList = `fas fa-user`;

const link1 = document.createElement('a');
link1.href = `#`;
link1.id = `profile2`;
link1.title = `projects`;
link1.setAttribute('aria-label', 'link to my projects');
document.getElementById('dropdown-content').appendChild(link1);

const profile2 = document.createElement('i');
document.getElementById('profile2').appendChild(profile2);
profile2.classList = `fas fa-file`;

const link3 = document.createElement('a');
link3.href = `#`;
link3.id = `profile3`;
link3.title = `contact me`;
link3.setAttribute('aria-label', 'link to my contact me');
document.getElementById('dropdown-content').appendChild(link3);

const profile3 = document.createElement('i');
document.getElementById('profile3').appendChild(profile3);
profile3.classList = `fas fa-id-badge`;

const main = document.createElement('main');
document.body.appendChild(main);
main.id = `main`;

const div = document.createElement('div');
document.getElementById('main').appendChild(div);
div.id = `caption`;
div.classList = `caption`;

const text = document.createElement('span');
const textnode = document.createTextNode(`Hello, I'm Ibrahim Ragab former Lawyer and Front-End Web Developer, contact me or stay in touch using links below, always happy to hear from you...`)
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
document.getElementById('linkedin').appendChild(linkedin);

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

const scriptTag = document.createElement('script');
scriptTag.src = `js/canvas.js`;
scriptTag.defer = true;
document.body.appendChild(scriptTag);

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

const css = document.createElement('link');
css.href = `css/app.css`;
css.rel = `stylesheet`;
css.type = `text/css`;
css.defer = true;
document.getElementsByTagName('head')[0].appendChild(css);

const myTime = window.performance.now();
    console.log(myTime);

