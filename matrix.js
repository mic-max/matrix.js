const FONT_PX = 14;
var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
var delay = 60;
var color = '#08f';
var rand = 0.97;
const CLS = [0, 0, 0, 0.1];

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let drops = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

for(var i = 0; i < canvas.width / font; i++)
	drops.push(Math.random() * -8);

ctx.font = `${FONT_PX}px monospace`;

setInterval(function() {
	ctx.fillStyle = 'rgba(' + CLS.join() + ')';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = color;

	for(var i = 0; i < drops.length; i++) {
		ctx.fillText(
			chars[Math.floor(Math.random() * chars.length)],
			i * font,
			drops[i] * font
		);

		if(drops[i] * font > canvas.height && Math.random() > rand)
			drops[i] = 0;
		drops[i]++;
	}
}, delay);
