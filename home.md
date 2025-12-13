---
cssclass: note
date_created: 2025-11-24
publish: true
author: Ueberphilosophy
---
# Startseite
Sammlung von Online [[-Materialien|Materialien]] zum Lernen und [[timeline|Quelltexten]]. Diese befindet sich als kaum kommentierte Linksammlung im Ordner `Materialen`. Die selbst erstellen Definitionen im Ordner `Definitionen`  sind grob. Der Ordner `stutiis` dient für jeweils eigene Notizen. Der Name ist durchgängig falsch geschrieben, so ist er eindeutig und kann über alle Dateien ersetzt werden. 

 - Klick vor (links neben) Überschriften klappt den Inhalt ein, nochmaliger Klick wieder auf; das zugehörige Symbol wird beim Drüberfahren mit der Maus sichtbar. 
 - Beim  Klick mit der Maus öffnen alle Links, auch externe,  im selben Fenster. `Ctrl`^[`Shift`]-Klick öffnet in einem neuen Tab.
 - Die Verlinkung von Fußnoten funktioniert nicht, entsprechend auch keine Hover-Effekte von Fußnoten.^[Das ist wohl dem Plugin  [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export); doch es exportiert die Seitenleisten mit der Ordnerstruktur und der Dateistruktur ohne Anpassung ohne Probleme, darum behalte ich es bei, hoffend, dass es verbessert wird.]
%% Den Dateibaum anpassen
site-lib/html/file-tree-content.html

```
:%s/<div class="tree-item-self is-clickable mod-collapsible nav-folder-title" data-path="Werkstatt"\_.\{-}zzzzzz<\/div><\/a><div class="tree-item-children nav-file-children"><\/div><\/div><\/div><\/div>//
```

Batch `.makepriv` im Verzeichnis `/opt/lampp/htdocs/schoolout` aufrufen
```
#!/usr/bin/env bash
cp site-lib/html/file-tree-content.html site-lib/html/file-tree-content.sv
sed -i 's/<div class="tree-item-self is-clickable mod-collapsible nav-folder-title" data-path="Werkstatt".*zzzzzz<\/div><\/a><div class="tree-item-children nav-file-children"><\/div><\/div><\/div><\/div>//' site-lib/html/file-tree-content.html
```
`.domakepub` stellt die öffentliche Version wieder her
%%

## Inhalt
Es wird unterschieden zwischen Lernmaterialen, hauptsächlich Videos und Audios,  und Quellen. Lernmaterialen sind über ein Thema, Quellen sind  frei zugängliche Originaltexte. Für Lernmaterialien gibt es einen  [[-Materialien|Katalog]] nach Bereichen. Quellen sind nach Autoren unterschieden, sie sind über die [[timeline]]  zu finden. Der Katalog wird automatisch erstellt, die timeline manuell. Eventuell gibt es Fehler und in den Auflistungen fehlen Seiten. Über die Seitenleiste links kann man alle Seiten finden.


- Grobe [[timeline|Zeitleiste]]  mit Links zu Quellenseiten (verknüpft über den Autorennamen)
- [[-Materialien|Katalog]] mit Links zu thematischen Sammlungen von  Links zu Lernmaterialen
### Seiten für Quellen
- [Gottwein](https://www.gottwein.de/7)
- [Perseus](https://www.perseus.tufts.edu/hopper/)
- [librivox](https://librivox.org/)
- [Internet Archive](https://archive.org/)
- [zeno](http://www.zeno.org/)
- [Projekt Gutenberg](https://www.projekt-gutenberg.org/)
- [Wikisource](https://wikisource.org/wiki/Main_Page)
- [Google Books](https://books.google.de/)
- [jstor](https://www.jstor.org/)
- [Deutsches Textarchiv](https://deutschestextarchiv.de/)
- [Österreichische Nationalbibliothek](https://onb.digital/)
- [Standard E-Books](https://standardebooks.org/)
- [Französische Nationalbibliothek](https://www.bnf.fr/en) 
- [Münchener Digitalisierungszentrum](https://www.digitale-sammlungen.de/de)
- [Bibliothek Uni Halle](https://halit.bibliothek.uni-halle.de/search?q=&v=)
- [biblotheca augusthana](https://www.hs-augsburg.de/~harsch/augustana.html)
- [Herzogin Anna Amalia Bibliothek](https://haab-digital.klassik-stiftung.de/viewer/index/)
- [Internet History Sourcebooks Project](https://sourcebooks.fordham.edu/index.asp)
- [Logos Verlag Open Access](https://www.logos-verlag.de/cgi-bin/mylibrary)
- [Marxist Internet Archive](https://www.marxists.org/index.htm)
- [Hegel Werke](https://hegel.net/hegelwerke/)
- [Psychoanalytische Bibliothek Berlin](https://psybi-berlin.de/literatur-online/)
- [oapen](https://oapen.org/)
- [de Gruyter open access](https://library.oapen.org/browse?type=publisher&value=De+Gruyter)
- [Logos Verlag Open Access Verzeichnis](https://www.logos-verlag.de/ebooks/OA/)
%% 
- [Annas Archive](https://annas-archive.org/) Schattenarchiv, Grauzone, manchmal illegal
- https://dokumen.pub/  Bücher mit Copyright Verletzungen und evlt Malware 
- [Zeitungsartikel archive.ph](https://archive.ph/)
%% 
### Kanäle für Materialen
#### Sammlungen von Kanälen
- [Uni Frankfurt Portalsammlung](https://okapi.uni-frankfurt.de/index.php/Philosophie_Multimedial)
- [Vorlesungssammlung Philosophie](https://www.edukatico.org/de/online-kurse/philosophie)
- [Philosophiechannels auf YouTube](https://griffl.org/die-besten-philosophie-channels-auf-youtube/)
- [30 Quellen für Onlinevorlesungen aller Fachbereiche](https://www.fernstudi.net/magazin/10963)
- [Wissenschaftspodcasts](https://wissenschaftspodcasts.de/)
#### Kanäle Philosophie
- [LMU Videos von Vorlesungen und Vorträgen Philosophie](https://www.philosophie.lmu.de/de/medien/videos-von-vorlesungen-und-vortraegen/)
- [Uni Hannover Philosophie Vorlesungsaufzeichnungen](https://www.philos.uni-hannover.de/de/studium/lehrveranstaltungen/videos)
- [Uni Tübingen kath-theol Fakultät Vorlesungen als Videos](https://uni-tuebingen.de/fakultaeten/katholisch-theologische-fakultaet/lehrstuehle/philosophische-grundfragen-der-theologie/vorlesungen-als-video/)
- [TU Darmstadt Philosophie Audiothek](https://www.philosophie.tu-darmstadt.de/institut_phil/audiothek_phil/index.de.jsp)
- [Philosophische Audiothek Uni Wien](https://audiothek.philo.at/)
- [Philosophie Uni Stuttgart](https://www.youtube.com/@institutfurphilosophieuniv5984/featured)
- [Finkelde YouTube](https://www.youtube.com/@dominikfinkelde/videos) 
- [Online Vorlesungen Philosophie des Geistes](https://www.online-vorlesungen.de/Videos/Philosophie/Philosophie_des_Geistes.htm)
#### Andere Bereiche
- [LMU Psychologie/Pädagogik - einige frei](https://videoonline.edu.lmu.de/de/semester)
- [Uni Düsseldorf Mediathek](https://mediathek.hhu.de/)
- [Uni Hamburg Lecture2Go Videokatalog](https://lecture2go.uni-hamburg.de/l2go)
- [Alexander Lasch Linguistik YouTube](https://www.youtube.com/@AlexanderLasch/featured)
- [Elena Smirnova Sprachwissenschaft YouTube](https://www.youtube.com/@elenasmirnova674/featured)
- [Lacan Podcast](http://lacast.de/) und [Lacan Videos](https://lacan-entziffern.de/category/video-lacan-entziffern/)
- [ARD Radiowissen](https://www.ardaudiothek.de/sendung/radiowissen/urn:ard:show:a5369fa8556fcd7b/)
%%https://transformatorische-bildung.de/ %%
## Technisches über diese Site
### Einstellungen
- Erstellt mit [Obsidian](https://obsidian.md/), 
- exportiert mit dem Plugin [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export). 
- Einstellungen
  - Editor
    - Default editing mode: Source mode 
    - Strict Line Breaks, 
    - Properties in Document hidden, 
    - Show line numbers, 
    - vim-key bindings, 
  - Files and Links 
    - Attachments nach `allhelperfiles/allresources` , 
    - Show all file types
  - Appearance
    -  Theme `Obuntu`, die Orange Farbe zu Grün geändert %%Vorher Willemstad%%
    - Nicht Show Inline Title
   - Hotkeys
    - Eigene Shortcuts in `.obsidian/hotkeys.json` ^[hardlinked zu `allhelperfiles/pointobsidian/hotkeys.json`, damit es im Vault gesehen werden kann, dies hat keinen Einfluss auf die Funktionalität].
  - Diary 
    - Verzeichnis für Daily Notes `Werkstatt/Diary`. 
  - Templates
    - template folder location  `allhelperfiles/allvorlagen`.  
  - Dataview
    -  Enable Javascript Queries
  - Templater
    - Template Folder Location `allhelperfiles/allvorlagen`
    - automatic jump to cursor, 
    - Trigger Templater on new file creation, 
    - Kein enable folder templates, 
    - Enable file regex template
    - file regex template `allhelperfiles/allvorlagen/foty_Vorlage.md`, 
    - Script files folder location `allhelperfiles/allscripts`
- Sonst Defaults, 
- Plugin [Templater](https://github.com/SilentVoid13/Templater) erstellt neue Notes mit [[home#^Script|Script]] `allhelperfiles/allscripts/foty.js` und [[home#^Vorlage|Vorlage]] `allhelperfiles/allvorlagen/foty_Vorlage.md`
- Für Zeitleiste [Timeline Callout von FirelsGood](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Timeline%20callout.md), leicht angepasst, als `timeline.css` ^[hardlinked zu `allhelperfiles/pointobsidian/snippets/timeline.css`, damit es im Vault gesehen werden kann, dies hat keinen Einfluss auf die Funktionalität]. 
- Editmode angepasst mit eigener Datei `plainsource.css` ^[hardlinked zu `allhelperfiles/pointobsidian/snippets/plainsource.css`, damit es im Vault gesehen werden kann, dies hat keinen Einfluss auf die Funktionalität].
- Export angepasst mit eigener Datei  `obuntu_adapt.css` ^[hardlinked zu `allhelperfiles/pointobsidian/snippets/obuntu_adap.css`, damit es im Vault gesehen werden kann, dies hat keinen Einfluss auf die Funktionalität]. 
- Embedded Links in den Katalogen angepasst mit eigener Datei  `catalogs.css` ^[hardlinked zu `allhelperfiles/pointobsidian/snippets/catalogs.css`, damit es im Vault gesehen werden kann, dies hat keinen Einfluss auf die Funktionalität]. 
- Eigenes Script `foty.js` nach `allhelperfiles/allscripts`, ^Script
- Eigenes Template `foty_Vorlage.md` nach `allhelperfiles/allvorlagen`. ^Vorlage
- Plugin [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)
- Plugin [Shortcuts Extender](https://github.com/ryjjin/Obsidian-shortcuts-extender) ^[Nur wegen des Backticks für Code, insbesondere des dreifachen Backticks für Code Blöcke]
- Plugin [ProZen](https://github.com/cmoskvitin/obsidian-prozen)
- Plugin [Typewriter Mode](https://github.com/davisriedel/obsidian-typewriter-mode)
- Plugin [Vimrc](https://github.com/esm7/obsidian-vimrc-support)
### Formatierungen
#### Basics
siehe Obsidian [Basic Formatting Syntax](https://help.obsidian.md/syntax)
- __bold__ *schräg* ~~Durchgestrichen~~ ==Highlight== ***Fett Schräg***  ***==Fett Schräg Highlight==*** ^textformate
- [[home#^zitat|Zitate]], beginnend mit \> 
- Listen, wie diese, auch geschachtelt
- 1) und auch,
- 2) nummerierte Listen
- sowie Aufgaben
- - [x] erledigt
- - [ ] offen
- Inline `code` und Codeblöcke mit \`\`\` umschlossen
- Fußnoten direkt im Text^[Nach einem Dach steht der Fussnotentext in eckigen Klammern] und  mit `[^zahl]` längere Fußnoten[^2] (keine Hover-Anzeige  von Fußnoten mit `Webpage HTML Export`)
- internes und externe Links (Benutze auch Wiki-Links)
- Bilder anzeigen mit \!\[\]\(link\), in Größe 250  mit  \!\[\|250\]\(link\)
- Absatz (Leerzeile beendet Absatz)
- mehrere Leerzeichen verschwinden zu einem 
- Neue Zeile verschwindet, außer zwei Leerzeichen sind vorm Zeilenumbruch
- Überschriften (# bis ###### )
- Trennlinie mit drei \-\-\-
- Kommentare innerhalb von \%\%, die nicht exportiert werden - %%sieht man nicht%% -

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society. ==-Doug Engelbart, 1961== ^zitat

#### Weitergehende Formatierungen
siehe Obsidian [Advanced Formatting Syntax](https://help.obsidian.md/advanced-syntax) und folgende Seiten für
- Tabellen
- Mermaid Diagramme
- Mathematische Ausdrücke innerhalb  \$-Zeichen inline $e^{2i\pi} = 1$ oder Paaren von \$\$-Zeichen als Block
- Anker, Links zu [[home#^textformate|Ankern]], sowie Linknamenüberschreibungen
- Callouts
- Tags #tag und Nested Tags #nested/tag - Groß/Kleinschreibung ist für Tags egal

> [!quote]- Das ist ein Callout Block
> Durch ein Pluszeichen wäre er ursprünglich aufgefaltet. So wird er gefaltet angezeigt.
>
> Es gibt folgende Callouts: Note, Abstract, Info, Todo, Tip, Success, Question, Warning, Failure, Danger, Bug, Example, Quote - alle kleingeschrieben, aber groß angezeigt, falls der Titel nicht überschrieben wird

### Obsidian 
Dieser Abschnitt gilt nur für  eine laufende Obsidian Instanz

- Obwohl man den Notiznamen für eine neue Notiz im Dialogprompt angegeben hat, muss man noch `<return>` drücken. Dies ist kein Fehler des Scripts. Eventuell ist es eine Regression, jahrelang davor ist es mir nicht negativ aufgefallen.
#### tote interne Links
%%
```dataviewjs
let r = Object.entries(dv.app.metadataCache.unresolvedLinks) .filter(([k,v])=>Object.keys(v).length) .flatMap(([k,v]) => Object.keys(v).map(x=>dv.fileLink(x)))  
dv.list([...new Set(r)])  
```
%%

```dataviewjs
let result = {};
function process(referingFile, unresolvedLinks) {
    Object.keys(unresolvedLinks).forEach(function (link) {
        link = dv.fileLink(link);
        if (!result[link]) result[link] = [];
        result[link].push(dv.fileLink(referingFile));
    });
}

// Filter for files in a specific directory (e.g., starting with "10 Example Data/dailys")
Object.entries(dv.app.metadataCache.unresolvedLinks)
    .filter(([referingFile]) => {
        return !referingFile.startsWith("allhelperfiles/allvorlagen");
    })
    .forEach(([referingFile, unresolvedLink]) => process(referingFile, unresolvedLink));

// Display the results in a table
dv.table(
    ["Non existing notes", "Linked from"],
    Object.entries(result).map(([unresolvedLink, referingFiles]) => [
        unresolvedLink,
        referingFiles.join(" • ")
    ])
);   
```
### github.io
- Github hosted mit dem Service [Github Pages](https://docs.github.com/de/pages) zu jedem Account eine statische Webseite. 
- Das Github Projekt, das diese Seite definiert muss `accountname.github.io` heißen.
- Früher hieß der gesamte Service github.io, heute heißt er Github Pages.
- Github läuft seit über einem Jahrzehnt auch für kostenlose Konten stabil und problemlos
- Wenigstens Verzeichnisse dürfen nicht mit einem Unterstrich beginnen^[Für Dateien extra habe ich das dann nicht ausprobiert]
- Ein Minuszeichen würde gehen, macht aber Zugriff über [bash](https://de.wikipedia.org/wiki/Bash_(Shell)) komplizierter
%%
tote externe Links checken: https://error404.atomseo.com/
%%
## -footnotes

[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

