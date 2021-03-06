// =============================================================================
// JS/ADMIN/X-CUSTOMIZER-PREVIEW.JS
// -----------------------------------------------------------------------------
// Customizer control handling.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Customizer Control Handling
//   02. Unpersist WooCommerce Navbar Cart
// =============================================================================

// Customizer Control Handling
// =============================================================================

( function( $ ) {

  //
  // Layout.
  //

  wp.customize( 'x_layout_site_max_width', function( value ) {
    value.bind( function( newval ) {
      $( 'body .x-container.max' ).css( 'max-width', newval + 'px' );
      $( 'body.x-boxed-layout-active .site' ).css( 'max-width', newval + 'px' );
    } );
  } );

  wp.customize( 'x_layout_site_width', function( value ) {
    value.bind( function( newval ) {
      $( 'body .x-container.width' ).css( 'width', newval + '%' );
      $( 'body.x-boxed-layout-active .site' ).css( 'width', newval + '%' );
    } );
  } );



  wp.customize( 'x_layout_content_width', function( value ) {
    value.bind( function( newval ) {

      if ( $( 'body' ).hasClass( 'x-integrity' ) ) {

        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval - 2.463055 + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval - 2.463055 + '%' );
        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - 2.463055 - newval + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - 2.463055 - newval + '%' );

      } else if ( $( 'body' ).hasClass( 'x-renew' ) ) {

        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval - 3.20197 + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval - 3.20197 + '%' );
        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - 3.20197 - newval + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - 3.20197 - newval + '%' );

      } else if ( $( 'body' ).hasClass( 'x-ethos' ) ) {

        if ( $( 'body' ).children( 'style' ) ) {
          $( 'body' ).children( 'style' ).remove();
        }
        $( 'body' ).prepend('<style scoped>body.x-content-sidebar-active:not([class*="template-blank"]) .x-container.main:before { right: ' + ( 100 - newval ) + '%; } body.x-sidebar-content-active:not([class*="template-blank"]) .x-container.main:before { left: ' + ( 100 - newval ) + '%; }</style>');
        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-main' ).css( 'width', newval + '%' );
        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - newval + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-sidebar' ).css( 'width', 100 - newval + '%' );
        $( 'body.x-content-sidebar-active:not([class*="template-blank"]) .x-post-slider' ).css( 'padding-right', 100 - newval + '%' );
        $( 'body.x-sidebar-content-active:not([class*="template-blank"]) .x-post-slider' ).css( 'padding-left', 100 - newval + '%' );
        $( 'body .x-post-slider .x-post-slider-control-nav' ).css( 'width', 100 - newval + '%' );

      }

    } );
  } );


  //
  // Design.
  //

  wp.customize( 'x_design_bg_color', function( value ) {
    value.bind( function( newval ) {
      $( 'body' ).css( 'background-color', newval );
    } );
  } );


  //
  // Integrity.
  //

  wp.customize( 'x_integrity_blog_title', function( value ) {
    value.bind( function( newval ) {
      $( '.x-integrity.blog .h-landmark span' ).html( newval );
      $( '.x-integrity.blog .x-breadcrumbs .current' ).html( newval );
    } );
  } );

  wp.customize( 'x_integrity_blog_subtitle', function( value ) {
    value.bind( function( newval ) {
      $( '.x-integrity.blog .p-landmark-sub span' ).html( newval );
    } );
  } );

  wp.customize( 'x_integrity_portfolio_archive_sort_button_text', function( value ) {
    value.bind( function( newval ) {
      $( '.x-integrity.page-template-template-layout-portfolio-php .x-portfolio-filters span' ).html( newval );
    } );
  } );

  wp.customize( 'x_integrity_shop_title', function( value ) {
    value.bind( function( newval ) {
      $( '.x-integrity.post-type-archive-product .h-landmark span' ).html( newval );
      $( '.x-integrity.post-type-archive-product .x-breadcrumbs .current' ).html( newval );
    } );
  } );

  wp.customize( 'x_integrity_shop_subtitle', function( value ) {
    value.bind( function( newval ) {
      $( '.x-integrity.post-type-archive-product .p-landmark-sub span' ).html( newval );
    } );
  } );


  //
  // Renew.
  //

  wp.customize( 'x_renew_blog_title', function( value ) {
    value.bind( function( newval ) {
      $( '.x-renew.blog .h-landmark span' ).html( newval );
      $( '.x-renew.blog .x-breadcrumbs .current' ).html( newval );
    } );
  } );

  wp.customize( 'x_renew_shop_title', function( value ) {
    value.bind( function( newval ) {
      $( '.x-renew.post-type-archive-product .h-landmark span' ).html( newval );
      $( '.x-renew.post-type-archive-product .x-breadcrumbs .current' ).html( newval );
    } );
  } );


  //
  // Icon.
  //

  wp.customize( 'x_icon_shop_title', function( value ) {
    value.bind( function( newval ) {
      $( '.x-icon.post-type-archive-product .entry-title' ).html( newval );
      $( '.x-icon.post-type-archive-product .x-breadcrumbs .current' ).html( newval );
    } );
  } );

} )( jQuery );


// Unpersist WooCommerce Navbar Cart
// =============================================================================

( function( $ ) {

  if ( x_customizer_data.woocommerce_is_active && 'sessionStorage' in window && window.sessionStorage !== null ) {
    var fragments = jQuery.parseJSON( window.sessionStorage.wc_fragments );
    delete fragments['div.x-cart'];
    window.sessionStorage.wc_fragments = JSON.stringify( fragments );
  }

} )( jQuery );