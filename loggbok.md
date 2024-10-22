# Loggbok för CV

Här skriver jag en planering för mitt CV.
Sedan skriver jag kring mitt arbete och hur det gick.

Skriv en kort planering först.

## Planering
1. Skissa webbsida, planerar att göra en centrerad layout
2. Börja med HTML
3. CSS
4. Finjusteringar
5. Lämna in

## Log

Sedan kan du skriva i loggform om vad du har arbetat med från planering och hur det har gått att arbeta med.

Skriv även sådant som du måste arbeta med nästa pass.

1/10-24
Jag gjorde skissen och började med HTML samt lite CSS.

2/10-24
Jag fortsatte med HTML och gjorde klart CSS. Jag skrev även lite Javascript för hamburgemenyn med hjälp av en tutorial från W3-Schools. Jag gjorde även en ny sida för application letter.

8/10-24
Jag fixade errors validator.nu och css validatorn hittade, och fixade errors som jag fick från Wave. Jag lade även till en about sida och en länk till GitHub repot i navbaren.

9/10-24
Bytte sida på navbaren, från vänster sida till höger sida.

15/10-24
Lade till en bild längst ned på sidan och ändrade all inline css till en klass istället.

15/10-24 - 19/10-24
Implementerade light mode för hemsidan som man kan byta till med en knapp, och som sparar vilken inställning man valt med local memory.

22/10-24
Smalnade av .textBox-klassen så att den skulle trycka ihop texten. Nu är den enklare att läsa, eftersom den följer regeln om max 80 tecken per rad. Jag gjorde även så att .textBox blir bredare om skärmen är smalare än 790px, för att den annars skulle vara alldeles för smal för att vara läsbar.

## Utvärdering
* **Vad har gått bra med HTML/CSS/MEDIA?**<br>
Jag tycker det har gått bra att koda själva hemsidan och göra CSS:en. Jag har egentligen inte haft några större problem med webbsidan, utan allt har flytit på rätt så bra. Det jag tycker gick extra bra är formateringen på texten i index.html, där jag lyckades göra mindre text för årtalen och titlarna och göra så att det inte blev radbrytning efter ett nytt ```<p>``` element. Jag fick dock ändra ```<p>``` till ```<span>``` istället för att jag fick ett error när jag validerade min CSS-kod.

* **Vad behöver/vill du lära dig mer om utifrån dessa delar?**<br>
Jag tycker det skulle vara intressant att lära sig mer om Javascript när det kommer till Webbutveckling, eftersom det är något som kan vara mycket användbart att använda. Den Javascript jag använt i detta och föregående projekt har jag egentligen bara skrivit av från olika tutorials. Jag fattar hur det fungerar, men jag har ingen större kunskap om hur språket är uppbyggt och hur man använder det. Inte på samma sätt som Python.

* **Hur gick validering och tester? Skriv om fel, varningar och saker du ändrat på.**<br>
*Jag började med att validera min HTML-kod. I denna fick jag en del errors:*
    * No space between attributes<br>
    Jag hade av misstag råkat placera ett komma mellan filnamnet och ```width="40%"```
    *  Bad value images/Anakin Skywalker logo dark mode.jpg for attribute src on element img: Illegal character in path segment: space is not allowed<br>
    Detta fixade jag genom att byta filnamn på loggan, och givetvis redigera filnamnet i koden.
    * Bad value 40% for attribute width on element img: Expected a digit but saw % instead.<br>
    Jag skapade en CSS-klass vid namn ```.logo``` som jag gav till ```<img>```-elementet. Detta kunde ersätta ```width="40%"``` och därmed ta bort detta error.
    * An img element must have an alt attribute, except under certain conditions. For details, consult guidance on providing text alternatives for images.<br>
    Jag gav bilden en alt text.
    * Element hr not allowed as child of element summary in this context. (Suppressing further errors from this subtree.)
    Jag tog bort ```<hr>``` från ```summary``` och satte den utanför istället.<br><brS>
*Sedan validerade jag min CSS:*
    * Property font-optical-sizing doesn't exist : auto<br>
    Jag tog bort det från koden.
    * Parse Error p { display: inline; }<br>
    Detta error uppkom för alla ```<p>```-element inuti ```<details>```, eftersom jag inte ville ha line break på dessa. Jag fixade detta error genom att byta ut alla ```<p>```-element inuti ```<details>``` till ```<span>``` som har ```display: inline``` som standard.<br>

    Jag fick även *Parse Error* när jag försökte validera min light mode CSS, men Jens sa att jag kunde strunta i det eftersom funktionen stöds i alla moderna webbläsare.

    *Sist men inte minst använde jag Wave för att se om sidan hade några andra errors:*
    * Min alt-text fick inte innehålla ord som "image" och "logo".<br>
    Eftersom min alt-text endast innehöll ordet "image" i början kunde jag bara ta bort detta för att undvika detta error.
    * Sidan för application letter hade ingen heading.<br>
    Jag lade till ett ```<h1>```-element där jag skrev "Application letter".