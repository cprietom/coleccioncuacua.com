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
    return "<div id='" + sectionId + "-" + index + "' class='product-item'>"
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
        + "<a id='" + sectionId + "_link-" + index + "' href='" + _link + "'>"
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
        + "<img id='" + sectionId + "_img-" + index + "' src='" + _img + "' />"
        + "</div>"
        + "<div>"
        + "<h1 class='h3 product-title' itemprop='name'>"
        + "<a id='" + sectionId + "_link-" + index + "' href='" + _link + "'>"
        + value + "</a>" + "</h1>" + "</div>" + "</div>" + "</article>"
        + "</div>";
}

/***********************/
/* PÁGINA DE DESCARGAS */
/***********************/
function buildDownloadGrid(pageId, arrayItems, numberOfCols) {
    for (var i = 0; i < arrayItems.length; i += numberOfCols) {
        var iFinal = (i + numberOfCols <= arrayItems.length) ? (i + numberOfCols) : arrayItems.length;
        var rowElements = arrayItems.slice(i, iFinal);
        var _row = buildDownloadRow(rowElements);
        $("#" + pageId).append(_row);
    }
}

function buildDownloadRow(rowElements) {
    var _cols = "";
    for (var i = 0; i < rowElements.length; i++) {
        _cols += buildDownloadColumn(i);
    }
    return "<div class='cuacua-row'>" + _cols + "</div>";
}

function buildDownloadColumn(index) {
    var _img = cuacua_url_downloads + "/download" + index + ".png";
    return "<div class='cuacua-column'>" +
        "<img id='" + downloads_section_id + "-" + index + "' src='" + _img + "' style='width:100%' />" +
        "</div>";
}


/********************/
/* PÁGINA DE VIDEOS */
/********************/
var cuacua_videos_id = "cuacua-videos";
var roar_videos_id = "roar-videos";
var wow_videos_id = "wow-videos";
function buildVideoGrid(divId, arrayItems) {
    for (var i = 0; i < arrayItems.length; i++) {
        var _row = buildVideoRow(divId, i);
        $("#" + divId).append(_row);
    }
}
function buildVideoRow(divId, index) {
return "<div id='" + videos_section_id + "-" + index +  "' class='row'>" +
        "<div class='col-xs-12'>" +
    "<div class='cms-block'>" +
    "<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididun.</p>" +
    "<p>Español</p>" +
    "<div style='position: relative; padding-top: 56.25%;'>" +
        "<iframe id='" + divId + "_iframe" + index + "' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'" +
            "src='#' frameborder='0'" +
            "allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'" +
            "allowfullscreen='allowfullscreen'></iframe>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
}