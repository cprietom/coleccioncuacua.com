/********/
/* HOME */
/********/
// Método común a los fragmentos "videos" y "descargas" de la home
function fillSection(sectionId, sectionTitle, arrayItems, linkToAllText, linkToAllURI, buildItem) {
    if ($("#" + sectionId).length) {
        // Assign title to section
        $("#" + sectionId + "-title").text(sectionTitle);
        // Create divs with items of section
        arrayItems.forEach(function (value, index, array) {
            var innerDiv = buildItem(sectionId, linkToAllURI, value, index);
            $("#" + sectionId + "-row").append(innerDiv);
        });
        // Assign 'view all' text and link
        $("#" + sectionId + "-all").text(linkToAllText);
        $("#" + sectionId + "-all").attr("href", cuacua_url_base + cuacua_lang + linkToAllURI);
    }
}

/* Sección de vídeos */
var videos_section_id = "_videos";
var cuacua_videos_section_items = [cuacua_videos_section_items_es, cuacua_videos_section_items_en];
var roar_videos_section_items = [roar_videos_section_items_es, roar_videos_section_items_en];
var wow_videos_section_items = [wow_videos_section_items_es, wow_videos_section_items_en];
var videos_section_items_es = cuacua_videos_section_items_es.concat(roar_videos_section_items_es).concat(wow_videos_section_items_es);
var videos_section_items_en = cuacua_videos_section_items_en.concat(roar_videos_section_items_en).concat(wow_videos_section_items_en);
var videos_section_items = [videos_section_items_es, videos_section_items_en];
var videos_section_title = [videos_section_title_es, videos_section_title_en];
var videos_section_link_to_all_text = [videos_section_link_to_all_text_es, videos_section_link_to_all_text_en];
var videos_section_youtube_ids = cuacua_videos_section_youtube_ids.concat(roar_videos_section_youtube_ids).concat(wow_videos_section_youtube_ids);

function buildVideoItem(sectionId, linkToAllURI, value, index) {
    var _link = cuacua_url_base + cuacua_lang + linkToAllURI + "#" + sectionId + "-" + index;
    return "<div class='product-item'>"
        + "<article class='product-miniature js-product-miniature' itemscope='' itemtype='http://schema.org/Product'>"
        + "<div class='thumbnail-container'>"
        + "<div class='product-image-block'>"
        + "<div>"
        + "<iframe id='" + sectionId + "_iframe" + index + "' style='width: 100%; height: 100%;' "
        + "src='#' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' "
        + "allowfullscreen='allowfullscreen'></iframe>"
        + "</div>"
        + "</div>"
        + "<div>"
        + "<h1 class='h3 product-title' itemprop='name'>"
        + "<a href='" + _link + "'>"
        + value + "</a>" + "</h1>" + "</div>" + "</div>" + "</article>"
        + "</div>";
}

/* Sección de descargas */
var downloads_section_id = "_downloads";
var downloads_section_items = [downloads_section_items_es, downloads_section_items_en];
var downloads_section_title = [downloads_section_title_es, downloads_section_title_en];
var downloads_section_link_to_all_text = [downloads_section_link_to_all_text_es, downloads_section_link_to_all_text_en];

function buildDownloadItem(sectionId, linkToAllURI, value, index) {
    var _link = cuacua_url_base + cuacua_lang + linkToAllURI + "#" + sectionId + "-" + index;
    var _img = cuacua_url_downloads + "/download" + index + ".png";
    return "<div id='" + sectionId + "-" + index + "' class='product-item'>"
        + "<article class='product-miniature js-product-miniature' " +
        "itemscope='' itemtype='http://schema.org/Product'>"
        + "<div class='thumbnail-container'>"
        + "<div class='product-image-block'>"
        + "<a id='" + sectionId + "_link-" + index + "' href='" + _img + "' target='_blank'>"
        + "<img id='" + sectionId + "_img-" + index + "' src='" + _img + "' />"
        + "</a>"
        + "</div>"
        + "</div>" + "</article>"
        + "</div>";
}

/***********************/
/* PÁGINA DE DESCARGAS */
/***********************/
function buildDownloadGrid(pageId, arrayItems, numberOfCols) {
    for (var i = 0; i < arrayItems.length; i ++) {
        var _row = buildDownloadLink(i);
        $("." + pageId).append(_row);
    }
}

function buildDownloadLink(index) {
    var _img = cuacua_url_downloads + "/download" + index + ".png";
    return "<a href='" + _img + "' target='_blank'>" +
        "<img id='" + downloads_section_id + "-" + index + "' src='" + _img + "' />" +
        "</a>";
}


/********************/
/* PÁGINA DE VIDEOS */
/********************/
var cuacua_videos_id = "cuacua-videos";
var roar_videos_id = "roar-videos";
var wow_videos_id = "wow-videos";
function buildVideoGrid(divId, arrayItems, initialIndex) {
    for (var i = 0; i < arrayItems.length; i++) {
    	var lang = (cuacua_lang == "es") ? (i%2 == 0 ? "Español" : "Inglés") : (i%2 == 0 ? "Spanish" : "English");
        var _row = buildVideoRow(divId, initialIndex+i, lang);
        $("#" + divId).append(_row);
    }
}
function buildVideoRow(divId, index, lang) {
return "<div id='" + videos_section_id + "-" + index +  "' class='row'>" +
        "<div class='col-xs-12'>" +
    "<div class='cms-block'>" +
    "<div style='position: relative; padding-top: 56.25%;'>" +
        "<iframe id='" + divId + "_iframe" + index + "' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'" +
            "src='#' frameborder='0'" +
            "allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'" +
            "allowfullscreen='allowfullscreen'></iframe>" +
    "</div>" +
    "<p class='cuacua-text-color'><strong>" + lang + "</strong></p>" +
    "</div>" +
    "</div>" +
    "</div>";
}


/********************/
/* PÁGINA DE NOVEDADES */
/********************/
var news_section_id = "_news";
var news_title_items = [news_title_items_es, news_title_items_en];
var news_text_items = [news_text_items_es, news_text_items_en];
function buildNewsGrid(divId, arrayTitleItems, arrayTextItems) {
    for (var i = 0; i < arrayTitleItems.length; i++) {
        var _row = buildNewsRow(i, arrayTitleItems[i], arrayTextItems[i]);
        $("#" + divId).append(_row);
    }
}
function buildNewsRow(index, title, text) {
	return "<div id='" + news_section_id + "-" + index +  "' class='row'>" +
	        "<div class='col-xs-12'>" +
	    "<div class='cms-block'>" +
	    "<p>" + title + "</p>" +
	    "<p>" + text + "</p>" +
	    "</div>" +
	    "</div>" +
	    "</div>";
}

/*****************************/
/* PÁGINAS DE TEXTOS LEGALES */
/*****************************/
function buildLegalPage(legal_title_items, legal_text_items) {
    for (var i = 0; i < legal_title_items.length; i++) {
        $("#legal_title" + i).text(legal_title_items[i]);
    }

    for (var i = 0; i < legal_text_items.length; i++) {
        $("#legal" + i).html(legal_text_items[i]);
    }
}