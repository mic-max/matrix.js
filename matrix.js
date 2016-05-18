var font = 10;
var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
var delay = 60;
var color = '#08f';
var rand = 0.97;
var cls = [0, 0, 0, 0.1];

var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var drops = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

for(var i = 0; i < canvas.width / font; i++)
	drops[i] = Math.random() * -8;

ctx.font = font + 'px monospace';

setInterval(function() {
	ctx.fillStyle = 'rgba(' + cls.join() + ')';
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
