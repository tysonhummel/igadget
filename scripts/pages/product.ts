$('./body') {

  add_class('mw-product')

  # remove add this button box
  $(".//div[contains(@class, 'AddThisButtonBox')]") {
    remove()
  }

  # remove the ratings row
  $(".//div[@class='DetailRow'][div[@class='Label']]") {
    $("./div[@class='Label']") {
      $text = fetch("text()")
    }
    match($text) {
      with(/Rating:/) {
        remove()
      }
    }
  }

  # remove the image preview from the software options
  $(".//div[contains(@class, 'productOptionViewProductPickListWithImage')]//tr//td[1]") {
    remove()
  }

  # move new products down to live
  # with it's bretheren
  $(".//div[@id='SideProductRelated']") {
    move_here("//div[@id='SideNewProducts']", "before")
  }

  ## turn sidebar lists into togglers
  # related products
  new_toggler(".//div[@id='SideProductRelated']")
  # recently viewed
  new_toggler(".//div[@id='SideProductRecentlyViewed']")

}