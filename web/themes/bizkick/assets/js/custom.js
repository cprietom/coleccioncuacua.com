/**
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
 */
$(document).ready(function() {
    $(".testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsTabletSmall: [639, 1],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: true,
    });
    $(".blog-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsTabletSmall: [639, 1],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: true,
    });
    $(".product-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsTabletSmall: [639, 2],
        itemsMobile: [479, 2],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: true,
    });
    $(".extension-slider").owlCarousel({
        autoPlay: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsTabletSmall: [639, 1],
        itemsMobile: [479, 1],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: false,
    });
    $(".brands-slider").owlCarousel({
        autoPlay: true,
        items: 6,
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [991, 5],
        itemsTablet: [767, 4],
        itemsTabletSmall: [639, 3],
        itemsMobile: [479, 2],
        pagination: false,
        navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></div>"],
        navigation: true,
    });
});
$(document).ready(function() {
    $('.show_list').click(function() {
        $('#js-product-list div.product-item').addClass('list-view');
        $(this).addClass('active');
        $('.show_grid').removeClass('active');
    });
    $('.show_grid').click(function() {
        $('#js-product-list div.product-item').removeClass('list-view');
        $(this).addClass('active');
        $('.show_list').removeClass('active');
    });
});
$(document).ready(function() {
    if (jQuery(window).width() <= 767) {
        $(".footer-block-title").click(function() {
            $(this).toggleClass('active-tab');
            $(".footer-block-toggle-content").toggle();
        });
    }
});

/** ************** **/
/** Scripts CUACUA **/
/** ************** **/
var cuacua_url_base = window.location.protocol + "//" + window.location.host;

// Sección de videos en la home
// PARA AÑADIR UN NUEVO VIDEO:
//  1. Incluir en los arrays videos_section_items_es/videos_section_items_en el título del nuevo elemento con el título en español e inglés
//  2. Incluir en el array videos_section_youtube_ids  un nuevo elemento con el id del video de youtube
var videos_section_youtube_ids = ["ZndHigMZVjg", "sHh_4X2PoTA", "IO8AxJz2EmY"];
var videos_section_items_es = ["El tigre Cuacuá (español)", "Cuacua Tiger (inglés)", "Roar Squirrel (inglés)"];
var videos_section_items_en = ["El tigre Cuacuá (Spanish)", "Cuacua Tiger (English)", "Roar Squirrel (English)"];

var videos_section_items = [videos_section_items_es, videos_section_items_en];

// Sección de descargas en la home
var downloads_folder = "/themes/bizkick/assets/img/downloads";