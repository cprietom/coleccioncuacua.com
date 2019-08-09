/************************/
/* PÁGINA DE DESACARGAS */
/************************/
var downloadsPageElement = document.getElementById("downloadsPage");
if (typeof(downloadsPageElement) != "undefined" && downloadsPageElement != null) {
    buildDownloadGrid("downloadsPage", (cuacua_lang == "es") ? downloads_section_items[0] : downloads_section_items[1], 3);
}