# **Portfolio**

**N.B:** The PSD file has been created by Travis Neilson, who distributed it freely. Thank you Travis !

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

I also took benefit from the modular structure that Jekyll offers, as well as the SASS support along with bourbon tool. Hence, I have a main index.html file where I import my html files in *_includes* storing my modular components of the portfolio (header, footer, about, etc), so I can avoid having an extremely long index.html file and just modify the components accordingly, by changing the relative file. Same thing for styling. There is a common *all.sass* file where I import all of my styles in assets, which if then linked in the index.html. So as you can tell everything is really clear and well structured.

1. Header

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

2. Footer

```HTML
<footer>

  <div class="lockup">

    <div class="logo">{{ % icons/logo.html % }}</div>

    <div class="content-wrap">
      <nav>
        <a href="#">About Me</a>
        <a href="#">Work</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </nav>

      <p class="copyright">All content copyright 2017</p>
    </div>

  </div>

</footer>
```

```CSS
footer
  background: url("pic.jpg") center
  background-size: cover

  .lockup
    padding: 50px 30px
    +clearfix

    .logo
      +size(50px)
      float: left
      margin-right: 30px

      path
        fill: rgba(255, 255, 255, 0.6)

    .content-wrap
      float: float

      .copyright
        margin: 0
        text-transform: uppercase
        font-size: 12px
        color: white

      a
        @extend %small-bold
        color: rgba(255, 255, 255, 0.5)
        display: inline-block
        margin-right: 30px

        &:hover
          color: rgba(255, 255, 255, 0.7)
```
### **Part2: About Section**

The about section is where I present myself a little bit and display my skills to possible clients and or companies. The interesting part here is the flexbox displaying of the icons and the dynamic way of selecting the skill matrix.

Here is the markup:

```HTML
<section>

  <!-- Heading -->
  <h3>About Me</h3>

  <!-- Icons -->
  <div class="face-lockup">

    <div class="face-img">{% icons/image.jpg %}</div>
    <div class="icon-pencil">{% icons/icon-pencil.html %}</div>
    <div class="icon-mouse">% icons/icon-mouse.html %}</div>
    <div class="icon-browser">% icons/icon-browser.html %}</div>
    <div class="icon-video">% icons/icon-video.html %}</div>

  </div>

  <!-- Skills -->
  <div class="skill-lockup">

    <div class="skill-unit">
      <div class="skill-label"><b>Communication</b></div>
        <div class="skill-icons skill-5">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Organisation</b></div>
        <div class="skill-icons skill-7">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Machine Learning</b></div>
        <div class="skill-icons skill-8">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Full Stack</b></div>
        <div class="skill-icons skill-3">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>JavaScript</b></div>
        <div class="skill-icons skill-9">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Learning</b></div>
        <div class="skill-icons skill-9">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Planning</b></div>
        <div class="skill-icons skill-8">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

    <div class="skill-unit">
      <div class="skill-label"><b>Team Player</b></div>
        <div class="skill-icons skill-10">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
    </div>

  </div>

</section>
```

So there is a recurring them here. SVGs, yeah use your damns svgs whenever you can to avoid hitting the network every single time the page is refreshed.

And here is the SASS for the about page:

```CSS
section

  h3
    @extend %small-bold
    color: $accent-light
    text-align: center

  .face-lockup
    max-width: 780px
    margin: 0 auto
    +display(flex)
    +align-items(center)
    +justify-content(space-around)

    .face-img
      +size(100px)
      background: url(/assets/img/vernazza.jpg) center no-repeat
      order: 3

    [class^="icon-"]
      +size(100px)
      background: $bgcolor

      &.icon-pencil
        order: 1
      &.icon-mouse
        order: 2
      &.icon-browser
        order: 4
      &.icon-video
        order: 5

    /* Re order face-lockup when screen gets smaller */
    @media screen and (max-width: 650px) {

      .face-lockup
        display: block
        text-align: center

      [class^="icon-"]
        display: inline-block
        margin: 10px

      .face-img
        width: auto
        margin-bottom: 30px

    }

    /* Profile Introduction */
    .blurb
      max-width: 620px
      padding: 0 15px
      margin: 50px auto
      font-size: 24px
      font-weight: 300
      text-align: center
      margin-bottom: 30px

      .skill-lockup
        max-width: 700px
        margin: 100px auto
        color: #999
        text-align: center
        +clearfix()

        .skill-unit
          width: 350px
          float: left

        .skill-icons
          margin: 2px 0 30px

          span
            +size(14px)
            display: inline-block
            background-color: $accent
            margin-right: 5px
            border-radius: 50%

            &::after
              +size(10px)
              content: ""
              display: block
              background: #fff
              border-radius: 50%
              margin: 2px

          @for $i from 1 through 10
            &.skill-#{$i} span:nth-child(n + #{$i + 1})
              @extend %skill-color

      @media screen and (max-width: 541)
        .skill-lockup
          width: 270px

```

As for what regard the skills section. The skill level effect is created by a series of semantic elements (spans) to whom we give some css magic to reach the effect seen on the page and consequently use sass flow control directives (for loop in sass) to read the skill-# level assigned to each skill as to enable as many spans as the class defines.

**N.B:** The PSD file has been created by Travis Neilson, who distributed it freely. Thank you Travis !
