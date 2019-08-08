{**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{block name='head_charset'}
  <meta charset="utf-8">
{/block}
{block name='head_ie_compatibility'}
  <meta http-equiv="x-ua-compatible" content="ie=edge">
{/block}

{block name='head_seo'}
  <title>{block name='head_seo_title'}{$page.meta.title}{/block}</title>
  <meta name="description" content="{block name='head_seo_description'}{$page.meta.description}{/block}">
  <meta name="keywords" content="{block name='head_seo_keywords'}{$page.meta.keywords}{/block}">
  {if $page.meta.robots !== 'index'}
    <meta name="robots" content="{$page.meta.robots}">
  {/if}
  {if $page.canonical}
    <link rel="canonical" href="{$page.canonical}">
  {/if}
{/block}

{block name='head_viewport'}
  <meta name="viewport" content="width=device-width, initial-scale=1">
{/block}

{block name='head_icons'}
  <link rel="icon" type="image/vnd.microsoft.icon" href="{$shop.favicon}?{$shop.favicon_update_time}">
  <link rel="shortcut icon" type="image/x-icon" href="{$shop.favicon}?{$shop.favicon_update_time}">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
{/block}

{block name='stylesheets'}
  {include file="_partials/stylesheets.tpl" stylesheets=$stylesheets}
{/block}

{block name='javascript_head'}
  {include file="_partials/javascript.tpl" javascript=$javascript.head vars=$js_custom_vars}
{/block}

{block name='hook_header'}
  {$HOOK_HEADER nofilter}
{/block}

{block name='hook_extra'}
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	
	<script type="text/javascript">
		// Sección de videos en la home
		// PARA AÑADIR UN NUEVO VIDEO:
		//  1. Incluir en los arrays videos_section_items_es/videos_section_items_en el título del nuevo elemento con el título del nuevo vídeo en español e inglés
		//  2. Incluir en el array videos_section_youtube_ids un nuevo elemento con el id del video de youtube
		var videos_section_youtube_ids = ["ZndHigMZVjg", "sHh_4X2PoTA", "IO8AxJz2EmY"];
		var videos_section_items_es = ["El tigre Cuacuá (español)", "Cuacua Tiger (inglés)", "Roar Squirrel (inglés)"];
		var videos_section_items_en = ["El tigre Cuacuá (Spanish)", "Cuacua Tiger (English)", "Roar Squirrel (English)"];
		
		var videos_section_title_es = "Últimos vídeos";
		var videos_section_title_en = "Latest videos";
		
		var videos_section_link_to_all_text_es = "Ver todos los vídeos";
		var videos_section_link_to_all_text_en = "See all videos";
		
		// Sección de descargas en la home
		// PARA AÑADIR UNA NUEVA DESCARGA:
		//  1. Incluir en los arrays downloads_section_items_es/downloads_section_items_un nuevo elemento con el título de la nueva descarga en español e inglés
		var downloads_section_items_es = ["Descarga1", "Descarga2", "Descarga3", "Descarga4", "Descarga5"];
		var downloads_section_items_en = ["Download1", "Download2", "Download3", "Download4", "Download5"];
		
		var downloads_section_title_es = "Descargas";
		var downloads_section_title_en = "Downloads";
		
		var downloads_section_link_to_all_text_es = "Ver todas las descargas";	
		var downloads_section_link_to_all_text_en = "See all downloads";
	</script>
	
	<script type="text/javascript">
	/** ************** **/
	/** Scripts CUACUA **/
	/** ************** **/
		var cuacua_lang = document.getElementsByTagName("html")[0].getAttribute("lang");
		var cuacua_url_base = window.location.protocol + "//" + window.location.host;
		
		// Sección de vídeos de la home
		var videos_section_items = [videos_section_items_es, videos_section_items_en];
		var videos_section_title = [videos_section_title_es, videos_section_title_en];
		var videos_section_link_to_all_text = [videos_section_link_to_all_text_es, videos_section_link_to_all_text_en];
		
		// Sección de descargas en la home
		var downloads_section_items = [downloads_section_items_es, downloads_section_items_en];
		var downloads_section_title = [downloads_section_title_es, downloads_section_title_en];
		var downloads_section_link_to_all_text = [downloads_section_link_to_all_text_es, downloads_section_link_to_all_text_en];
		var downloads_folder = "/themes/bizkick/assets/img/downloads";
		
		// Método común a los fragmentos "videos" y "descargas" de la home
		function fillSection(sectionId, sectionTitle, arrayItems, linkToAllText, linkToAllURI, buildItem) {
			if ($("#" + sectionId).length) {
				// Assign title to section
				$("#" + sectionId + "-title").text(sectionTitle);
				// Create divs with items of section
				arrayItems.forEach(function(value, index, array) {
					var innerDiv = buildItem(sectionId, linkToAllURI, value, index, array);
					$("#" + sectionId + "-row").append(innerDiv);
				});
				// Assign 'view all' text and link
				$("#" + sectionId + "-all").text(linkToAllText);
				$("#" + sectionId + "-all").attr("href", cuacua_url_base + "/" + cuacua_lang + linkToAllURI);
			}
		}
	</script>
	
	<script type="text/javascript">
		function buildDownloadGrid(sectionId, arrayItems, numberOfCols) {
			for (var i = 0; i < arrayItems.length; i+=numberOfCols) {
				var iFinal = (i + numberOfCols <= arrayItems.length) ? (i + numberOfCols) : arrayItems.length;
				var rowElements = arrayItems.slice(i, iFinal);
				var _row = buildDownloadRow(sectionId, i, rowElements);
				document.getElementById("#" + sectionId).append(_row);
			}
		}
		
		function buildDownloadRow(sectionId, iRow, rowElements) {
		  var _row = "<div class='cuacua-row-" + iRow + "''>";
		  var _cols = "";
		  for (var i = 0; i < rowElements.length; i++) {
			  var _col = buildDownloadColumn(sectionId, i);
		  }
		  
		  _row += "</div>";
		  return _row;
		}
		
		function buildDownloadColumn(sectionId, index) {
			var _img = cuacua_url_base + downloads_folder + "/download" + index + ".png";
			return "<div class='cuacua-column'>" +
						"<img id='" + sectionId + "-" + index + "' src='" + _img + "' style='width:100%' />" +
						"</div>";
		}
		
			buildDownloadGrid("downloadsPage", (cuacua_lang == "es") ? downloads_section_items[0] : downloads_section_items[1], 3);
	</script>
{/block}
