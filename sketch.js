let fazenda = [];
let cidade = [];
let emojis = ["🌽", "🐄", "🚜", "🏢", "🚗"];

function setup() {
  createCanvas(800, 500);
  background(240, 248, 255);
  
  // Cria elementos iniciais
  for (let i = 0; i < 5; i++) {
    fazenda.push({
      x: random(100, 300),
      y: random(100, 400),
      emoji: random(["🌾", "🐓", "🐝"])
    });
    
    cidade.push({
      x: random(500, 700),
      y: random(100, 400),
      emoji: random(["🏪", "🏠", "🚲"])
    });
  }
}

function draw() {
  background(240, 248, 255);
  
  // Desenha divisão campo/cidade
  stroke(50);
  line(width/2, 0, width/2, height);
  
  // Título
  fill(46, 139, 87);
  textSize(24);
  text("🌾 Agricultura → 🏙 Cidade", width/2 - 120, 50);
  
  // Desenha fazenda
  fill(34, 139, 34);
  textSize(16);
  text("Campo", 150, 80);
  
  for (let item of fazenda) {
    textSize(30);
    text(item.emoji, item.x, item.y);
  }
  
  // Desenha cidade
  fill(70, 130, 180);
  textSize(16);
  text("Cidade", 650, 80);
  
  for (let item of cidade) {
    textSize(30);
    text(item.emoji, item.x, item.y);
  }
  
  // Instrução interativa
  fill(0);
  textSize(14);
  text("Clique para adicionar elementos!", width/2 - 100, height - 20);
}

function mousePressed() {
  // Adiciona elementos aleatórios onde o usuário clicar
  if (mouseX < width/2) {
    fazenda.push({
      x: mouseX,
      y: mouseY,
      emoji: random(["🌽", "🐖", "🚜"])
    });
  } else {
    cidade.push({
      x: mouseX,
      y: mouseY,
      emoji: random(["🏢", "🚗", "📱"])
    });
  }
}