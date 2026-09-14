const form = document.getElementById('orderForm');
const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const frase = document.getElementById('frase');
const furos = document.getElementById('furos');
const produto = document.getElementById('produto');
const obs = document.getElementById('obs');

const campoGravacaoVerso =
  document.getElementById('campoGravacaoVerso');

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
    descricao:
      'Plaqueta personalizada de 100 × 40 mm, ideal para aplicação no cofre do motor. Pode ser produzida com ou sem a furação padrão do modelo.',
    visual: '▰────────╱╲───────▰',
    classe: 'motor',
    gravacaoVerso: false
  },

  'retrovisor-interno': {
    nome: 'Enfeite para retrovisor interno',
    medida: '50 × 30 mm',
    descricao:
      'Peça personalizada de 50 × 30 mm, desenvolvida para uso no retrovisor interno. Quando escolhida com furos, utiliza 2 furos superiores.',
    visual: 'IMAGEM DO CARRO',
    classe: 'retrovisor',
    gravacaoVerso: true
  },

  'chaveiro-personalizado': {
    nome: 'Chaveiro personalizado',
    medida: '50 × 30 mm',
    descricao:
      'Peça personalizada de 50 × 30 mm, compacta e ideal para chaveiro automotivo. Quando escolhida com furo, utiliza 1 furo superior para fixação.',
    visual: 'IMAGEM DO CARRO',
    classe: 'keychain',
    gravacaoVerso: true
  }
};

function ocultarFuros() {
  [
    previewHole1,
    previewHole2,
    previewHole3,
    previewHole4
  ].forEach((hole) => {
    hole.style.display = 'none';
  });
}

function atualizarFuros(produtoAtual) {
  ocultarFuros();

  if (furos.value !== 'Sim') {
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
  }
}

function atualizarFormato(produtoAtual) {
  previewPlaque.classList.remove(
    'motor',
    'vertical',
    'retrovisor',
    'keychain'
  );

  if (produtoAtual === 'plaqueta-motor') {
    previewPlaque.classList.add('motor');
    return;
  }

  previewPlaque.classList.add('vertical');

  if (produtoAtual === 'retrovisor-interno') {
    previewPlaque.classList.add('retrovisor');
  }

  if (produtoAtual === 'chaveiro-personalizado') {
    previewPlaque.classList.add('keychain');
  }
}

function atualizarGravacaoVerso(produtoAtual) {
  const mostrar =
    produtoAtual === 'retrovisor-interno' ||
    produtoAtual === 'chaveiro-personalizado';

  campoGravacaoVerso.hidden = !mostrar;
  campoGravacaoVerso.style.display =
    mostrar ? '' : 'none';

  if (!mostrar) {
    frase.value = '';
  }
}

function updatePreview() {
  const produtoAtual = produto.value;
  const info = produtos[produtoAtual];

  previewNome.textContent =
    nome.value.trim() || 'Seu veículo';

  previewAno.textContent =
    ano.value.trim() || 'Ano / período';

  previewVisual.textContent =
    info.visual;

  previewProduto.textContent =
    info.nome;

  previewMedida.textContent =
    info.medida;

  previewDescricao.textContent =
    info.descricao;

  atualizarFormato(produtoAtual);
  atualizarFuros(produtoAtual);
  atualizarGravacaoVerso(produtoAtual);
}

nome.addEventListener('input', updatePreview);
ano.addEventListener('input', updatePreview);
produto.addEventListener('change', updatePreview);
furos.addEventListener('change', updatePreview);

updatePreview();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const info = produtos[produto.value];

  const message = [
    'Olá! Gostaria de pedir uma peça automotiva personalizada.',
    '',
    `Produto: ${info.nome}`,
    `Medida: ${info.medida}`,
    `Veículo: ${nome.value.trim()}`,
    `Ano / período: ${ano.value.trim()}`,
    `Furos: ${furos.value}`
  ];

  if (
    info.gravacaoVerso &&
    frase.value.trim()
  ) {
    message.push(
      `Gravação no verso: ${frase.value.trim()}`
    );
  }

  message.push(
    `Observações: ${obs.value.trim() || 'Nenhuma'}`,
    '',
    'A foto do carro será enviada por aqui após o pedido.'
  );

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.join('\n'))}`;

  window.location.href = url;
});
