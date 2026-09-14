const form = document.getElementById('orderForm');
const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const frase = document.getElementById('frase');
const furos = document.getElementById('furos');
const produto = document.getElementById('produto');
const obs = document.getElementById('obs');

const previewPlaque = document.getElementById('previewPlaque');
const previewNome = document.getElementById('previewNome');
const previewVisual = document.getElementById('previewVisual');
const previewAno = document.getElementById('previewAno');
const previewProduto = document.getElementById('previewProduto');
const previewMedida = document.getElementById('previewMedida');
const previewDescricao = document.getElementById('previewDescricao');

const previewHole1 = previewPlaque.querySelector('.mh1');
const previewHole2 = previewPlaque.querySelector('.mh2');
const previewHole3 = previewPlaque.querySelector('.mh3');
const previewHole4 = previewPlaque.querySelector('.mh4');

const whatsappNumber = '5511911801381';

const produtos = {
  'plaqueta-motor': {
    nome: 'Plaqueta de motor',
    medida: '100 × 40 mm',
    descricao: 'Plaqueta personalizada de 100 × 40 mm, ideal para aplicação no cofre do motor. Pode ser produzida com ou sem a furação padrão do modelo.',
    visual: '▰────────╱╲───────▰',
    formato: 'motor'
  },

  'retrovisor-interno': {
    nome: 'Enfeite para retrovisor interno',
    medida: '50 × 30 mm',
    descricao: 'Peça personalizada de 50 × 30 mm, desenvolvida para uso no retrovisor interno. Quando escolhida com furos, utiliza 2 furos superiores.',
    visual: '◻ IMAGEM ◻',
    formato: 'compacto'
  },

  'chaveiro-personalizado': {
    nome: 'Chaveiro personalizado',
    medida: '50 × 30 mm',
    descricao: 'Peça personalizada de 50 × 30 mm, compacta e ideal para chaveiro automotivo. Quando escolhida com furo, utiliza 1 furo superior para fixação.',
    visual: '◻ IMAGEM ◻',
    formato: 'compacto'
  }
};

function resetPreviewHoles() {
  const holes = [previewHole1, previewHole2, previewHole3, previewHole4];

  holes.forEach((hole) => {
    hole.style.display = 'none';
    hole.style.left = '';
    hole.style.right = '';
    hole.style.top = '';
    hole.style.bottom = '';
    hole.style.transform = '';
  });
}

function applyPreviewHoles(produtoAtual, furosAtivos) {
  resetPreviewHoles();

  if (!furosAtivos) {
    return;
  }

  if (produtoAtual === 'plaqueta-motor') {
    previewHole1.style.display = 'block';
    previewHole2.style.display = 'block';
    previewHole3.style.display = 'block';
    previewHole4.style.display = 'block';
    return;
  }

  if (produtoAtual === 'retrovisor-interno') {
    previewHole1.style.display = 'block';
    previewHole2.style.display = 'block';
    return;
  }

  if (produtoAtual === 'chaveiro-personalizado') {
    previewHole1.style.display = 'block';
    previewHole1.style.left = '50%';
    previewHole1.style.right = 'auto';
    previewHole1.style.top = '10px';
    previewHole1.style.bottom = 'auto';
    previewHole1.style.transform = 'translateX(-50%)';
  }
}

function updatePreviewFormat(produtoAtual) {
  const info = produtos[produtoAtual];

  if (info.formato === 'motor') {
    previewPlaque.style.aspectRatio = '2.5 / 1';
    previewPlaque.style.maxWidth = '100%';
    previewVisual.textContent = info.visual;
  } else {
    previewPlaque.style.aspectRatio = '5 / 3';
    previewPlaque.style.maxWidth = '240px';
    previewVisual.textContent = info.visual;
  }

  previewPlaque.style.marginInline = 'auto';
  previewProduto.textContent = info.nome;
  previewMedida.textContent = info.medida;
  previewDescricao.textContent = info.descricao;
}

function updatePreview() {
  const produtoAtual = produto.value;
  const info = produtos[produtoAtual];

  previewNome.textContent = nome.value.trim() || 'Seu veículo';
  previewAno.textContent = ano.value.trim() || 'Ano / período';

  updatePreviewFormat(produtoAtual);
  applyPreviewHoles(produtoAtual, furos.value === 'Sim');
}

nome.addEventListener('input', updatePreview);
ano.addEventListener('input', updatePreview);
produto.addEventListener('change', updatePreview);
furos.addEventListener('change', updatePreview);

updatePreview();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const produtoAtual = produtos[produto.value];

  const message = [
    'Olá! Gostaria de pedir uma peça automotiva personalizada.',
    '',
    `Produto: ${produtoAtual.nome}`,
    `Medida: ${produtoAtual.medida}`,
    `Veículo: ${nome.value.trim()}`,
    `Ano / período: ${ano.value.trim()}`,
    `Frase adicional: ${frase.value.trim() || 'Não informado'}`,
    `Furos: ${furos.value}`,
    `Observações: ${obs.value.trim() || 'Nenhuma'}`,
    '',
    'A foto do carro será enviada por aqui após o pedido.'
  ].join('\n');

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
});
