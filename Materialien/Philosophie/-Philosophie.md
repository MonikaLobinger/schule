---
cssclass: note
date_created: 2025-12-03
publish: true
tags:
author: Ueberphilosophy
---
## Philosophie
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
dv.list(pages.file.link)
```

