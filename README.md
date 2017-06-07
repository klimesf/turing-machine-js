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

### General
- [x] cíl projektu, postup, popis funkčnosti, komentáře ve zdrojovém kódu		X	1

### HTML 5 / 10
- [x] Validita	Validní použití HTML5 doctype		X	1
- [ ] Validita	"Fungující v moderních prohlíčečích v posledních vývojových verzích  (Chrome, Firefox, Edge, Opera)"			2
- [ ] Semantické značky	"správné použití sémantických značek (section, article, nav, aside, ...)"		X	1
- [ ] Grafika - SVG / Canvas				2
- [ ] Média - Audio/Video				1
- [ ] Formulářové prvky	Validace, typy, placeholder, autofocus			2
- [ ] Offline aplikace	"využití možnosti fungování stránky bez Internetového připojení (viz sekce Javascript)"			1

### CSS / 8
- [ ] Pokročilé selektory	použití pokročilých pseudotříd a kombinátorů		X	1
- [ ] Vendor prefixy				1
- [x] CSS3 transformace 2D/3D				2
- [x] CSS3 transitions/animations			X	2
- [ ] Media queries	stránky fungují i na mobilních zařízeních i jiných (tedy nerozpadají se)			2

### Javascript / 12
- [ ] OOP přístup	prototypová dědičnost, její využití, jmenné prostory		X	2
- [ ] Použití JS frameworku či knihovny	použití a pochopení frameworku či knihovny JAK, jQuery, ..			1
- [ ] Použití pokročilých JS API	využití pokročilých API (File API, Geolocation, Drag & Drop, LocalStorage, Sockety, ...)		X	3
- [ ] Funkční historie	posun tlačítky zpět/vpřed prohlížeče - pokud to vyplývá z funkcionatilty (History API)			2
- [ ] Ovládání medií	použití Média API (video, zvuk), přehrávání z JS			1
- [ ] Offline aplikace	využití JS API pro zjišťování stavu			1
- [ ] JS práce se SVG	události, tvorba, úpravy			2

### Ostatní / 5
- [x] Kompletnost řešení				3
- [x] Estetické zpracování				2
