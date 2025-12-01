---
cssclass: note
date_created: 2025-11-24
publish: true
author: Ueberphilosophy
---
# Startseite
Sammlung von Online Materialien zum Lernen. Diese befindet sich als kaum kommentierte Linksammlung im Ordner Materialen. Die anderen Ordner enthalten eigene Notizen oder selbst erstellte Definitionen.

## Inhalt
Grobe [[timeline|Zeitleiste]], nur Geburtsjahre
### Allgemeine Quellen
- [Gottwein](https://www.gottwein.de/7)
- [Perseus](https://www.perseus.tufts.edu/hopper/)
- [librivox](https://librivox.org/)
- [Internet Archive](https://archive.org/)
- 
## HowTo
### Einstellungen
Erstellt mit Obsidian, exportiert mit dem Plugin `Webpage HTML Export`.Verzeichnis für Daily Notes `Diary`. Strict Line Breaks, Show line numbers, Source-Editing Mode, Properties in Document hidden, vim-key bindings, Nicht Show Inline Title, Attachments nach `_/_resources` , template folder location  `_/_vorlagen`.  Plugin `Templater` erstellt neue Notes.  Für Zeitleiste [Timeline Callout von FirelsGood](https://github.com/r-u-s-h-i-k-e-s-h/Obsidian-CSS-Snippets/blob/Collection/Snippets/Callout%20styling%20-%20Timeline%20callout.md) als `timeline.css`. Sonst Defaults, außer Theme `Willemstad`, angepasst mit dem Plugin `Style Settings`, das Einstellungen in `data.json` speichert. Der Export angepasst mit eigener Datei  `willemstad_to_html.css`. Zeitleiste verlangsamt den Export und wird nicht korrekt exportiert.

Script `foty.js` nach `_/_scripts`, Template `foty_Vorlage.md` nach `_/_vorlagen`. Im Templater Template folder locaten auf `_/_vorlagen`, automatic jump to cursor, Trigger Templater on new file creation, Kein enable folder templates, file regex template `_/_vorlagen/foty_Vorlage.md`, Script files folder location `_/_scripts`
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

> [!quote]- Das ist ein Callout Block
> Durch das Minuszeichen ist er ursprünglich gefaltet. Läßt man das weg, wird es direkt angezeigt.
>
> Es gibt folgende Callouts: Note, Abstract, Info, Todo, Tip, Success, Question, Warning, Failure, Danger, Bug, Example, Quote - alle Kleingeschrieben, aber groß angezeigt, falls der Titel nicht überschrieben wird



[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

