# Releaselog

Versionsregel: `Sensible 0.x.x` – større rettelser/funktioner løfter første x, mindre rettelser løfter andet x.

## Sensible 0.34.0
**Ændret**
- **Målmandens udspark** lander nu omkring midterlinjen (+/- 10 %) hver gang, både for computer og spiller.
- **Premier League-stadions har hver deres form** i stedet for samme skål: forskellig dybde på hver side, åbne eller fyldte eller runde hjørner, forskelligt antal ringe, tagdækning pr. side og tekster som "THE KOP", "HOLTE END" og "THEATRE OF DREAMS". Fx har Selhurst Park, Craven Cottage, Portman Road og City Ground åbne hjørner og ujævne tribuner, Old Trafford er stor og fyldt, Anfield har en stor Kop bag målet, og Emirates, Tottenham og Etihad er runde.
- **Kampstart:** kameraet starter ude over hele stadion og zoomer ind på banen (tryk for at springe over).

## Sensible 0.33.0
**Ændret**
- **Bolden uden for banen:** lave bolde preller af reklamebanderne (bag mål og langs siderne), og høje bolde flyver over banderne og rammer tribunen.
- **Målspark:** målmanden står bag bolden, løber til og sparker, i stedet for at tage bolden op i hænderne.
- **Alle Premier League-stadions** er nu bygget som skåle med afrundede hjørner, tag, tribunebånd, gange og klubbens navn i sæderne. Hvert stadion har sin egen rundingsgrad (fx er Selhurst Park og Craven Cottage mere kantede, Emirates og Tottenham helt runde), tagdækning efter stadion og kapacitet-baserede ringe.

## Sensible 0.32.0
**Ændret**
- **Emirates Stadium (Arsenal)** er bygget som en rund skål: afrundede hjørner, sammenhængende rundt tag med ribber og lyse kanter (lamper om natten), tre ringe med concourse-bånd, gange og store "ARSENAL"-bogstaver i sæderne. Samme metode kan bruges på flere stadions.

## Sensible 0.31.0
**Ændret**
- Indstillingerne "Skud" og "Hastighed" er fjernet (skud er Power, hastighed Normal).
- **Nye tilskuere:** små figurer med hoved, hår, hudtoner, trøjer, halstørklæder, hævede arme og enkelte tomme sæder.
- **Tribuner:** gange mellem sektionerne, concourse-bånd mellem ringene på store stadions (antal efter kapacitet) og lys i forkanten af taget om natten.

## Sensible 0.30.0
**Nyt**
- **Gameplay: OpenSWOS** kan vælges i Indstillinger (sammen med Boldfysik og Original). Slår OpenSWOS-boldfysik til automatisk.
  - Løb i 8 retninger med konstant fart og hurtige vendinger. Fart afhænger af spillerens færdighed (0-7), og bolden bremser løberen til 87,5 %.
  - Skud uden styrkemåler: hold SKYD i ca. 4 ticks, så skydes automatisk. Slip tidligere for aflevering. Træk stikken bagud for højt skud. Præcisionen afhænger af spillerens færdighed.
  - Ingen lob-aflevering (findes ikke i originalen).
  - Målmanden holder bolden i ca. 2 sekunder og sparker langt, har mindre rækkevidde og får ikke ekstra "held" fra sværhedsgraden.
- OpenSWOS-boldfysikken har fået kraftigere friktion, så rulleafstande ligner originalens.

## Sensible 0.29.0
**Ændret**
- **Lob over forsvaret** er nu et langt tryk på AFLEVER (ikke SKYD). Kort tryk giver stadig almindelig aflevering.
- **Dommeren** holder sig mest i midterste tredjedel af banen og kommer ikke ind i feltet ved målspark.
- **Hjørnespark:** færre spillere klumper i feltet. Nogle står i kanten af feltet, og resten ved midterlinjen.
- Indkast viser ikke længere banner.
**Nyt**
- **Boldfysik: OpenSWOS** kan vælges i Indstillinger (standard er den nuværende). Lineær friktion som i originalen, retningsafhængig skudfart og højt skud ved at trække stikken bagud lige før skuddet.

## Sensible 0.28.0
**Nyt**
- **Lobbet aflevering over forsvaret:** hold SKYD nede og tryk AFLEVER. Bolden letter og lander ved medspilleren. Computeren lober også selv, når en modstander står i vejen.
- **Dommer** i neongul, cyanblå eller sort trøje (vælges efter holdfarverne), løber med spillet og går til stedet ved frispark og straffespark.
- **Frispark:** glidende tacklinger kan blive fejl (oftere bagfra). Mur på 3-4 spillere, modstandere skal holde afstand, banneret FRISPARK vises.
- **Straffespark:** fejl i egen straffesparksfelt giver straffe. Alle står uden for feltet, og målmanden venter på stregen. Tryk kort eller hold SKYD for styrke.
- **Indkast:** banner, og modstandere skal holde afstand til indkasteren.
- Træthed er udsat til senere.

## Sensible 0.27.1
**Ændret**
- Skud kan flyve lidt højere (mellem de to forrige versioner), og målmandshandskerne er lidt mindre.

## Sensible 0.27.0
**Ændret**
- **Målene er 10 % højere og bredere** (net, stolper og overligger følger med).
- **Målmanden** redder skud midt i målet oftere (større rækkevidde og færre fejl på skud lige på ham).
- **Færre skud over mål:** skud med fuld kraft stiger mindre, så de går over målet sjældnere.
- **Hovedstød** rammer målet oftere: de er nu rettet nedad og kan reddes af målmanden.
- **Volleys/førstegangsskud:** spilleren kan nå bolden fra lidt længere væk, skuddet er hårdere og mere præcist.
- **Målmandshandsker** er større og tydeligere (hvid manchet og fingerstreg).

## Sensible 0.26.1
**Ændret**
- Målmændene er svækket lidt (færre sikre fangster, flere fejl på skud lige på dem, og færre redninger på målstregen), så der kommer flere mål i åbent spil.

## Sensible 0.26.0
**Nyt**
- **Volley og hovedstød i første omgang:** er bolden i luften tæt på din spiller, kan du skyde den med det samme (tryk SKYD lige før eller når bolden kommer). Står man inde i/nær feltet, går volleyen eller hovedstødet overvejende mod mål, og stikretningen drejer skuddet lidt til siden. Peger man bagud, bliver det en aflevering/clearing den vej. Uden for feltet følger bolden mere den retning, man peger i.
- Hårdere volleys kan gå over mål, og hovedstød er lavere og mere præcise.
- En lille gul tekst (VOLLEY eller HOVED) vises over din spiller, når en bold i luften kan nås.
**Ændret**
- Volleys og hovedstød får fart fra den indkommende bold (f.eks. ved målmandens udspark eller en dybde-aflevering).

## Sensible 0.25.1
**Ændret**
- Når bolden ryger forbi eller over målet, ses den nu ligge/flyve ud over baglinjen i et øjeblik, før spillet stoppes (før blev det stoppet med det samme).
- Målspark tages fra hjørnet af det lille felt på den side, hvor bolden gik ud.
- Kameraet bevæger sig mere glidende, når bolden rammer overligger eller stolpe, og har en øvre grænse for hastighed, så det ikke hopper.

## Sensible 0.25.0
**Nyt**
- **Stadionstørrelse efter kapacitet:** tilskuerrækkernes dybde skaleres efter de rigtige tal (fra Vitality Stadium med ca. 11.300 pladser til Old Trafford med ca. 74.300). Små stadions har tydeligt mindre tribuner.
- **Mere realistiske tage pr. tribune:** hver tribune har sin egen tagdækning og form, f.eks. fuld cantilever-tag på Old Trafford og Emirates, kortere og trappede tage på Selhurst Park, Craven Cottage og Portman Road.
- **Udeholdets fans** sidder i en afgrænset blok på stadionets rigtige sted (f.eks. i hjørnet på Emirates, i et hjørne på Anfield og bag mål i Newcastle), og resten af stadionet er hjemmefans.
- **Sponsorbander** med Premier Leagues partnere (Barclays, EA SPORTS, Budweiser, Cadbury, Hublot, Sky Sports, TNT Sports, Nike, Carabao, Premier League) og hjemmeklubbens hovedsponsor på de klubber, hvor den er kendt.
**Ændret**
- Kameraet følger bolden mere glidende, så billedet ikke hakker ved mange boldskift.

## Sensible 0.24.0
**Nyt**
- **Egne stadions til alle 20 Premier League-hold** (hjemmeholdet bestemmer stadion): Emirates, Villa Park, Vitality, Gtech, Amex, Stamford Bridge, Coventry Building Society Arena, Selhurst Park, Hill Dickinson Stadium, Craven Cottage, MKM, Portman Road, Elland Road, Anfield, Etihad, Old Trafford, St James' Park (sort/hvide striber), City Ground, Stadium of Light og Tottenham Hotspur Stadium. Sæderne har klubbens farver, banderne bruger hjemmeholdets farver, og der er et tag med eget omrids (lige, afrundet, trappet, skrå eller buet), hvor tilskuerne stadig kan ses igennem. Udeholdets fans sidder i udeholdets farver. Stadionets navn vises kort ved kampstart.
- De 10 generelle stadions har fået tag med omrids.
**Ændret**
- Når målmanden afviser bolden, triller/flyver den kun ca. 80-180 enheder fra mållinjen, altså oftest inde i feltet og nogle gange lige udenfor. Gælder Player1, Player2 og Com.

## Sensible 0.23.0
**Nyt**
- **10 forskellige stadions** (valgt tilfældigt pr. kamp), inspireret af Premier League, Bundesliga og La Liga: Anfield, Allianz Arena, Westfalenstadion, Olympiastadion (løbebane), Bernabéu, Camp Nou, Old Trafford, Mestalla (tern i græsset), Etihad og Tottenham Stadium. De varierer i tilskuerfarver, bander, plæneklip og skygge.
- **Udskiftningsbokse** på venstre side ved midterlinjen med et tilskuer-tag, siddepladser, indskiftere i holdets farver og en teknisk zone for hvert hold.
- **P1 vs P2** har samme holdvalg som venskabskamp (liga først, Player1 og Player2 blinker).
**Ændret**
- Modstanderen scorer på ca. 25 % flere chancer (målmandens redning på målstregen er reduceret).

## Sensible 0.22.2
**Nyt**
- **Nyt net med dybde:** bagnet, sidenet og tag med maskemønster, bagstolper og skygge, så målet ser 3D ud i begge ender. Nettet bølger stadig efter et mål.
**Ændret**
- Venskabskamp: Player1 blinker, mens man vælger liga og hold. Derefter sendes man tilbage til ligavalget, og Com blinker, mens man vælger liga og hold til modstanderen. De to hold kan komme fra forskellige ligaer.

## Sensible 0.22.1
**Ændret**
- Venskabskamp: man vælger først liga og derefter hold. TILBAGE i holdvalget går først et trin tilbage (vælg eget hold igen) og derefter til ligavalget.
- Skruen på bolden er svagere, bevarer sin retning (kan kun justeres lidt, ikke vende til den modsatte side) og klinger af, når bolden er langsom, så den ikke drejer rundt til sidst. Boldens fart påvirkes ikke af skruen.
**Rettet**
- Nettet dækker nu hele målets bredde (der var et hul i højre side).
**Nyt**
- Når bolden rammer overligger eller stolpe, bliver den kortvarigt større med større skygge, og stolpen/overliggeren blinker med en lille ring.

## Sensible 0.22.0
**Nyt**
- **Ny boldfysik:** hårde skud flyver højere, og skyder man alt for hårdt, kan bolden gå over mål. Bolden mister hurtigt fart, når den rammer banen (også efter målmandens udspark og hovedstød), og ligger hurtigere stille.
- **Målspark** tages fra det lille felts kant. Målmanden er låst, til bolden er sparket ud, og ingen andre spillere kan komme ind i feltet før da.
- **Holdvalg i nyt design:** først vælger man sit eget hold (Player1), derefter modstanderen (Com eller Player2). Holdene vises i hjemmebanetrøjens farver, og baggrunden skifter farve efter det valgte hold.
**Ændret**
- Målet er 25 % større (bredde og højde).
- Målmanden er bedre til skud, der kommer lige på ham.

## Sensible 0.21.1
**Ændret**
- Hovedmenuen starter nu med spil: Hurtig kamp, Venskabskamp, Turnering og P1 vs P2 (før "2 spillere"). Indstillinger og Styring ligger nederst i en mindre række.

## Sensible 0.21.0
**Nyt**
- **Pause i kampen:** P eller Escape (computer) eller II-knappen (mobil). Menuen har Fortsæt, Genstart kamp og Til hovedmenu. Kampen pauser også automatisk, hvis man skifter fane.
**Rettet**
- På en rigtig side (f.eks. GitHub Pages) skulle man scrolle til højre i menuen på mobil. Menuen passer nu til skærmens bredde og højde, også i landskab på små telefoner.

## Sensible 0.20.2
**Rettet**
- Når modstanderen tager kickoff eller et andet genstart, venter han ikke længere over et sekund, før han spiller bolden. Den første pasning kommer nu efter ca. et halvt sekund.

## Sensible 0.20.1
**Ændret**
- Modstanderen scorer nu cirka halvt så ofte som før (i en testkamp uden forsvar faldt målene fra ca. 11 til ca. 6 pr. kamp). Din egen målmand dækker et større område og redder oftere skud, der kommer lige på ham, og enkelte skud bliver reddet på stregen. Det gælder ikke 2 spillere.
- Målmanden redder også oftere bolde, der kommer lige på ham, for begge hold.

## Sensible 0.20.0
**Nyt**
- Spillernavne og trøjenumre på 90 af de 92 hold: La Liga, Bundesliga, Superligaen og Champions League-holdene (Wikipedia, september/oktober 2026). Sabah og SønderjyskE mangler, fordi truppen ikke kunne hentes, og viser kun trøjenummer. PSG, Napoli og Roma er skrevet ud fra min egen viden, da siderne ikke havde truppen, så de kan være forældede.
- Spillerens navn øverst til højre er gjort større.

## Sensible 0.19.0
**Nyt**
- **Rigtige spillere i Premier League:** Alle 20 hold har navne og trøjenumre på de 11 startspillere (hentet fra Wikipedia, trupperne som de stod i september/oktober 2026). Opstillingen er mit bud på 4-4-2, ikke de rigtige kampopstillinger. Hold fra de andre ligaer har endnu ingen navne og viser kun trøjenummer.
- **Bolden:** Oppe i højre hjørne står nummer og navn på den spiller, der har bolden.
- **Målscorere:** Ved hvert mål vises målscorerens navn og minut. I halvleg og ved fuld tid vises holdene, resultatet og alle målscorere med minut.
- **Spillerne løber ud af banen** i halvleg og ved fuld tid.

## Sensible 0.18.2
**Ændret**
- Målmanden rejser sig nu fra det sted, hvor han kastede sig, går roligt ind på midten af målet og sparker først bolden ud derfra.

## Sensible 0.18.1
**Rettet**
- Modstanderen kunne blive stående ved midtbanen efter kickoff, når din spiller stod stille med bolden. Den løber nu ind på spilleren og tager bolden, så spillet kommer i gang.
**Ændret**
- Hurtig kamp står nu øverst til venstre i hovedmenuen.

## Sensible 0.18.0
**Nyt**
- **Nye menuer** i samme opbygning som Sensible Soccer: hovedmenu med store felter (2 spillere, Indstillinger, Turnering, Styring, Venskabskamp, Hurtig kamp), undermenuer med grønne knapper og rød Tilbage-knap, blå baggrund med bold. Titel og grafik er tegnet til dette spil.
- **Tre nye ligaer** med rigtige hold for 2026/27: La Liga (20 hold), Bundesliga (18 hold) og Superligaen (12 hold). Alle hold har hjemme-, ude- og tredjetrøje. Trøjefarverne er bedste bud, og især udebane- og tredjetrøjer samt de danske klubber kan være forkerte.
- **Venskabskamp** med alle klubber på tværs af ligaerne, og **Hurtig kamp** med tilfældige hold.
- Styring ligger nu på sin egen side, og Indstillinger indeholder kun valgmulighederne.

## Tilbageført til 0.12.0
Alle ændringer efter 0.12.0 (0.13.0–0.17.0: ny boldfysik, kamera, mål, én-knaps-skud, løs bold m.m.) er fjernet igen. Filerne ligger til reference i sensible/arkiv/ (kun 0.14.0–0.17.0 er gemt som separate filer).

## Sensible 0.12.0
**Nyt**
- **Realistisk græs:** Banen har nu fine græsstrå, bløde skygger og lyse partier, slidte pletter ved målene, straffesparkspletterne og midterspottet samt mørkere kanter. Klippestriberne er nu blødere.
- **Større kampur:** Tiden vises nu større midt i toppen. De sidste 3 minutter af hver halvleg skifter uret til gul og blinker rødt.

**Ændret**
- **Jubel:** Målscoreren løber nu tilfældigt mod enten hjørneflaget eller målet. Hjemmeholdet vælger frit mellem begge sider af målet. Udeholdet fejrer altid i den side, hvor deres fans står (højre side af endetribunen).
- **Hjørnespark:** 5-7 spillere fra hvert hold står i feltet. Resten fordeler sig omkring midten: Angribernes hold holder bagspillere på egen halvdel, og forsvarerne holder nogle tæt på midterlinjen.
- **Mere plads på banen:** Spillere fra samme hold holder nu mere afstand til hinanden i åbent spil. I test er der cirka halvt så mange tætte par af holdkammerater som før.

## Sensible 0.11.1
**Ændret**
- Skudindstillingen hedder nu "Skud: Power (hold nede)" i stedet for "Oplad".
- Styringsvejledningen i menuen er kortet ned til retning, SKYD og PASS.

## Sensible 0.11.0
**Nyt**
- **Separat menu til indstillinger og styring:** Sværhedsgrad, skudtype, dag/aften, hastighed, 1 eller 2 spillere og styringsvejledningen ligger nu under "Indstillinger og styring". Holdvalget viser kun hold, tilfældige hold, indstillinger og START KAMP.
- **Nettet bølger:** Når der scores, bølger nettet i målet og udbuler, hvor bolden ramte.

**Ændret**
- **Aften:** Banen er nu tydeligt oplyst, og tribunerne er mørkere. Spillerne har flere svage skygger fra projektørerne i hjørnerne. Før var hele billedet for mørkt.

## Sensible 0.10.0
**Nyt**
- **Måljubel:** Efter et mål løber målscoreren hen mod hjørneflaget, og holdkammeraterne løber efter og samles om ham med armene i vejret. Kameraet følger målscoreren under jublen, og jublen varer lidt længere.
- **Tilskuerne jubler:** Når et hold scorer, vinker tilskuerne med flag i holdets farver, hopper med hænderne i vejret, og der falder konfetti over tribunen.
- **Aften med flodlys:** Nyt valg i menuen, "Tid på dagen: Dag / Aften (flodlys)". Aften giver en mørk stadion med lys fra seks flodlysmaster, og banen er stadig tydelig. Lysene ses som skinnende stjerner i kanten af billedet.

## Sensible 0.9.1
**Ændret**
- **Indkast:** Mindre kraftige. Det lange indkast rækker cirka 40 % kortere, det korte cirka 30 % kortere.
- **Større mål:** Målet er 20 % bredere.
- **Skrå skud:** Skud fra siderne har nu større chance for at score, uanset skudtype. Målmanden reagerer senere og når oftere ikke bolden, og stolperne er mere tilgivende. I test giver skud fra ca. 35° cirka 10 % flere mål end skud lige foran målet.
- Målmandens redningsprocenter er justeret for det bredere mål (ca. 19 % på Let, 43 % på Normal, 70 % på Svært af skud på mål).

## Sensible 0.9.0
**Nyt**
- **Auto-aim ved skud:** Dine skud (opladede, instant og første gangs skud) får hjælp til at ramme mod målet. Chancen stiger, jo mere du peger mod målet, og falder med afstanden. Boldens placering i målet varierer, og ofte lander den ude i siderne, så målmanden ikke altid når den. Hjælpen afhænger af sværhedsgraden: Let 95 %, Normal 80 %, Svært 60 % i bedste tilfælde. Skyder du helt forkert, hjælper den ikke.
- **Rigtige trøjer til alle 51 klubber:** Hjemme-, ude- og tredjetrøje med klubbernes farver og mønstre (striber, ringe, halve, nålestriber, skråbånd, tern, ærmer i anden farve). Spillerne har nu også sokker i egen farve. Premier League-klubberne følger de beskrevne 2026/27-trøjer, hvor jeg kunne finde dem. Øvrige er mit bedste bud. Udeholdet vælger automatisk den trøje, der adskiller sig mest fra hjemmeholdets.

**Ændret**
- **Instant skud:** Skudstyrken afhænger nu af afstanden til målet: fuld kraft tæt på, cirka 65 % langt væk.
- **Lettere spil:** Spillet er cirka 10 % lettere på alle sværhedsgrader. Målmanden redder ca. 21 % (Let), 46 % (Normal) og 71 % (Svært) af skud på mål, og computerens spillere løber lidt langsommere og skyder lidt sjældnere.

## Sensible 0.8.0
**Nyt**
- **Ekstra trøjer til alle klubber:** Alle klubber har nu en udebanetrøje og en tredjetrøje. Udeholdet vælger automatisk den trøje, der ligner hjemmeholdets mindst. I alle 1.640 mulige opsætninger i Premier League og Champions League er farveforskellen tydelig.
- **Første gangs skud mod løse bolde:** Tryk SKYD, mens du løber mod en bold, ingen har kontrol over, og du er tæt på (under ca. 60 px), så skyder spilleren første gang. Er du længere væk, glider du stadig efter den.

**Ændret**
- **Udspark:** Målmandens udspark rækker nu cirka 75 % så langt som før (computeren) og ca. 90 % (dig).
- **Indkast:** Den, der kaster ind, står helt stille, indtil bolden er kastet, og kan ikke længere skubbes af andre spillere.
- **Sammenstød:** Når en spiller løber ind i en modspiller med bolden, er der større chance for at vinde den, især ved høj fart mod hinanden. Det gælder nu også spillere, du selv styrer.

## Sensible 0.7.0
**Nyt**
- **Sværhedsgrader:** Let, Normal og Svært vælges i menuen. De ændrer målmandens kvalitet, computerens løbefart (90 % / 100 % / 108 %) og hvor ofte computeren skyder. Dit eget mål forsvares af en målmand, der er bedre på Let og svagere på Svært.
- **Instant skud:** Nyt valg i menuen, "Skud: Instant". Et tryk på SKYD giver straks et relativt hårdt skud i den retning, spilleren kigger. Valget "Power (hold nede)" er det hidtidige: kort tryk = aflevering, hold = opladet skud.

**Ændret**
- **Svagere målmand:** På Normal redder han cirka halvdelen så mange skud på mål som før (målt i simulation: ca. 51 % mod ca. 98 % før). Let ca. 26 %, Svært ca. 78 %. Han kan nu også misse bolden helt ved hårde skud, ikke kun lade den prelle af.

## Sensible 0.6.0
**Nyt**
- **Hovedstød og volleys:** Højde på bolden betyder nu noget. Tryk SKYD lige før en høj bold når din spiller (og hold en retning for at sigte), så hopper han op og headet den, eller tager den på volley, hvis den er lavere. Computerens spillere header og volleyer selv. Angribere skyder mod mål, forsvarere clearer, og ellers heades bolden videre til en medspiller. Din forsvarsspiller clearer automatisk nær eget mål, når modstanderen har sparket bolden.
- **Hjørnespark:** Forsvarerne vinder oftere hovedstødskampen (cirka 7 af 10 gange), og en målmand kan gribe eller prelle indlæg væk.
- **Klogere målmand:** Han stiller sig på linjen mellem bold og mål og kommer lidt ud, når bolden er tæt på. Han læser skud, dykker efter dem og kan nå langt ud i hjørnerne, men har en lille reaktionstid, så meget hårde skud helt ud i hjørnet kan stadig gå ind. Han kommer også ud efter indlæg.
- **Dykanimation og handsker:** Målmanden dykker med strakte arme og kommer sig bagefter. Han har nu tydelige handsker (lime eller gule).
- **Klogere forsvar:** Forsvarere og midtbane dækker modstanderen goal-side, i stedet for kun at løbe mod bolden, og en anden spiller dækker rummet bag den, der presser.
- **Boldens højde:** Bolden vokser lidt, når den er højt oppe, har en skygge på jorden, der adskiller sig fra bolden, og en lille landingsring, når den er højt.

**Rettet**
- SKYD udløste en glidetackling, selvom en høj bold var lige over din spiller. Nu tæller det som skud eller hovedstød.

## Sensible 0.5.1
**Rettet**
- Førstegangsskud har nu et større tidsvindue: når en aflevering er på vej mod din spiller, kan du trykke SKYD op til ca. 0,75 sekund, før bolden når ham. Før var det kun ca. 0,25 sekund.

## Sensible 0.5.0
**Nyt**
- **Førstegangsskud:** Tryk (eller hold) SKYD, før bolden når din spiller, så skyder han med det samme, når bolden rammer ham. Retning efter din styring (ellers den vej, spilleren vender), og styrken følger, hvor længe du har holdt knappen. Mens en aflevering er på vej, udløser SKYD ikke længere en glidetackling.
- **Rigtige hjørnespark:** Holdene stiller op i feltet (angribere foran målet, forsvarere markerer). Bolden sparkes højt ind i feltet ude foran det lille felt. Du sigter med retningen (en gul ring viser målet) og sparker med SKYD eller PASS. Computeren sparker selv efter kort tid. Angribere og forsvarere løber mod landingspunktet, mens bolden er i luften.

**Rettet**
- Aflevering virker mere pålideligt under pres: tryk huskes i 0,2 sekunder, boldfører er beskyttet mod at få bolden taget i et kort øjeblik efter modtagelse (glidetacklinger virker stadig), og modstandere kan ikke fange bolden lige efter dit spark (12 billeder i stedet for 7).

## Sensible 0.4.1
**Nyt**
- Hastighedsvalg i menuen: **Normal** (75 % af den tidligere fart, ny standard) eller **Speed up** (den hidtidige fart). Gælder løb, skud, afleveringer og kampens ur.

## Sensible 0.4.0
**Nyt**
- **To spillere lokalt på ét tastatur** (tilvalg i menuen, standard er stadig én spiller). Spiller 1: piletaster, skyd 0 (numpad), aflever , (numpad). Spiller 2: WASD, skyd G, aflever H. I to-spiller-tilstand er computerens svagheder slået fra for begge hold.
- Spillere i otte retninger: de vender sig nu rigtigt op, ned, til siderne og diagonalt, med ryg, ansigt og profil.
- Publikum jubler, når deres hold scorer. Tribunerne er i hjemmeholdets farver, og halvdelen af den ene endetribune er i udeholdets farver. Hver side jubler kun for sit eget holds mål.
- Spillerne og bolden er cirka 15 % større på banen.

## Sensible 0.3.0
**Nyt**
- Målstolper, overligger og afbøjninger: bolden kan ramme stolpe eller overligger og springe tilbage i spil. Forsvarere kan afbøje hårde skud, og så er det hjørnespark.
- Skudstyrke-baren er større og skifter farve fra grøn til gul til rød.
- Holdets kæder er tættere: Forsvaret møder boldføreren tidligere, midtbanen trækker med tilbage, når modstanderen har bolden, og både midtbane og forsvar rykker op, når holdet selv har den.

**Rettet**
- Målmanden kan ikke længere gå ud af straffesparksfeltet med bolden i hænderne.

## Sensible 0.2.0
**Nyt**
- Turneringsvalg som det første i menuen: **Premier League** (20 hold) eller **Champions League** (36 hold i ligafasen 2026/27).
- Tv-inspireret design i hver turneringens farver: scoreboard, menuer, reklamebander og boldens mønster.
- Tribuner med publikum bag målene og langs langsiderne. Kameraet er zoomet 20 % ud.
- Målmandens udspark ruller ikke længere så langt, efter bolden har ramt jorden.

**Rettet**
- Mål blev ikke altid givet, når en spiller bar bolden over målstregen. Nu tæller det, når hele bolden er over stregen mellem stolperne.
- Spillere kunne være meget langsomme lige efter et spillerskift.
- Afleveringer blev ofte opsnappet med det samme, når en modspiller stod helt tæt på.
- Computerens spillere skyder oftere, når de er tæt på målet.
- Hjørnespark, målspark og indkast følger fodboldens regler også ved bolde, som bæres ud.

## Sensible 0.1.0
Første spilbare version.
- Top-down kamp med 11 mod 11, to halvlege (2 min. hver), målmænd, hold-bevægelser og computerstyret modstander.
- Aflevering, skud med opladning, skru i luften, sigtet PASS med magneteffekt, stående og glidende tackling.
- Hjørnespark, målspark og indkast (PASS = kort kast, SKYD = langt kast).
- Mobilstyring med joystick, SKYD- og PASS-knap.
- Premier League-hold med hjemmebanetrøjer og automatisk udebanetrøje ved farvekollision.
