---
cssclass: note
date_created: 2025-11-24
publish: true
author: Ueberphilosophy
---
# Startseite
Sammlung von Online [[-Materialien|Materialien]] zum Lernen und [[timeline|Quelltexten]]. Diese befindet sich als kaum kommentierte Linksammlung im Ordner Materialen.  Andere Ordner enthalten eigene Texte oder selbst erstellte Definitionen, sie werden nicht weiter beschrieben.

 - Klick vor (links neben) Überschriften klappt den Inhalt ein, nochmaliger Klick wieder auf; das zugehörige Symbol ist leider nicht sichtbar. 
 - Beim  Klick mit der Maus öffnen alle Links, auch externe, leider im selben Fenster. 
 - Callouts sind nicht klappbar. 
 - Die Verlinkung von Fußnoten funktioniert nicht.
 - Diese Nachteile sind der Art des Exports geschuldet, wohl dem Plugin  [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export); doch es exportiert die Seitenleisten mit der Ordnerstruktur und der Dateistruktur ohne Anpassung ohne Probleme, darum behalte ich es bei, hoffend, dass es verbessert wird.

## Inhalt
Es wird unterschieden zwischen Lernmaterialen, hauptsächlich Videos und Audios,  und Quellen. Lernmaterialen sind über ein Thema, Quellen sind  frei zugängliche Originaltexte. Für Lernmaterialien gibt es einen  [[-Materialien|Katalog]] nach Bereichen. Quellen sind nach Autoren unterschieden, sie sind über die [[timeline]]  zu finden. Beide Auflistungen sind da  manuell erstellt möglicherweise nicht aktuell. Über die Seitenleiste links kann man alle Seiten finden.


- Grobe [[timeline|Zeitleiste]]  mit Links zu Quellenseiten (verknüpft über den Autorennamen)
- [[-Materialien|Katalog]] mit Links zu thematischen Sammlungen von  Links zu Lernmaterialen
### Allgemeine Quellen
- [Gottwein](https://www.gottwein.de/7)
- [Perseus](https://www.perseus.tufts.edu/hopper/)
- [librivox](https://librivox.org/)
- [Internet Archive](https://archive.org/)
- [zeno](http://www.zeno.org/)
- [Projekt Gutenberg](https://www.projekt-gutenberg.org/)
- [Annas Archive](https://annas-archive.org/)
- [Google Books](https://books.google.de/)
- [jstor](https://www.jstor.org/)
- [biblotheca augusthana](https://www.hs-augsburg.de/~harsch/augustana.html)
- [Herzogin Anna Amalia Bibliothek](https://haab-digital.klassik-stiftung.de/viewer/index/)
- [Österreichische Nationalbibliothek](https://onb.digital/)
- 
%% https://dokumen.pub/  Bücher mit Copyright Verletzungen und evlt Malware %% 
## Technisches über diese Site
### Einstellungen
- Erstellt mit [Obsidian](https://obsidian.md/), 
- exportiert mit dem Plugin [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export). 
- Verzeichnis für Daily Notes `Werkstatt/Diary`. 
- Strict Line Breaks, 
- Show line numbers, 
- Source-Editing Mode, 
- Properties in Document hidden, 
- vim-key bindings, 
- Nicht Show Inline Title, 
- Attachments nach `allhelperfiles/allresources` , 
- template folder location  `allhelperfiles/allvorlagen`.  
- Plugin [Templater](https://github.com/SilentVoid13/Templater) erstellt neue Notes.  
- Für Zeitleiste [Timeline Callout von FirelsGood](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Timeline%20callout.md) als `timeline.css`. 
- Sonst Defaults, außer Theme `Willemstad`, 
- angepasst mit dem Plugin [Style Settings](https://github.com/mgmeyers/obsidian-style-settings), das Einstellungen in `data.json` speichert. 
- Der Export angepasst mit eigener Datei  `willemstad_to_html.css`. 
- Zeitleiste verlangsamt den Export und wird nicht korrekt exportiert.

- Eigenes Script `foty.js` nach `allhelperfiles/allscripts`, 
- Template `foty_Vorlage.md` nach `allhelperfiles/allvorlagen`. 
- Im Templater Template folder location auf `allhelperfiles/allvorlagen`, 
- automatic jump to cursor, 
- Trigger Templater on new file creation, 
- Kein enable folder templates, 
- file regex template `allhelperfiles/allvorlagen/foty_Vorlage.md`, 
- Script files folder location `allhelperfiles/allscripts`
### Formatierungen
#### Basics
siehe Obsidian [Basic Formatting Syntax](https://help.obsidian.md/syntax)
- __bold__ *schräg* ~~Durchgestrichen~~ ==Highlight== ***Fett Schräg***  ***==Fett Schräg Highlight==*** ^textformate
- [[home#^zitat|Zitate]], beginnend mit \> 
- Listen, wie diese, auch geschachtelt
- 1) und auch
- 2) nummerierte Listen
- sowie Aufgaben
- - [x] erledigt
- - [ ] offen
- Inline `code` und Codeblöcke mit \`\`\` umschlossen
- Fußnoten direkt im Text ^[Nach einem Dach steht der Fussnotentext in eckigen Klammern] und längere Fußnoten[^2] (keine Hover-Anzeige  mit `Webpage HTML Export`)
- internes und externe Links (Benutze auch Wiki-Links)
- Bilder anzeigen mit \!\[\]\(link\), in Größe 250  mit  \!\[\|250\]\(link\)
- Absatz (Leerzeile beendet Absatz)
- mehrere Leerzeichen verschwinden zu einem 
- Neue Zeile verschwindet, außer zwei Leerzeichen sind vorm Zeilenumbruch
- Überschriften (# bis ###### )
- Trennlinie mit drei \-\-\-
- Kommentare innerhalb von \%\%, die nicht exportiert werden - %%sieht man nicht%% -

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society. ==-Doug Engelbart, 1961== ^zitat

#### Weitergehend
siehe Obsidian [# Advanced Formatting Syntax](https://help.obsidian.md/advanced-syntax) und folgende Seiten
- Tabellen
- Mermaid Diagramme
- Mathematische Ausdrücke innerhalb  \$Zeichen inline $e^{2i\pi} = 1$ oder  \$\$ Zeichen als Block
- Anker, Links zu [[home#^textformate|Ankern]], sowie Linknamenüberschreibungen
- Callouts
- Tags #tag und Nested Tags #nested/tag - Groß/Kleinschreibung ist für Tags egal

> [!quote]+ Das ist ein Callout Block
> Durch ein Minuszeichen wäre er ursprünglich gefaltet. Sonst wird er direkt angezeigt.
>
> Es gibt folgende Callouts: Note, Abstract, Info, Todo, Tip, Success, Question, Warning, Failure, Danger, Bug, Example, Quote - alle kleingeschrieben, aber groß angezeigt, falls der Titel nicht überschrieben wird



[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

