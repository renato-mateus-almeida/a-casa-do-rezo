# Objetivo

Desenvolver uma landing page (one-page) moderna, elegante, responsiva e visualmente refinada para a marca **Casa do Rezo**, especializada em:

* Velas artesanais
* Essências
* Banhos energéticos
* Produtos voltados à espiritualidade, autocuidado e bem-estar

O site deve transmitir sensações de:

* Acolhimento
* Ritual
* Presença
* Sofisticação
* Conexão espiritual
* Artesanalidade

A identidade visual deve ser inspirada na marca fornecida.

---

# IMPORTANTE

Utilize obrigatoriamente o HTML base fornecido abaixo como estrutura principal da página.

Você NÃO deve recriar a estrutura do HTML.

Você deve:

* Manter a semântica existente.
* Manter os IDs das seções.
* Manter os nomes das classes.
* Enriquecer o layout através do CSS.
* Adicionar elementos decorativos quando necessário.
* Melhorar a experiência visual.
* Tornar a página responsiva.

O HTML fornecido já representa a estrutura final esperada.

Seu trabalho é transformar essa estrutura em uma landing page profissional.

---

# Referência Visual

A marca utiliza:

* Tons bege
* Tons areia
* Tons marrom
* Tons dourado suave

Evite:

* Azul
* Verde vibrante
* Vermelho
* Cores neon

Paleta sugerida:

```css
:root {
    --color-background: #f6efe7;
    --color-surface: #fffaf5;
    --color-primary: #7a5230;
    --color-primary-dark: #5a3b23;
    --color-text: #3d2b1f;
    --color-text-light: #7c6756;
    --color-border: #e4d6c7;
}
```

---

# Hero Section

A Hero Section deve ser o principal destaque da página.

## Background

Utilizar a imagem de produtos artesanais fornecida como background principal da hero section.

Regras:

* Aplicar overlay suave para melhorar legibilidade.
* Garantir contraste adequado do texto.
* Utilizar efeito de profundidade.
* Manter aspecto elegante e sofisticado.

## Conteúdo

Título principal:

```text
Ritual, Intenção e Presença
```

Subtítulo:

```text
Produtos artesanais criados para transformar momentos cotidianos em experiências de conexão, acolhimento e espiritualidade.
```

CTA:

```text
Fale Conosco pelo WhatsApp
```

A Hero deve ocupar aproximadamente 90vh.

---

# Header

O header deve:

* Ser fixo durante a navegação.
* Possuir efeito de transparência inicialmente.
* Receber fundo sólido ao realizar scroll.
* Possuir transições suaves.

Menu:

* Essência
* Nossos Produtos
* Contacte-nos

Implementar scroll suave.

---

# Seção Essência

Layout em duas colunas.

## Coluna Esquerda

Exibir a logo da marca em destaque.

## Coluna Direita

Exibir:

* Título
* Texto institucional
* Botão para WhatsApp

Adicionar elementos decorativos sutis inspirados em:

* Ramos
* Folhagens
* Símbolos espirituais minimalistas
* Linhas ornamentais

Evitar exageros.

---

# Seção Nossos Produtos

Exibir 3 cards.

Categorias:

## Velas Artesanais

Produtos feitos manualmente para criar momentos de presença e acolhimento.

## Essências

Aromas desenvolvidos para elevar a energia dos ambientes.

## Banhos Energéticos

Misturas cuidadosamente elaboradas para rituais de limpeza e renovação.

---

## Cards

Cada card deve possuir:

* Imagem
* Nome
* Descrição
* Botão

Efeitos:

* Hover suave
* Pequena elevação
* Sombra elegante
* Transições suaves

---

# Seção Contacte-nos

Criar um formulário elegante.

Campos:

* Nome
* E-mail
* Telefone
* Mensagem

Requisitos:

* Labels visíveis
* Estados de foco refinados
* Feedback visual de validação

Ao lado do formulário, pode ser exibida uma imagem complementar relacionada à espiritualidade ou aos produtos da marca.

---

# Footer

O footer deve conter:

* Logo
* Redes sociais
* Informações de contato
* Copyright

Visual:

* Fundo marrom escuro
* Texto claro
* Aparência sofisticada

---

# Animações

Adicionar animações discretas:

* Fade In
* Slide Up
* Reveal on Scroll

Evitar:

* Bounce
* Zoom exagerado
* Efeitos chamativos

---

# Responsividade

O layout deve funcionar perfeitamente em:

* Desktop
* Tablet
* Mobile

Regras:

* Menu adaptável.
* Cards empilhados em mobile.
* Hero reorganizada para telas pequenas.
* Formulário responsivo.

---

# Acessibilidade

Implementar:

* HTML semântico.
* Labels associados.
* Contraste adequado.
* Navegação por teclado.
* Textos alternativos em imagens.

---

# Código

Gerar:

* index.html
* style.css
* script.js

Utilizar:

* CSS moderno.
* Variáveis CSS.
* Flexbox.
* CSS Grid.

Evitar bibliotecas externas desnecessárias.

---

# HTML Base Obrigatório

Utilize o HTML abaixo como ponto de partida e preserve sua estrutura, IDs e classes.

```Html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Casa do Rezo</title>

    <link rel="stylesheet" href="./style.css">
</head>
<body>

    <!-- ====================================================== -->
    <!-- HEADER -->
    <!-- ====================================================== -->

    <header class="header">
        <div class="container">

            <a href="#" class="header__logo">
                <img
                    src="./assets/logo.png"
                    alt="Logo Casa do Rezo"
                >
            </a>

            <nav class="header__nav">
                <ul class="header__menu">
                    <li>
                        <a href="#essencia">Essência</a>
                    </li>

                    <li>
                        <a href="#produtos">Nossos Produtos</a>
                    </li>

                    <li>
                        <a href="#contato">Contacte-nos</a>
                    </li>
                </ul>
            </nav>

        </div>
    </header>

    <main>

        <!-- ====================================================== -->
        <!-- HERO -->
        <!-- ====================================================== -->

        <section id="hero" class="hero">

            <div class="container">

                <div class="hero__content">

                    <h1 class="hero__title">
                        Ritual, Intenção e Presença
                    </h1>

                    <p class="hero__description">
                        Produtos artesanais criados para transformar
                        momentos cotidianos em experiências de conexão,
                        acolhimento e espiritualidade.
                    </p>

                    <a
                        href="#"
                        class="hero__cta"
                        target="_blank"
                    >
                        Fale Conosco pelo WhatsApp
                    </a>

                </div>

            </div>

        </section>

        <!-- ====================================================== -->
        <!-- ESSÊNCIA -->
        <!-- ====================================================== -->

        <section
            id="essencia"
            class="essencia section"
        >

            <div class="container">

                <div class="essencia__grid">

                    <div class="essencia__logo">
                        <img
                            src="./assets/logo.png"
                            alt="Logo Casa do Rezo"
                        >
                    </div>

                    <div class="essencia__content">

                        <h2>
                            Essência
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Adipisci, repellat.
                        </p>

                        <a
                            href="#"
                            class="btn-primary"
                        >
                            Fale Conosco pelo WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </section>

        <!-- ====================================================== -->
        <!-- PRODUTOS -->
        <!-- ====================================================== -->

        <section
            id="produtos"
            class="produtos section"
        >

            <div class="container">

                <header class="section-header">

                    <h2>
                        Nossos Produtos
                    </h2>

                    <p>
                        Conheça nossos produtos artesanais.
                    </p>

                </header>

                <div class="produtos__grid">

                    <article class="produto-card">

                        <img
                            src="./assets/produto-01.jpg"
                            alt="Produto 01"
                        >

                        <h3>
                            Velas Artesanais
                        </h3>

                        <p>
                            Descrição breve do produto.
                        </p>

                        <a href="#">
                            Saiba Mais
                        </a>

                    </article>

                    <article class="produto-card">

                        <img
                            src="./assets/produto-02.jpg"
                            alt="Produto 02"
                        >

                        <h3>
                            Essências
                        </h3>

                        <p>
                            Descrição breve do produto.
                        </p>

                        <a href="#">
                            Saiba Mais
                        </a>

                    </article>

                    <article class="produto-card">

                        <img
                            src="./assets/produto-03.jpg"
                            alt="Produto 03"
                        >

                        <h3>
                            Banhos Energéticos
                        </h3>

                        <p>
                            Descrição breve do produto.
                        </p>

                        <a href="#">
                            Saiba Mais
                        </a>

                    </article>

                </div>

            </div>

        </section>

        <!-- ====================================================== -->
        <!-- CONTATO -->
        <!-- ====================================================== -->

        <section
            id="contato"
            class="contato section"
        >

            <div class="container">

                <header class="section-header">

                    <h2>
                        Contacte-nos
                    </h2>

                    <p>
                        Entre em contato através do formulário abaixo.
                    </p>

                </header>

                <form class="contato__form">

                    <div class="form-group">

                        <label for="nome">
                            Nome Completo
                        </label>

                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="telefone">
                            Telefone
                        </label>

                        <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="mensagem">
                            Mensagem
                        </label>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="6"
                            required
                        ></textarea>

                    </div>

                    <button type="submit">
                        Enviar Mensagem
                    </button>

                </form>

            </div>

        </section>

    </main>

    <!-- ====================================================== -->
    <!-- FOOTER -->
    <!-- ====================================================== -->

    <footer class="footer">

        <div class="container">

            <p>
                © 2025 Casa do Rezo.
                Todos os direitos reservados.
            </p>

        </div>

    </footer>

    <script src="./script.js"></script>

</body>
</html>

```

# Guia Visual Obrigatório

Utilize a identidade visual da marca Casa do Rezo como referência principal.

A estética deve remeter a:

* Espiritualidade
* Artesanalidade
* Rituais
* Conexão com a natureza
* Elegância minimalista
* Aconchego
* Produtos premium feitos à mão

Evitar qualquer aparência:

* Tecnológica
* Corporativa
* Futurista
* Neon
* Colorida excessivamente

---

# Paleta de Cores

Utilizar obrigatoriamente tons inspirados na identidade visual da marca.

```css id="mijrvz"
/* ===================================================== */
/* CASA DO REZO - DESIGN TOKENS */
/* ===================================================== */

:root {

    /* Backgrounds */

    --color-background: #f7efe6;
    --color-background-alt: #efe2d4;
    --color-surface: #fffaf4;

    /* Primary */

    --color-primary: #7a5230;
    --color-primary-hover: #684226;
    --color-primary-dark: #4f311d;

    /* Text */

    --color-text: #3d2b1f;
    --color-text-light: #756353;

    /* Borders */

    --color-border: #dcc7b3;

    /* Decorative */

    --color-accent: #b18a60;
    --color-accent-light: #d9b998;

    /* Footer */

    --color-footer: #2d1c12;
}
```

---

# Tipografia

Utilizar uma combinação de fonte serifada para títulos e fonte sem serifa para conteúdo.

## Títulos

Fonte principal:

```css id="c0mszk"
font-family: 'Cormorant Garamond', serif;
```

Alternativas aceitáveis:

```css id="d36a2d"
font-family: 'Playfair Display', serif;
font-family: 'Libre Baskerville', serif;
```

---

## Textos e Navegação

Fonte principal:

```css id="n0crr7"
font-family: 'Inter', sans-serif;
```

Alternativas aceitáveis:

```css id="vowaqa"
font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
```

---

# Escala Tipográfica

## Hero

Título principal:

```css id="kuz0j6"
font-size: clamp(3rem, 6vw, 5.5rem);
font-weight: 500;
line-height: 1.05;
```

Descrição:

```css id="vkt42h"
font-size: 1.2rem;
line-height: 1.8;
max-width: 600px;
```

---

## Títulos de Seção

```css id="l2x8rj"
font-size: clamp(2.5rem, 4vw, 4rem);
font-weight: 500;
line-height: 1.1;
```

Exemplos:

* Essência
* Nossos Produtos
* Contacte-nos

---

## Títulos dos Cards

```css id="mhryeu"
font-size: 1.6rem;
font-weight: 500;
```

---

## Textos Comuns

```css id="q8vkm7"
font-size: 1rem;
line-height: 1.8;
```

---

# Espaçamentos

Utilizar bastante respiro visual.

## Seções

```css id="wkg77c"
padding-top: 120px;
padding-bottom: 120px;
```

---

## Container

```css id="a9tlzm"
max-width: 1280px;
margin: 0 auto;
padding-inline: 24px;
```

---

# Botões

Botão principal:

```css id="mjv5rk"
background: var(--color-primary);
color: white;
border-radius: 999px;
padding: 16px 32px;
```

Hover:

```css id="wg2txv"
background: var(--color-primary-hover);
transform: translateY(-2px);
```

---

# Hero Background

Utilizar a imagem fornecida dos produtos como background principal.

Regras:

* background-size: cover;
* background-position: center;
* background-repeat: no-repeat;

Adicionar overlay:

```css id="thrtv6"
background:
linear-gradient(
    to right,
    rgba(247,239,230,0.95),
    rgba(247,239,230,0.75),
    rgba(247,239,230,0.25)
);
```

O objetivo é garantir legibilidade do texto sem esconder a fotografia dos produtos.

---

# Elementos Decorativos

Adicionar de forma sutil:

* Ramos
* Folhas delicadas
* Linhas ornamentais
* Pequenos símbolos espirituais minimalistas
* Estrelas discretas
* Detalhes dourados suaves

Evitar:

* Símbolos religiosos explícitos
* Elementos excessivamente místicos
* Excesso de ilustrações

---

# Referência de Layout

A landing page deve se aproximar visualmente da seguinte estrutura:

```text id="e4ywvv"
HEADER FIXO

┌───────────────────────────────┐
│ HERO                          │
│ Texto à esquerda              │
│ Produtos à direita            │
└───────────────────────────────┘

┌───────────────────────────────┐
│ ESSÊNCIA                      │
│ Logo à esquerda               │
│ Texto à direita               │
└───────────────────────────────┘

┌───────────────────────────────┐
│ NOSSOS PRODUTOS               │
│ 3 CARDS CENTRALIZADOS         │
└───────────────────────────────┘

┌───────────────────────────────┐
│ CONTACTE-NOS                  │
│ FORMULÁRIO + IMAGEM           │
└───────────────────────────────┘

FOOTER
```

---

# Comentários no HTML

Ao utilizar o HTML base, mantenha comentários indicando a finalidade visual de cada seção.

Exemplo:

```html id="dtf8lp"
<!--
Cor principal: #7A5230
Fonte títulos: Cormorant Garamond
Fonte textos: Inter

Objetivo visual:
Elegância artesanal + espiritualidade + acolhimento.
-->
```

Esses comentários devem permanecer no código para facilitar futuras manutenções.

