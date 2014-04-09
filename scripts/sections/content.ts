$(".//div[@id='Wrapper']") {

  # remove breadcrumbs
  $(".//div[contains(@class, 'Breadcrumb')]") {
    remove()
  }

  # add btn1 class to all "add product" buttons
  $(".//div[@class='ProductActionAdd']") {
    add_class('btn1');
  }

  # no newsletter signup
  $(".//div[@id='SideNewsletterBox']") {
    remove()
  }

  # remove quick-view butotn
  # this isn't working :(
  $(".//div[contains(@class, 'QuickView')]") {
    $(".//div[@class='QuickViewBtn']") {
      remove()
    }
  }

  ## turn sidebar lists into togglers
  # shop by brand
  new_toggler(".//div[@id='SideShopByBrand']")
  # new products
  new_toggler(".//div[@id='SideNewProducts']")
  # top sellers
  new_toggler(".//div[@id='SideTopSellers']")
  # popular products
  new_toggler(".//div[@id='SidePopularProducts']")

}