---
cssclass: note
date_created: 2025-12-12
publish: true
tags:
author: Ueberphilosophy
---
## Wissenschaft
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
