import React from 'react'

const Header = () => {
  return (
    <>
<header className="hdr-wrap">
  <div className="hdr-content hdr-content-sticky">
    <div className="container">
      <div className="row">
        <div className="col-auto show-mobile">
          <div className="menu-toggle"> <a href="#" className="mobilemenu-toggle"><i className="icon-menu" /></a> </div>
        </div>
        <div className="col-auto hdr-logo">
          <a href="index.html" className="logo"><img srcSet="images/logo.webp 1x, images/logo2x.webp 2x"  alt="Logo" /></a>
        </div>
        <div className="hdr-phone hide-mobile">
          <i className="icon-phone" /><span>+ 91 9090909090</span>
        </div>
        <div className="hdr-nav hide-mobile nav-holder-s">
        </div>
        <div className="hdr-links-wrap col-auto ml-auto">
          <div className="hdr-inline-link">
            <div className="search_container_desktop">
              <div className="dropdn dropdn_search dropdn_fullwidth">
                <a href="#" className="dropdn-link  js-dropdn-link only-icon"><i className="icon-search" /><span className="dropdn-link-txt">Search</span></a>
                <div className="dropdn-content">
                  <div className="container">
                    <form method="get" action="#" className="search search-off-popular">
                      <input name="search" type="text" className="search-input input-empty" placeholder="What are you looking for?" />
                      <button type="submit" className="search-button"><i className="icon-search" /></button>
                      <a href="#" className="search-close js-dropdn-close"><i className="icon-close-thin" /></a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdn dropdn_wishlist">
              <a href="account-wishlist.html" className="dropdn-link only-icon wishlist-link ">
                <i className="icon-heart" /><span className="dropdn-link-txt">Wishlist</span><span className="wishlist-qty">3</span>
              </a>
            </div>
            <div className="dropdn dropdn_account dropdn_fullheight">
              <a href="#" className="dropdn-link js-dropdn-link js-dropdn-link only-icon" data-panel="#dropdnAccount"><i className="icon-user" /><span className="dropdn-link-txt">Account</span></a>
            </div>
            <div className="dropdn dropdn_fullheight minicart">
              <a href="#" className="dropdn-link js-dropdn-link minicart-link only-icon" data-panel="#dropdnMinicart">
                <i className="icon-basket" />
                <span className="minicart-qty">3</span>
                <span className="minicart-total hide-mobile">$34.99</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hdr hdr-style2">
    <div className="hdr-topline js-hdr-top">
      <div className="container">
        <div className="row">
          <div className="col hdr-topline-left">
            <div className="hdr-line-separate">
              <ul className="social-list list-unstyled">
                <li>
                  <a href="#"><i className="icon-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon-google" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon-instagram" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon-vimeo" /></a>
                </li>
                <li>
                  <a href="#"><i className="icon-linkedin" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col hdr-topline-right hide-mobile">
            <div className="hdr-inline-link">
              <div className="dropdn_language">
                <div className="dropdn dropdn_language dropdn_language--noimg dropdn_caret">
                  <a href="#" className="dropdn-link js-dropdn-link"><span className="js-dropdn-select-current">English</span><i className="icon-angle-down" /></a>
                  <div className="dropdn-content">
                    <ul>
                      <li className="active"><a href="#"><img src="images/flags/en.html" alt />English</a></li>
                      <li><a href="#"><img src="images/flags/sp.html" alt />Spanish</a></li>
                      <li><a href="#"><img src="images/flags/de.html" alt />German</a></li>
                      <li><a href="#"><img src="images/flags/fr.html" alt />French</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdn_currency">
                <div className="dropdn dropdn_caret">
                  <a href="#" className="dropdn-link js-dropdn-link">INR<i className="icon-angle-down" /></a>
                  <div className="dropdn-content">
                    <ul>
                      <li className="active"><a href="#"><span>INR</span></a></li>
                      <li><a href="#"><span>Euro</span></a></li>
                      <li><a href="#"><span>UK pounds</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdn dropdn_account dropdn_fullheight">
                <a href="#" className="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i className="icon-user" /><span className="dropdn-link-txt">Account</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hdr-content">
      <div className="container">
        <div className="row">
          <div className="col-auto show-mobile">
            <div className="menu-toggle"> <a href="#" className="mobilemenu-toggle"><i className="icon-menu" /></a> </div>
          </div>
          <div className="col-8 hdr-nav hide-mobile nav-holder">
            <ul className="mmenu mmenu-js">
              <li className="mmenu-item--simple"><a href="#" className="active">Home</a>
                <div className="mmenu-submenu d-flex">
                  <ul className="submenu-list mt-0">
                    <li><a href="index.html">Fashion (Default) Skin</a><span className="submenu-link-image"><img src="images/screen/screen01.html" alt /></span></li>
                    <li><a href="index-sport.html">Sport Skin</a><span className="submenu-link-image"><img src="images/screen/screen-sport.html" alt /></span></li>
                    <li><a href="index-books.html">Books Skin <span className="menu-label  menu-label--color3">NEW</span></a><span className="submenu-link-image"><img src="images/screen/screen-books.html" alt /></span></li>
                    <li><a href="index-electronics.html">Electronics Skin <span className="menu-label  menu-label--color3">NEW</span></a><span className="submenu-link-image"><img src="images/screen/screen-electronics.html" alt /></span></li>
                    <li><a href="index-viping.html">Vaping Skin <span className="menu-label  menu-label--color3">NEW</span></a><span className="submenu-link-image"><img src="images/screen/screen-vaping.html" alt /></span></li>
                    <li><a href="index-pets.html">Pets Skin</a><span className="submenu-link-image"><img src="images/screen/screen-pets.html" alt /></span></li>
                    <li><a href="index-lingeries.html">Lingeries Skin</a><span className="submenu-link-image"><img src="images/screen/screen-lingeries.html" alt /></span></li>
                    <li><a href="index-games.html">Games Skin</a><span className="submenu-link-image"><img src="images/screen/screen-games.html" alt /></span></li>
                    <li><a href="index-helloween.html">Halloween Skin</a><span className="submenu-link-image"><img src="images/screen/screen-halloween.html" alt /></span></li>
                    <li><a href="index-medical.html">Medical Skin</a><span className="submenu-link-image"><img src="images/screen/screen-medical.html" alt /></span></li>
                    <li><a href="index-food.html">Food Market Skin</a><span className="submenu-link-image"><img src="images/screen/screen-food.html" alt /></span></li>
                    <li><a href="index-cosmetics.html">Cosmetics Skin</a><span className="submenu-link-image"><img src="images/screen/screen-cosmetics.html" alt /></span></li>
                    <li><a href="index-fishing.html">Fishing Skin</a><span className="submenu-link-image"><img src="images/screen/screen-fishing.html" alt /></span></li>
                  </ul>
                  <ul className="submenu-list mt-0">
                    <li><a href="#">Cups&amp;Mugs Skin <span className="menu-label menu-label--color1">Coming Soon</span></a><span className="submenu-link-image"><img src="images/screen/screen-cups.html" alt /></span></li>
                    <li><a href="#">Bikes Skin <span className="menu-label menu-label--color2">Coming Soon</span></a><span className="submenu-link-image"><img src="images/screen/screen-bikes.html" alt /></span></li>
                    <li><a href="#">T-Shirts Skin <span className="menu-label">Coming Soon</span></a><span className="submenu-link-image"><img src="images/screen/screen-tshirts.html" alt /></span></li>
                    <li><a href="index-02.html">Home page 2</a><span className="submenu-link-image"><img src="images/screen/screen02.html" alt /></span></li>
                    <li><a href="index-03.html">Home page 3</a><span className="submenu-link-image"><img src="images/screen/screen03.html" alt /></span></li>
                    <li><a href="index-04.html">Home page 4</a><span className="submenu-link-image"><img src="images/screen/screen04.html" alt /></span></li>
                    <li><a href="index-05.html">Home page 5</a><span className="submenu-link-image"><img src="images/screen/screen05.html" alt /></span></li>
                    <li><a href="index-06.html">Home page 6</a><span className="submenu-link-image"><img src="images/screen/screen06.html" alt /></span></li>
                    <li><a href="index-07.html">Home page 7</a><span className="submenu-link-image"><img src="images/screen/screen07.html" alt /></span></li>
                    <li><a href="index-08.html">Home page 8</a><span className="submenu-link-image"><img src="images/screen/screen08.html" alt /></span></li>
                    <li><a href="index-09.html">Home page 9</a><span className="submenu-link-image"><img src="images/screen/screen09.html" alt /></span></li>
                    <li><a href="index-10.html">Home page 10</a><span className="submenu-link-image"><img src="images/screen/screen10.html" alt /></span></li>
                    <li><a href="index-rtl.html">Home page RTL</a><span className="submenu-link-image"><img src="images/screen/screen-rtl.html" alt /></span></li>
                  </ul>
                </div>
              </li>
              <li className="mmenu-item--simple"><a href="#">Pages</a>
                <div className="mmenu-submenu">
                  <ul className="submenu-list">
                    <li><a href="product.html">Product page</a>
                      <ul>
                        <li><a href="product.html">Product page variant 1<span className="menu-label menu-label--color3">Popular</span></a></li>
                        <li><a href="product-2.html">Product page variant 2</a></li>
                        <li><a href="product-3.html">Product page variant 3</a></li>
                        <li><a href="product-4.html">Product page variant 4</a></li>
                        <li><a href="product-5.html">Product page variant 5</a></li>
                        <li><a href="product-6.html">Product page variant 6</a></li>
                        <li><a href="product-7.html">Product page variant 7</a></li>
                      </ul>
                    </li>
                    <li><a href="category.html">Category page</a>
                      <ul>
                        <li><a href="category.html">Left sidebar filters</a></li>
                        <li><a href="category-closed-filter.html">Closed filters</a></li>
                        <li><a href="category-horizontal-filter.html">Horizontal filters</a></li>
                        <li><a href="category-listview.html">Listing View</a></li>
                        <li><a href="category-empty.html">Empty category</a></li>
                      </ul>
                    </li>
                    <li><a href="cart.html">Cart &amp; Checkout</a>
                      <ul>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="cart-empty.html">Empty cart</a></li>
                        <li><a href="checkout.html">Checkout variant 1</a></li>
                        <li><a href="checkout-2.html">Checkout variant 2</a></li>
                        <li><a href="checkout-3.html">Checkout variant 3</a></li>
                      </ul>
                    </li>
                    <li><a href="account-create.html">Account</a>
                      <ul>
                        <li><a href="account-create.html">Login</a></li>
                        <li><a href="account-create.html">Create account</a></li>
                        <li><a href="account-details.html">Account details</a></li>
                        <li><a href="account-addresses.html">Account addresses</a></li>
                        <li><a href="account-history.html">Order History</a></li>
                        <li><a href="account-wishlist.html">Wishlist</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a>
                      <ul>
                        <li><a href="blog.html">Right sidebar</a></li>
                        <li><a href="blog-left-sidebar.html">Left sidebar</a></li>
                        <li><a href="blog-without-sidebar.html">No sidebar</a></li>
                        <li><a href="blog-sticky-sidebar.html">Sticky sidebar</a></li>
                        <li><a href="blog-grid.html">Grid</a></li>
                        <li><a href="blog-post.html">Blog post</a></li>
                      </ul>
                    </li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="faq.html">Faq</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="404.html">404 Page</a></li>
                    <li><a href="typography.html">Typography</a></li>
                    <li><a href="coming-soon.html" target="_blank">Coming soon</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="category.html">Accessories<span className="menu-label">SALE</span></a></li>
              <li className="mmenu-item--mega"><a href="category.html">Men</a>
                <div className="mmenu-submenu mmenu-submenu--has-bottom">
                  <div className="mmenu-submenu-inside">
                    <div className="container">
                      <div className="mmenu-left width-25">
                        <div className="mmenu-bnr-wrap">
                          <a href="#" className="image-hover-scale"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="images/menu/mmenu-bnr-01.webp" className="lazyload fade-up" alt /></a>
                        </div>
                        <h3 className="submenu-title"><a href="category.html">Pre-Collection<br />Spring-Summer 2021</a></h3>
                      </div>
                      <div className="mmenu-cols column-4">
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Collections</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Martins d'Art 2020/21<span className="submenu-link-txt">Available in boutiques from June 2019</span></a></li>
                            <li><a href="category.html">Spring-Summer 2021<span className="submenu-link-txt">Available in boutiques from March 2019</span></a></li>
                            <li><a href="category.html">Spring-Summer 2021 Pre-Collection<span className="submenu-link-txt">In boutiques</span></a></li>
                            <li><a href="category.html">Cruise 2020/21<span className="submenu-link-txt">In boutiques</span></a></li>
                            <li><a href="category.html">Fall-Winter 2020/21</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Ready-to-wear</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html" className="active">Jackets</a>
                              <ul className="sub-level">
                                <li><a href="category.html">Bomber Jackets</a></li>
                                <li><a href="category.html">Biker Jacket</a></li>
                                <li><a href="category.html">Trucker Jacket</a></li>
                                <li><a href="category.html">Denim Jackets</a></li>
                                <li><a href="category.html">Blouson Jacket<span className="menu-label">SALE</span></a></li>
                                <li><a href="category.html">Overcoat</a></li>
                                <li><a href="category.html">Trench Coat</a></li>
                              </ul>
                            </li>
                            <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts</a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                            <li><a href="category.html">Swimwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Accessories</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Jackets</a></li>
                            <li><a href="category.html">Dresses</a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts<span className="menu-label">SALE</span></a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Brands</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Jackets</a></li>
                            <li><a href="category.html">Dresses</a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts<span className="menu-label menu-label--color1">SALE</span></a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-bottom justify-content-center">
                          <a href="#"><i className="icon-fox icon--lg" /><b>FOXshop News</b><i className="icon-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mmenu-item--mega"><a href="category.html">Women</a>
                <div className="mmenu-submenu mmenu-submenu--has-bottom">
                  <div className="mmenu-submenu-inside">
                    <div className="container">
                      <div className="mmenu-right width-25">
                        <div className="mmenu-bnr-wrap">
                          <a href="#" className="image-hover-scale"><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="images/menu/mmenu-bnr-02.webp" className="lazyload fade-up" alt /></a>
                        </div>
                        <h3 className="submenu-title"><a href="category.html">Pre-Collection<br />Spring-Summer 2021</a></h3>
                      </div>
                      <div className="mmenu-cols column-4">
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Collections</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Martins d'Art 2020/21<span className="submenu-link-txt">Available in boutiques from June 2019</span></a></li>
                            <li><a href="category.html">Spring-Summer 2021<span className="submenu-link-txt">Available in boutiques from March 2019</span></a></li>
                            <li><a href="category.html">Spring-Summer 2021 Pre-Collection<span className="submenu-link-txt">In boutiques</span></a></li>
                            <li><a href="category.html">Cruise 2020/21<span className="submenu-link-txt">In boutiques</span></a></li>
                            <li><a href="category.html">Fall-Winter 2020/21</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Ready-to-wear</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Jackets</a></li>
                            <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a>
                              <ul>
                                <li><a href="category.html">Jackets</a></li>
                                <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a></li>
                                <li><a href="category.html">Blouses &amp; Tops</a>
                                  <ul>
                                    <li><a href="category.html">Jackets</a></li>
                                    <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a>
                                      <ul>
                                        <li><a href="category.html">Jackets</a></li>
                                        <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a>
                                          <ul>
                                            <li><a href="category.html">Jackets</a></li>
                                            <li><a href="category.html">Dresses<span className="menu-label menu-label--color3">SALE</span></a></li>
                                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                                            <li><a href="category.html">Skirts</a></li>
                                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                                            <li><a href="category.html">Outerwear</a></li>
                                            <li><a href="category.html">Swimwear</a></li>
                                          </ul>
                                        </li>
                                        <li><a href="category.html">Blouses &amp; Tops</a></li>
                                        <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                                        <li><a href="category.html">Skirts</a></li>
                                        <li><a href="category.html">Pants &amp; Shorts</a></li>
                                        <li><a href="category.html">Outerwear</a></li>
                                        <li><a href="category.html">Swimwear</a></li>
                                      </ul>
                                    </li>
                                    <li><a href="category.html">Blouses &amp; Tops</a></li>
                                    <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                                    <li><a href="category.html">Skirts</a></li>
                                    <li><a href="category.html">Pants &amp; Shorts</a></li>
                                    <li><a href="category.html">Outerwear</a></li>
                                    <li><a href="category.html">Swimwear</a></li>
                                  </ul>
                                </li>
                                <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                                <li><a href="category.html">Skirts</a></li>
                                <li><a href="category.html">Pants &amp; Shorts</a></li>
                                <li><a href="category.html">Outerwear</a></li>
                                <li><a href="category.html">Swimwear</a></li>
                              </ul>
                            </li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts</a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                            <li><a href="category.html">Swimwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Accessories</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Jackets</a></li>
                            <li><a href="category.html">Dresses</a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts<span className="menu-label">SALE</span></a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-col">
                          <h3 className="submenu-title"><a href="category.html">Brands</a></h3>
                          <ul className="submenu-list">
                            <li><a href="category.html">Jackets</a></li>
                            <li><a href="category.html">Dresses</a></li>
                            <li><a href="category.html">Blouses &amp; Tops</a></li>
                            <li><a href="category.html">Cardigans &amp; Pullovers</a></li>
                            <li><a href="category.html">Skirts<span className="menu-label menu-label--color1">SALE</span></a></li>
                            <li><a href="category.html">Pants &amp; Shorts</a></li>
                            <li><a href="category.html">Outerwear</a></li>
                          </ul>
                        </div>
                        <div className="mmenu-bottom justify-content-center">
                          <a href="#"><i className="icon-fox icon--lg" /><b>FOXshop News</b><i className="icon-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="hdr-logo">
            <a href="index.html" className="logo"><img srcSet="images/logo.webp 1x, images/logo2x.webp 2x" alt="Logo" /></a>
          </div>
          <div className="col col-lg-8 hdr-links-wrap">
            <div className="hdr-links">
              <div className="hdr-phone">
                <i className="icon-phone" /><span>+ 7 555 35 305</span>
              </div>
              <div className="hdr-inline-link">
                <div className="search_container_desktop">
                  <div className="dropdn dropdn_search dropdn_fullwidth">
                    <a href="#" className="dropdn-link  js-dropdn-link only-icon"><i className="icon-search" /><span className="dropdn-link-txt">Search</span></a>
                    <div className="dropdn-content">
                      <div className="container">
                        <form method="get" action="#" className="search search-off-popular">
                          <input name="search" type="text" className="search-input input-empty" placeholder="What are you looking for?" />
                          <button type="submit" className="search-button"><i className="icon-search" /></button>
                          <a href="#" className="search-close js-dropdn-close"><i className="icon-close-thin" /></a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdn dropdn_compare">
                  <a href="#" className="dropdn-link only-icon compare-link ">
                    <i className="icon-compare" /><span className="dropdn-link-txt">Wishlist</span><span className="compare-qty">3</span>
                  </a>
                </div>
                <div className="hdr_container_mobile show-mobile">
                  <div className="dropdn dropdn_account dropdn_fullheight">
                    <a href="#" className="dropdn-link js-dropdn-link" data-panel="#dropdnAccount"><i className="icon-user" /><span className="dropdn-link-txt">Account</span></a>
                  </div>
                </div>
                <div className="dropdn dropdn_fullheight minicart">
                  <a href="#" className="dropdn-link js-dropdn-link minicart-link" data-panel="#dropdnMinicart">
                    <i className="icon-basket" />
                    <span className="minicart-qty">3</span>
                    <span className="minicart-total hide-mobile">$34.99</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hdr-promoline hdr-topline hdr-topline--dark">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="custom-text js-custom-text-carousel" data-slick="{&quot;speed&quot;: 1000, &quot;autoplaySpeed&quot;: 3000}">
              <div className="custom-text-item"><i className="icon-fox" /> Use promocode <span>FOXIC</span> to get 15% discount!</div>
              <div className="custom-text-item"><i className="icon-air-freight" /> <span>Free</span> plane shipping over <span>$250</span></div>
              <div className="custom-text-item"><i className="icon-gift" /> Today only! Post <span>holiday</span> Flash Sale! 2 for $20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </>
  );
};
export default Header;