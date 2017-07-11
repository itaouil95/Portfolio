# **Portfolio**

This is the repo where I will be developing and storing my personal website (THANKS JEKYLL AND GITHUB).

I will be documenting the development process starting from the beginning and working it way through until it is finished.

Let's get started:

### **Requisites**

I will be using jekyll which is a static website generator, that takes all of my plain texts and transforms them into a website. Moreover, jekyll offers free hosting on GITHUB, and this is definitely a plus.

A static portfolio is what fits best with my needs in the occasion so I am going with that, however, I would like to point out some interesting pros of using static webpages:

1. No dependencies like databases of third party scripting.
2. As there are no dependencies, this means there is less maintenance to do which is always great.
3. Better performance for end users (clients), given the first two points.

Jekyll, moreover, offers a modular and structured way for your projects. As you have the chance to break the webpage into modular component and include them into the main file (bundling).

### **Part1: Header and Footer**

The development part for the header and footer have been particularly exciting given that it signs the start of my portfolio's life. They both share a picture of Vernazza, a national park beauty in the north-west of Italy (*Le Cinque Terre*).

I also took benefit from the modula structure that Jekyll offers, as well as the SASS support. Hence, I have a main index.html file where I import my html files in *_includes* storing my modular componenets of the portfolio (header, footer, about, etc), so I can avoid having an extremely long index.html file and just modify the components accordingly, by changing the relative file. Same thing for styling. There is a common *all.sass* file where I import all of my styles in assets, which if then linked in the index.html. So as you can tell everything is really clear and well structured.

* Header (HTML)

```HTML
<header>

  <!-- Thunder logo -->
  <div class="logo"></div>

  <!-- Navigation bar -->
  <nav>
    <a href="#">About Me</a>
    <a href="#">Work</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Headline -->
  <h1><span>إلياس</span></h1>

  <!-- Kicker -->
  <p class="kicker">Learner // Traveller // Developer</p>

</header>
```

* Header (SASS)
```CSS
header
  /* Set background image */
  height: 85vh
  background-image: url("pic.jpg") center center
  background-size: cover

  .logo
    +size(50px)
    float: left
    margin: 10px 0 0 30px

    path
      fill: rgba(255, 255, 255, 0.6) /* Fill SVG path color */

  nav
    float: right
    margin: 30px 30px 0 0

    a
      @extend small-bold
      display: inline-block
      margin-left: 20px
      color: rgba(255, 255, 255, 0.6)
      text-decoration: none

      &:hover
        color: white

  h1

    text-align: center
    color: white
    text-transform: uppercase
    letter-spacing: 0.05rem
    margin-bottom: 20px
    padding-top: 250px
    clear: both

    font
      size: 52px
      weight: 700

      span
        display: inline-block
        padding: 0.2em 0.5em
        border: white solid 10px

    .kicker
      text-align: center
      @extend %small-bold
      letter-spacing: 0.05em
      color: white
      line-height: 1
```

**N.B:** The PSD file has been created by Travis Neilson, who distributed it freely. Thank you Travis !
