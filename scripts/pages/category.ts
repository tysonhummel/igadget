$('./body') {

  add_class('mw-category')

  # move sortbox and heading around a bit
  $(".//div[@id='SideShopByBrand']") {
    $(".//li") {
      insert("div", class: "sprites-menu_go")
    }
    move_here("//div[@id='CategoryHeading']", "before") {
      $(".//div[@class='CategoryDescription']") {
        remove()
      }
      $(".//div[@class='SubCategoryList']") {
        remove()
      }
    }
    move_here("//div[contains(@class,'SortBox')]", "after")
  }

  # product list
  $("//ul[contains(@class, 'ProductList')]") {
    $(".//li") {
      insert("div", class: "product-info") {
        move_here("../div[@class='ProductDetails']", "bottom")
        move_here("../div[@class='ProductPriceRating']", "bottom")
        remove("../div[@class='ProductCompareButton']")
        move_here("../div[contains(@class, 'ProductActionAdd')]", "bottom")
      }
    }
  }
  # remove compare button
  $(".//div[@class='CompareButton']") {
    remove()
  }

  ## turn sidebar lists into togglers
  # top sellers category
  new_toggler(".//div[@id='SideCategoryTopSellers']")
  # new products category
  new_toggler(".//div[@id='SideCategoryNewProducts']")

}
