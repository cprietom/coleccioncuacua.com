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
{if $elements}
  <div id="block-reassurance">
    <ul>
      {foreach from=$elements item=element}
        {if stristr($element.image, "verified")}{$url="/content/2-politica-de-privacidad"}{/if}
        {if stristr($element.image, "shipping")}{$url="/content/16-aeu-legal-shipping-and-payment"}{/if}
        {if stristr($element.image, "swap")}{$url="/content/11-devoluciones"}{/if}
        <li>
          <div class="block-reassurance-item">
            <a href="{$url}">
                <img src="{$element.image}" alt="{$element.text}">
                <span class="h6">{$element.text}</span>
            </a>
          </div>
        </li>
      {/foreach}
    </ul>
  </div>
{/if}
