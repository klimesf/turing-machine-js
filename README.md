# turing-machine.js
Semestral project for A0A33KAJ class taught by Seznam.cz at CTU

- [Evaluation criteria](https://docs.google.com/spreadsheets/d/18rSiofsqOHGTXj_Zbs1s-rtB2URXG4iUmxn_5JtwWDY/edit#gid=0)

## Project goal

The goal of this project is to allow students to simulate single-tape deterministic
Turing Machine (TM) in an interactive way. You can step trough the iterations
of the TM, display and edit the transition table and edit the input.

## How to use

First, when you load the page, you can notice there is a big tape in the middle
of the screen. This is the TM tape. It is by definition of infinite size.
The input symbols are always padded by Blank ("B") symbols on the left and on
the right.

If you press "Space", the machine executes a single iteration based on
the value in the transition table. On the top of the screen, you can see
the current state the machine is in. This can help you to navigate trough
the transition table of your TM.

By pressing "R", you reset the TM to its initial state.

If you click the "Click me!" button on the right, an editor pane shows up.
There is the transition table and also the TM input form. If the cell is empty,
it means there is no transition for that symbol from that state. If there is
a value in format <next state>|<rewrite>|<direction>, it means that if the TM
reads the symbol in that state, it will go to the <next state>, rewrite the symbol
to <rewrite> and move one step in <direction>. You may use "qX" for the number of
the state, where X is an integer. For direction value, you may use "L" for "left"
or "R" for "right". For <rewrite>, you may use any symbol, but if you use a symbol
which is not defined in the table, you will break your machine.

By clicking on any of the table cell, you active the transition table editor.
A big button "Save transition table" pops up. When you are done modifying the
transition table.

To change the input of the TM, you can fill out the "Input" field and click
on the "Reset" button. The TM will be reset to initial state (q0) and the
transition table will be updated to accommodate for all the unique symbols +
the Blank symbol "B". (The symbol "B" is always reserved for the Blank symbol,
so I advise you not to use it)

## Contributing

This is a semestral project, so I won't accept your Pull Request until June 2017.
However, feel free to report any bug or to suggest any improvement! Thank you :)

## Semestral work

You can click the list items and they will redirect you directly to the code.

The structure of the folder is the following:
- `dist/` - Static files live here, contents of this folder are not transpiled
  - `css/` - CSS lives here
  - `js/` - Transpiled JS files live here
- `src/` - JS lives here, core of the system in ES6 - transpiled by webpack

### General
- [x] cíl projektu, postup, popis funkčnosti, komentáře ve zdrojovém kódu		X	1

### HTML 5 / 10
- [x] [Validita -	Validní použití HTML5 doctype](https://github.com/klimesf/turing-machine-js/blob/master/dist/index.html#L1) (1)
- [x] Validita - funkcionalita v nejnovějších prohlížečích [W3C HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fklimesf.github.io%2Fturing-machine-simulator%2F) [W3C CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fklimesf.github.io%2Fturing-machine-simulator%2Fcss%2Fstyle.css&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en) (2)
- [x] [Semantické značky	"správné použití sémantických značek (section, article, nav, aside, ...)"]((https://github.com/klimesf/turing-machine-js/blob/master/dist/index.html#L11)) (1)
- [ ] Grafika - SVG / Canvas (2)
- [x] [Média - Audio/Video](https://github.com/klimesf/turing-machine-js/blob/master/src/main.js#L262) - to display, paste "tourette" into the TM Input and click "Reset" (1)
- [x] [Formulářové prvky	Validace, typy, placeholder, autofocus](https://github.com/klimesf/turing-machine-js/blob/master/dist/index.html#L41) (2)
- [x] [Offline aplikace	"využití možnosti fungování stránky bez Internetového připojení (viz sekce Javascript)"](https://github.com/klimesf/turing-machine-js/blob/master/dist/index.html#L2) (1)

### CSS / 8
- [x] [Pokročilé selektory	použití pokročilých pseudotříd a kombinátorů](https://github.com/klimesf/turing-machine-js/blob/master/dist/css/style.css#L49) (1)
- [x] [Vendor prefixy](https://github.com/klimesf/turing-machine-js/blob/master/dist/css/style.css#L22) (generated by [https://autoprefixer.github.io/](https://autoprefixer.github.io/))(1)
- [x] [CSS3 transformace 2D/3D](https://github.com/klimesf/turing-machine-js/blob/master/dist/css/style.css#L28) (2)
- [x] [CSS3 transitions/animations](https://github.com/klimesf/turing-machine-js/blob/master/dist/css/style.css#L29) (2)
- [x] [Media queries	stránky fungují i na mobilních zařízeních i jiných (tedy nerozpadají se)](https://github.com/klimesf/turing-machine-js/blob/master/dist/css/style.css#L111) (2)

### Javascript / 12
- [ ] OOP přístup	prototypová dědičnost, její využití, jmenné prostory (!2)
- [x] [Použití JS frameworku či knihovny	použití a pochopení frameworku či knihovny JAK, jQuery, ..](https://github.com/klimesf/turing-machine-js/blob/master/webpack.config.js) - I used Yarn and Webpack (1)
- [ ] Použití pokročilých JS API (File API, Geolocation, Drag & Drop, LocalStorage, Sockety, ...) (3)
- [ ] Funkční historie	posun tlačítky zpět/vpřed prohlížeče - pokud to vyplývá z funkcionatilty (History API) (2)
- [x] [Ovládání medií	použití Média API (video, zvuk), přehrávání z JS](https://github.com/klimesf/turing-machine-js/blob/master/src/main.js#L136) (1)
- [x] [Offline aplikace	využití JS API pro zjišťování stavu](https://github.com/klimesf/turing-machine-js/blob/master/src/main.js#L385) (1)
- [ ] JS práce se SVG	události, tvorba, úpravy (2)

### Ostatní / 5
- [x] Kompletnost řešení (3)
- [x] Estetické zpracování (2)
