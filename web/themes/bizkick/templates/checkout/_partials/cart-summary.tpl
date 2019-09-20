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
<section id="js-checkout-summary" class="card js-cart" data-refresh-url="{$urls.pages.cart}?ajax=1&action=refresh">
  <div class="card-block">
    {block name='hook_checkout_summary_top'}
      {hook h='displayCheckoutSummaryTop'}
    {/block}

    {block name='cart_summary_products'}
      <div class="cart-summary-products">

        <p>{$cart.summary_string}</p>

        <p>
          <a href="#" data-toggle="collapse" data-target="#cart-summary-product-list">
            {l s='show details' d='Shop.Theme.Actions'}
          </a>
        </p>

        {block name='cart_summary_product_list'}
          <div class="collapse" id="cart-summary-product-list">
            <ul class="media-list">
              {foreach from=$cart.products item=product}
                <li class="media">{include file='checkout/_partials/cart-summary-product-line.tpl' product=$product}</li>
              {/foreach}
            </ul>
          </div>
        {/block}
      </div>
    {/block}

    {block name='cart_summary_subtotals'}
      {foreach from=$cart.subtotals item="subtotal"}
        {if $subtotal && $subtotal.type !== 'tax'}
          <div class="cart-summary-line cart-summary-subtotals" id="cart-subtotal-{$subtotal.type}">
            <span class="label">
                  {$subtotal.label}
                  {if $subtotal.type === 'shipping' && $cart.id_address_delivery == 0}
                    <span title="{l s='Gastos de envío para el destino indicado. Es posible que cambien si se modifica el destino.'}" class="mytooltip">
                        <i class="material-icons">info</i>
                    </span>&nbsp;
                  {/if}
            </span>
            <span class="value">{$subtotal.value}</span>
            {if $subtotal.type === 'shipping'}
              <div><small>({$ship_to})</small></div>
              <div><span><a href="#">{l s='Consultar gastos de envío'}</a></span></div>
            {/if}
          </div>
        {/if}
      {/foreach}
    {/block}

  </div>

  {block name='cart_summary_voucher'}
    {include file='checkout/_partials/cart-voucher.tpl'}
  {/block}

  <hr class="separator">

  {block name='cart_summary_totals'}
    {include file='checkout/_partials/cart-summary-totals.tpl' cart=$cart}
  {/block}

</section>
