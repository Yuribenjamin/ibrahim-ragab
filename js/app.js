const div = document.createElement('div');
document.body.appendChild(div);
div.id = `caption`;
div.classList = `caption`;
const text = document.createElement('span');
const textnode = document.createTextNode(`Hello I'm Ibrahim Ragab former lawyer and front-end web developer, if you'd like to stay in touch check links below, always happy to hear from you! `)
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
footer.appendChild(twitterLink);
const twitter = document.createElement('i');
twitter.classList = `fab fa-twitter`;
document.getElementById('twitter').appendChild(twitter);
const githubLink = document.createElement('a');
githubLink.href = `https://github.com/Yuribenjamin`;
githubLink.target = '_blank';
githubLink.rel = 'noopener';
githubLink.id = `github`;
footer.appendChild(githubLink);
const github = document.createElement('i');
github.classList = `fab fa-github`;
document.getElementById('github').appendChild(github);
const linkedinLink = document.createElement('a');
linkedinLink.href = `https://www.linkedin.com/in/abrahamragab/`;
linkedinLink.target = '_blank';
linkedinLink.rel = 'noopener';
linkedinLink.id = `linkedin`;
footer.appendChild(linkedinLink);
const linkedin = document.createElement('i');
linkedin.classList = `fab fa-linkedin`;
document.getElementById('linkedin').appendChild(linkedin);
let pos = 0;
let speed = 200;
let speedBackWard = 50;
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