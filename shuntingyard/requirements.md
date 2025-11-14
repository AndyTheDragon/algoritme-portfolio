## I skal lave en rigtig regnemaskine

I øvelserne med [RPN Calculator](https://www.notion.so/RPN-Calculator-2921d7fec09781db8963eaa7aa670a4d?pvs=21) lavede I som gruppe en forholdsvis enkel regnemaskine, der fungerede fint så længe den fik et udtrykt i RPN, også kendt som postfix notation. Altså, hvis man ønskede at udregne $2+3*4$ skulle man give den strengen `"2 3 4 * +"`.

Nu skal I - stadig som gruppe - lave et program der kan omforme et udtryk fra infix, altså for eksempel `"2 + 3 * 4"`, til postfix som ovenstående, så det kan bruges af jeres RPN Calculator. Det vil sige, en “rigtig” regnemaskine, der kan modtage udtryk som vi kender dem, og - *hvis den kædes sammen med RPN Calculator* - rent faktisk kan udregne dem!

I skal ikke selv “opfinde” en algoritme til at omforme fra infix til postfix, men implementere Edsger Dijkstra’s “Shunting Yard Algorithm” (fra 1961), ud fra alt hvad I kan finde af dokumentation og beskrivelser af den.

<aside>
😇

Formålet med denne opgave er især at I skal sætte jer ind i en veldokumenteret algoritme som I ikke kender i forvejen, og følge dokumentation og/eller pseudokode for at implementere den.

Så frygt ikke hvis I føler at algoritmen er svær at forstå - det kan meget vel føles magisk at den overhovedet virker, og ingen ville forvente at I selv kunne komme op med ideen, men forhåbentlig forstår I den bedre efterhånden som I arbejder med at implementere den i jeres egen kode

</aside>

I må bruge næsten alle tænkelige ressourcer for at lære om og forstå “Shunting Yard Algoritmen” - https://en.wikipedia.org/wiki/Shunting_yard_algorithm -artiklen er et rigtig godt sted at starte, men der er også et væld af youtube-videoer der med animationer forklarer hvordan algoritmen fungerer, og ikke mindst: hvorfor den hedder “Shunting yard”.

<aside>
🚫

I må **ikke** bruge AI til at generere koden for jer - I skal skrive alting selv (altså som gruppe)!

</aside>

# Krav

- I skal lave et program der modtager et regneutryk i infix notation, fx `"2 + 3 * 4"`, og returnerer det samme udtryk, men i postfix notation, fx `"2 3 4 * +"`
- Begge udtryk (også kaldet expressions) skal være med **mellemrum** mellem hvert tal og hver operation.
- Programmet skal som minimum kunne håndtere `+`, `-`, `*`, `/`, `^` (opløftet i), `(` og `)`
- Programmet skal anvende shunting yard algoritmen, og anvende en queue til input, en anden queue til output, og en stack til operatorer.
- I må **ikke** anvende JavaScript arrays til stack og queue, men skal anvende jeres egne datastruktur-klasser!

## Begrænsninger

- I må godt undlade håndtering af matematiske funktioner som fx sin( x ), cos( x ), kvadratrod, max( x, y ) etc.
- I den forbindelse må I også godt ignorere kommaer i udtrykket (kommaer mellem parametre til funktioner, ikke kommaer i kommatal).

# Anbefalet procedure

1. Forstå Shunting Yard algoritmen - i det mindste delvis - find materialer på nettet der beskriver den.
2. Begynd med et simpelt udtryk uden for mange forskellige operatorer - se om I kan få jeres program til at give samme resultat som I selv kom frem til i [Regneøvelser med RPN](https://www.notion.so/Regne-velser-med-RPN-2921d7fec0978111b79ce0d9fe12713a?pvs=21) 
3. Ignorer **precedence** og **associativity** til at starte med - indtil I har et udtryk hvor det er nødvendigt. Lav da først **precedence** og få det til at virke, før I går videre til **associativity**. (Det er kun ^ der kræver **associativity**)
4. Fodr de resulterende outputs til jeres RPN Calculator, og se om den kan forstå det, og regne det rigtigt ud.

## Tip om precedence og associativity

I wikipedia-artiklen: https://en.wikipedia.org/wiki/Shunting_yard_algorithm er der en del henvisninger til til artiklen https://en.wikipedia.org/wiki/Order_of_operations, som jeg personligt synes kun gør det mere forvirrende.

Det vigtige er at programmet forstår “Regnearternes hierarki”, her er en dansk artikel der minder jer om hvad det er: https://da.wikipedia.org/wiki/Regnearternes_hierarki. Desværre gør den artikel det samme som de fleste andre, og bruger **1** som **høj** præcedens og **5** som **lav** - hvilket er ret irriterende når man skal skrive et program der tjekker om en værdi er højere end en anden.

Så mit forslag er at lave en tabel - for eksempel i form af et objekt - der indeholder operatorer, og deres precedens-værdi, hvor højere værdi, betyder højere præcedens. Noget lignende dette:

```jsx
const precedence = {
  "^": 5,
  "*": 4,
  "/": 3,
  "+": 2,
  "-": 1
}
```

Når man så har en operator - altså en streng der indeholder et af tegnene `+`, `-`, `*`, etc. - så kan man tjekke dens præcedens med `precedence[operator]` og har man to operatorer, `*o1*` og `*o2*`, man gerne vil sammenligne, så kan man fx sige 

```jsx
if (precedence[o2] > precedence[o1] )
```

 for at tjekke om o2 har højere præcedens end o1.

Samme princip med en tabel i form af et objekt, kan anvendes til associativitet. De to kan endda slås sammen i et samlet objekt hvis man skulle ønske det.