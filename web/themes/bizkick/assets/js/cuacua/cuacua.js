$(document).ready(function(){
    $('.mytooltip').tooltip();
});


/********/
/* HOME */
/********/

/* Sección de vídeos */

// PARA AÑADIR UN NUEVO VIDEO:
//  1. Incluir en los arrays videos_section_items_es/videos_section_items_en el título del nuevo elemento con el título del nuevo vídeo en español e inglés
//  2. Incluir en el array videos_section_youtube_ids un nuevo elemento con el id del video de youtube
var cuacua_videos_section_youtube_ids = ["ZndHigMZVjg", "sHh_4X2PoTA"];
var cuacua_videos_section_items_es = ["El tigre Cuacuá (español)", "Cuacua Tiger (inglés)"];
var cuacua_videos_section_items_en = ["El tigre Cuacuá (Spanish)", "Cuacua Tiger (English)"];

var roar_videos_section_youtube_ids = ["IO8AxJz2EmY"];
var roar_videos_section_items_es = ["Roar Squirrel (inglés)"];
var roar_videos_section_items_en = ["Roar Squirrel (English)"];

var wow_videos_section_youtube_ids = []; //["IO8AxJz2EmY"];
var wow_videos_section_items_es = []; //["Wow Monkey (inglés)"];
var wow_videos_section_items_en = []; //["Wow Monkey (English"];

var videos_section_title_es = "Últimos vídeos";
var videos_section_title_en = "Latest videos";

var videos_section_link_to_all_text_es = "Ver todos los vídeos >";
var videos_section_link_to_all_text_en = "See all videos >";

/* Sección de descargas */

// PARA AÑADIR UNA NUEVA DESCARGA:
//  1. Incluir en los arrays downloads_section_items_es/downloads_section_items_un nuevo elemento con el título de la nueva descarga en español e inglés
var downloads_section_items_es = ["Descarga0", "Descarga1", "Descarga2", "Descarga3", "Descarga4", "Descarga5", "Descarga6", "Descarga7", "Descarga8", "Descarga9", "Descarga10", "Descarga11"];
var downloads_section_items_en = ["Descarga0", "Descarga1", "Descarga2", "Descarga3", "Descarga4", "Descarga5", "Descarga6", "Descarga7", "Descarga8", "Descarga9", "Descarga10", "Descarga11"];

var downloads_section_title_es = "Descargas";
var downloads_section_title_en = "Downloads";

var downloads_section_link_to_all_text_es = "Ver todas las descargas >";
var downloads_section_link_to_all_text_en = "See all downloads >";

/***********
 * PÁGINAS
 ***********/
/* Página de novedades */

//PARA AÑADIR UNA NUEVA NOVEDAD:
// 1. Incluir en los arrays news_title_items_es/new_title_items_en y news_text_items_es/news_text_items_en el título y texto de la novedad en español e inglés
var news_title_items_es = ["Novedad1", "Novedad2"];
var news_title_items_en = ["News1", "News2"];

var news_text_items_es = ["¡¡¡Lanzamiento de la nueva web!!!", "¡¡¡Presentación en Pangea!!!"];
var news_text_items_en = ["New website!!!", "Presnentation at Pangea!!!"];

/* Página de política de privacidad */
var privacidad_title_items_es =
    ["Política de privacidad",
     "Finalidad del tratamiento de los datos personales",
     "Legitimación"];

var privacidad_text_items_es =
    ["Esta web cumple el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circliación de estos datos y por el que se deroga la Directiva 95/46/CE (En adelante, RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de datos Personales y garantía de los derechos digitales.",
    "En todo momento se adoptan las medidas técnicas y de organización necesarias para garantizar la seguridad e integridad de los datos de carácter personal que trate, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.",
    "Como usuario, mediante la marcación de la casilla, aceptas expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte de Colección Cuacuá, para realizar las siguientes finalidades:",
    "<ul>"
    + "<li>Remitir el boletín de noticias de la web.</li><li>Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición en la web.</li>"
    + "<li>Remisión de comunicaciones comerciales publicitarias por email relacionadas sobre productos o servicios que ofrezco, así como por parte de los colaboradores o partners con los que hubiera alcanzado algún acuerdo de promoción comercial entre sus clientes. En este caso, los terceros nunca tendrán acceso a los datos personales. En todo caso las comunicaciones comerciales serán realizadas por mi parte a través de la newsletter y serán productos y servicios relacionados con el sector.</li>"
    +  "<li>Realizar estudios estadísticos.</li>"
    + "</ul>",
    "El tratamiento de tus datos se realiza con las siguientes bases jurídicas que legitiman el mismo:"];

var privacidad_title_items_en =
    ["Privacy policy",
     "",
     ""];
var privacidad_text_items_en =
    ["",
     "",
     "",
     "",
     ""];

var privacidad_title_items = [privacidad_title_items_es, privacidad_title_items_en];
var privacidad_text_items = [privacidad_text_items_es, privacidad_text_items_en];

/* Página de aviso legal*/
var avisoLegal_title_items_es =
    ["Aviso legal",
     "Titulooooo"];

var avisoLegal_title_items_en =
    ["",
     ""];

var avisoLegal_text_items_es =
    ["texto1",
     "texto2"];

var avisoLegal_text_items_en =
    ["",
     ""];

var avisoLegal_title_items = [avisoLegal_title_items_es, avisoLegal_title_items_en];
var avisoLegal_text_items = [avisoLegal_text_items_es, avisoLegal_text_items_en];