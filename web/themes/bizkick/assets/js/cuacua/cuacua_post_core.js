/************************/
/* PÁGINA DE DESACARGAS */
/************************/
var downloads_page_id = "_downloadsPage";
var downloadsPageElement = document.getElementById(downloads_page_id);
if (typeof(downloadsPageElement) != "undefined" && downloadsPageElement != null) {
    buildDownloadGrid(
        downloads_page_id,
        (cuacua_lang == "es") ? downloads_section_items[0] : downloads_section_items[1],
        3);
}

/************************/
/* PÁGINA DE DESACARGAS */
/************************/
var videos_page_id = "_videosPage";
var videosPageElement = document.getElementById(videos_page_id);
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