var ctx = canvas.getContext("2d");

//le corps
ctx.beginPath();
ctx.moveTo(170, 150);
ctx.lineTo(320, 150);
ctx.lineTo(320, 430);
ctx.lineTo(170, 430);
ctx.lineTo(170, 150);
ctx.fillStyle = "#9C640C";
ctx.fill();
ctx.closePath();

//les bras
ctx.beginPath();
ctx.moveTo(80, 150);
ctx.lineTo(400, 150);
ctx.lineTo(400, 200);
ctx.lineTo(80, 200);
ctx.lineTo(80, 150);
ctx.fillStyle = "#9C640C";
ctx.fill();
ctx.closePath();

//entre-jambe
ctx.beginPath();
ctx.moveTo(218, 330);
ctx.lineTo(270, 330);
ctx.lineTo(270, 430);
ctx.lineTo(218, 430);
ctx.lineTo(218, 300);
ctx.fillStyle = "#FFF8DC";
ctx.fill();
ctx.closePath();

//la tête
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#9C640C';
ctx.arc(246, 100, 70, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//oeuil gauche
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#6E2C00';
ctx.arc(275, 90, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//oeuil droit
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#6E2C00';
ctx.arc(220, 90, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//les boutons
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#EEB9B6';
ctx.arc(244, 210, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#EEB9B6';
ctx.arc(244, 245, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#EEB9B6';
ctx.arc(244, 280, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//sourire
ctx.beginPath();
ctx.moveTo(220,120);
ctx.quadraticCurveTo(242,140,270,120);
ctx.lineWidth = '2';
ctx.strokeStyle='#EE127C';
ctx.stroke();

ctx.moveTo(221,121);
ctx.quadraticCurveTo(245,170,271,120);
ctx.stroke();
ctx.closePath();

//main gauche (methose quadatric curve)
ctx.beginPath();
ctx.moveTo(80,150);
ctx.quadraticCurveTo(40,172,80,200);
ctx.fillStyle='#9C640C';
ctx.fill();

//main droite (methode bezier curve)
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.bezierCurveTo(420, 160, 420, 190, 400, 200);
ctx.fillStyle='#9C640C';
ctx.fill();

//pied gauche (methode bezier curve)
ctx.beginPath();
ctx.moveTo(170, 430);
ctx.bezierCurveTo(175, 460, 213, 460, 218, 430);
ctx.fillStyle='#9C640C';
ctx.fill();

//pied droit (methode bezier curve)
ctx.beginPath();
ctx.moveTo(270, 430);
ctx.bezierCurveTo(273, 460, 317, 460, 320, 430);
ctx.fillStyle='#9C640C';
ctx.fill();

//entre-jambe zezette
ctx.beginPath();
ctx.moveTo(218, 330);
ctx.bezierCurveTo(224, 305, 263, 305, 270, 330);
ctx.fillStyle="#FFF8DC";
ctx.fill();

