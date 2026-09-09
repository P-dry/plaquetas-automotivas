const form = document.getElementById('orderForm');
const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const frase = document.getElementById('frase');
const furos = document.getElementById('furos');
const estilo = document.getElementById('estilo');
const obs = document.getElementById('obs');
const previewNome = document.getElementById('previewNome');
const previewAno = document.getElementById('previewAno');


const whatsappNumber = '5511911801381';

function updatePreview() {
  previewNome.textContent = nome.value.trim() || 'Seu veículo';
  previewAno.textContent = ano.value.trim() || 'Ano / período';
}

nome.addEventListener('input', updatePreview);
ano.addEventListener('input', updatePreview);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const message = [
    'Olá! Gostaria de pedir uma plaqueta automotiva personalizada.',
    '',
    `Veículo: ${nome.value.trim()}`,
    `Ano / período: ${ano.value.trim()}`,
    `Frase adicional: ${frase.value.trim() || 'Não informado'}`,
    `Furos: ${furos.value}`,
    `Estilo: ${estilo.value}`,
    `Observações: ${obs.value.trim() || 'Nenhuma'}`,
    '',
    'Vou enviar a foto do carro por aqui para criação da silhueta.'
  ].join('\n');

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
