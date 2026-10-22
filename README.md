# Sensible

Et top-down fodboldspil i browseren, inspireret af Sensible Soccer / Sensible World of Soccer. Det er én HTML-fil uden afhængigheder og virker på computer og mobil (landskab anbefales).

**Aktuel version: Sensible 0.34.3.** Ændringer pr. version står i [CHANGELOG.md](CHANGELOG.md).

## Spillet

- **Hurtig kamp:** tilfældige hold, start med ét tryk.
- **Venskabskamp:** vælg to hold på tværs af alle ligaer.
- **P1 vs P2:** to mennesker på samme tastatur.
- **Ligaer 2026/27:** Premier League (20), La Liga (20), Bundesliga (18), Superligaen (12) og Champions League-holdene.
- **Rigtige spillere:** 90 af 92 hold har navne og trøjenumre på de 11 startspillere. Spillerens nummer og navn står øverst til højre, når han har bolden. Se afsnittet *Data* nedenfor.
- **Kampforløb:** 2 halvlegsure à 45 minutter, målscorer og minut ved hvert mål, og en rapport i halvleg og ved fuld tid med holdene, resultatet og alle målscorere. Spillerne løber ud af banen.
- **Sværhedsgrad:** Let, Normal og Svær (Indstillinger). Det påvirker computerens fart, skud og målmand.
- **Pause:** tryk P eller Escape, eller tryk på II-knappen under toplinjen. Derfra kan du fortsætte, genstarte kampen eller gå til hovedmenuen. Kampen pauser også, hvis du skifter fane.
- **Natkamp**, **instant skud** (ét tryk) og **skud-power-bar** kan vælges i Indstillinger.

## Styring

| | Computer | Mobil |
|---|---|---|
| Løb | piletaster / WASD | træk på venstre side |
| Aflever / skyd | Mellemrum (kort = aflever, hold = skud) | SKYD-knap (højre side) |
| Sigtet aflevering | X / Shift | PASS-knap |
| Stående tackling | PASS tæt på modstanderen med bolden | PASS-knap |
| Glidetackling | Mellemrum uden bold | SKYD uden bold |
| Førstegangsskud | tryk SKYD, før bolden når spilleren | samme |
| Hjørnespark | sigt med retning, SKYD/PASS | samme |
| Auto-aim | skud mod målet får hjælp til at ramme (afhænger af sværhedsgrad) | samme |
| Hovedstød / volley | SKYD lige før en høj bold når spilleren | samme |
| Skru | hold en retning, mens bolden er i luften | samme |
| Pause | P / Escape | II-knappen |

### To spillere på samme tastatur

Vælg "P1 vs P2" i hovedmenuen.

| | Spiller 1 (hjemmehold) | Spiller 2 |
|---|---|---|
| Løb | piletaster | WASD |
| Skyd | 0 (numpad) | G |
| Aflever | , (numpad) | H |

## Kør det

Åbn `index.html` i en browser. Der er ingen afhængigheder eller build-trin. Skrifttypen *Press Start 2P* hentes fra Google Fonts, men spillet virker også uden.

### GitHub Pages

Repository → Settings → Pages → Source: `main`, mappen `/ (root)`. Spillet ligger derefter på `https://<brugernavn>.github.io/<repo>/`.

## Opbygning

Alt ligger i `index.html`:

- 60 faste opdateringer i sekundet og tegning på et canvas.
- Holdene, farverne og ligaerne ligger i tabeller øverst i scriptet (`KITS`, `COMPS`, `ROSTER`).
- Computerspillerne bruger en enkel opstilling (4-4-2) med presspillere, markering og målmandsstyring.

## Data

Spillertrupperne er hentet fra Wikipedia (september/oktober 2026) og sat sammen til en 4-4-2-startopstilling med mit bud på, hvem der starter. De kan indeholde fejl, og de er ikke de rigtige kampopstillinger.
- Sabah og SønderjyskE mangler spillernavne og viser kun trøjenummer.
- PSG, Napoli og Roma er skrevet ud fra almindelig viden og kan være forældede.

Holdfarverne er tilnærmede hjemmebanefarver. Der er ingen officielle klublogoer eller licenseret grafik.

## Planlagt

- Gemme fremdrift (sæson og cup).
- Online-spil 1 mod 1 med rollback-netkode over WebRTC.
