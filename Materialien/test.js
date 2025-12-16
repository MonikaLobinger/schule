const laenge_der_ueberschrift = 60;
const eval_foldername = `"${dv.current().file.folder}"`;
const foldername = dv.current().file.folder;
dv.paragraph(eval_foldername);
dv.paragraph(foldername);
/*
function depth(path) { return path.split("/").length; }
const tiefe = depth(foldername);
function filelink(file,noteText) {
  let fllink = "";
  let regex = /## \[.*\]/;
  let found = noteText.match(regex);
  let headerName = file.path;
  if (found != null) {
    headerName = found[0].slice(4,-1).slice(0,laenge_der_ueberschrift);
  }
  fllink = "[[" + file.path + "|" + headerName + "]]"
  return fllink;
}
function ddclink(ddc) {
  let ddclink = "";
  ddclink = "[[DDCKlassen#" + ddc + "|" + ddc + "]]"
  return ddclink;
}
function media(m) {
  return m ? m.join(", ") : "";
}
dv.paragraph("Zeile 28");
const pages = await Promise.all(
    dv.pages(eval_foldername)
    .where(p =>
      (p.file.name.substring(0,1) != "-") &&
      (depth(p.file.folder)==tiefe)
     )
   .map(async (page) => {
      const content = await dv.io.load(page.file.path);
      return {
         fl: filelink(page.file, content),
         ddckey: page.ddckey,
         ddc: ddclink(page.ddckey),
         mstr: media(page.media)
      };
   })
);
dv.paragraph(pages.length);
dv.paragraph("Zeile 44");
dv.table(["Filelink", "Ddclink", "Media"], pages
  .sort((a, b) => a.ddckey - b.ddckey)
  .map(p => [
    p.fl,
    p.ddc,
    p.mstr
  ])
);
*/

