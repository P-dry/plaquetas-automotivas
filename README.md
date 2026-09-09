# Site de Plaquetas Automotivas

Site estático pronto para publicar no GitHub Pages.

## Como usar

1. Abra `script.js`.
2. Troque:

```js
const whatsappNumber = '5511999999999';
```

pelo seu número com DDI + DDD, apenas números.

Exemplo:

```js
const whatsappNumber = '5511988887777';
```

3. Se quiser, altere o preço em `index.html`.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub.
2. Envie `index.html`, `style.css` e `script.js` para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve.
7. O GitHub mostrará o endereço público do site depois de alguns instantes.

## Estrutura

- Home
- Produto
- Personalização
- Pedido por WhatsApp
- Botão de pagamento preparado para futura integração
