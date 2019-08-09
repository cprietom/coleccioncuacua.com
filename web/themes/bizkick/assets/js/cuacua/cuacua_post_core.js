/************************/
/* PÁGINA DE DESACARGAS */
/************************/
var downloadsPageElement = document.getElementById(downloads_page_id);
if (typeof(downloadsPageElement) != "undefined" && downloadsPageElement != null) {
    buildDownloadGrid(
        downloads_page_id,
        (cuacua_lang == "es") ? downloads_section_items[0] : downloads_section_items[1],
        3);
}