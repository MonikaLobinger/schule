---
cssclass: note
date_created: 2025-12-04
publish: true
tags:
author: Ueberphilosophy
---
```dataviewjs
/* Listet aller Sammlungen
*/
const eval_foldername = `"${dv.current().file.folder}"`;
const foldername = dv.current().file.folder;

function depth(path) {
    return path.split("/").length;
}
const tiefe = depth(foldername);

const pages = dv
    .pages(eval_foldername)
    .where(p => 
      (p.file.name.substring(0,1) != "-") &&
      (depth(p.file.folder)==tiefe) 
     )
    ;
// dv.paragraph("Automatisch erstellte Liste aller Sammlungen:")
dv.list(pages.file.link)
```
