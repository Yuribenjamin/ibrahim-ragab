"use strict";const matrix=document.getElementById("matrix"),ctx=matrix.getContext("2d");matrix.height=window.outerHeight,matrix.width=window.outerWidth;let words="abcdefghijklmnopqrstuvwxyz1234567890零一二三四五六七八九十";words=words.split("");const font_size=14,columns=matrix.width/font_size,drops=[];for(let t=0;t<columns;t++)drops[t]=1;function draw(){ctx.fillStyle="rgba(0, 0, 0, 0.05)",ctx.fillRect(0,0,matrix.width,matrix.height),ctx.fillStyle="#0F0",ctx.font=font_size+"px arial";for(let t=0;t<drops.length;t++){const i=words[Math.floor(Math.random()*words.length)];ctx.fillText(i,t*font_size,drops[t]*font_size),drops[t]*font_size>matrix.height&&Math.random()>.975&&(drops[t]=0),drops[t]++}}setInterval(draw,33);