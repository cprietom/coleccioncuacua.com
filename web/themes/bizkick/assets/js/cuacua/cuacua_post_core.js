/************************/
/* P�GINA DE DESACARGAS */
/************************/
var downloads_page_id = "_downloadsPage";
var downloadsPageElement = document.getElementsByClassName(downloads_page_id);
if (typeof(downloadsPageElement) != "undefined" && downloadsPageElement != null) {
    buildDownloadGrid(
        downloads_page_id,
        (cuacua_lang == "es") ? downloads_section_items[0] : downloads_section_items[1],
        3);
}

/************************/
/* P�GINA DE VIDEOS */
/************************/
var videos_page_id = "_videosPage";
var videosPageElement = document.getElementsByClassName(videos_page_id);
if (typeof(videosPageElement) != "undefined" && videosPageElement != null) {
    buildVideoGrid(
        cuacua_videos_id,
        (cuacua_lang == "es") ? cuacua_videos_section_items[0] : cuacua_videos_section_items[1]);

    buildVideoGrid(
        roar_videos_id,
        (cuacua_lang == "es") ? roar_videos_section_items[0] : roar_videos_section_items[1]);

    buildVideoGrid(
        wow_videos_id,
        (cuacua_lang == "es") ? wow_videos_section_items[0] : wow_videos_section_items[1]);

    for (var i = 0; i < cuacua_videos_section_youtube_ids.length; i++) {
        $("#" + cuacua_videos_id + "_iframe" + i).attr("src", "https://www.youtube.com/embed/" + cuacua_videos_section_youtube_ids[i]);
    }
    for (var i = 0; i < roar_videos_section_youtube_ids.length; i++) {
        $("#" + roar_videos_id + "_iframe" + i).attr("src", "https://www.youtube.com/embed/" + roar_videos_section_youtube_ids[i]);
    }
    for (var i = 0; i < wow_videos_section_youtube_ids.length; i++) {
        $("#" + wow_videos_id + "_iframe" + i).attr("src", "https://www.youtube.com/embed/" + wow_videos_section_youtube_ids[i]);
    }
}

/************************/
/* P�GINA DE NOVEDADES */
/************************/
var news_page_id = "_newsPage";
var newsPageElement = document.getElementById(news_page_id);
if (typeof(newsPageElement) != "undefined" && newsPageElement != null) {
    buildNewsGrid(
    	news_page_id,
        (cuacua_lang == "es") ? news_title_items[0] : news_title_items[1],
        (cuacua_lang == "es") ? news_text_items[0] : news_text_items[1]);

}

/************************/
/* P�GINA DE TEXTO LEGAL */
/************************/
var legal_title_items;
var legal_text_items;

// Página de política de privacidad
var privacidad_page_id = "_privacidadPage";
var privacidadPageElement = document.getElementById(privacidad_page_id);
if (typeof(privacidadPageElement) != "undefined" && privacidadPageElement != null) {
    var legal_title_items = (cuacua_lang == "es") ? privacidad_title_items[0] : privacidad_title_items[1];
    var legal_text_items = (cuacua_lang == "es") ? privacidad_text_items[0] : privacidad_text_items[1];
}

// Página de aviso legal
var avisoLegal_page_id = "_avisoLegalPage";
var avisoLegalPageElement = document.getElementById(avisoLegal_page_id);
if (typeof(avisoLegalPageElement) != "undefined" && avisoLegalPageElement != null) {
    var legal_title_items = (cuacua_lang == "es") ? avisoLegal_title_items[0] : avisoLegal_title_items[1];
    var legal_text_items = (cuacua_lang == "es") ? avisoLegal_text_items[0] : avisoLegal_text_items[1];
}

if (typeof(legal_title_items) != "undefined" && legal_title_items.length > 0) {
    buildLegalPage(legal_title_items, legal_text_items);
}