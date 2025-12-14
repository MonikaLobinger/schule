---
cssclasses: catalog
date_created: 2025-12-01
publish: true
tags:
ddckey: All
author: Ueberphilosophy
---
# Gesamtkatolog Lernmaterialien
Die [Systematik](https://biblio.media.h-da.de/IuD/bibdk1.htm) folgt der DDC, sie verwendet die [[DDCKlassen]] der  [Deutschen Nationalbibliothek](https://www.dnb.de/DE/Professionell/DDC-Deutsch/DDCUebersichten/ddcUebersichten.html)

> [!Info] Das Projekt befindet sich im Umbau 
> die Systematik ist noch nicht durchgehend angepasst. 
## Automatisch erstellte Ansicht aller Unterkataloge:

```dataviewjs
/* Embedded alle Kataloge der nächsten Tiefe
*/
const eval_foldername = `"${dv.current().file.folder}"`;
const foldername = dv.current().file.folder;

function depth(path) {
    return path.split("/").length;
}
const tiefe = depth(foldername)+1;

const pages = dv
    .pages(eval_foldername)
    .where(p => 
      (p.file.name.substring(0,1) == "-") &&
      (depth(p.file.folder)==tiefe) 
     )
    ;
pages.forEach(i => {dv.el("p","![[" + i.file.link.path + "]]")})
```
