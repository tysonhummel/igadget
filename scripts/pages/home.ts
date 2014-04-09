$('./body') {
  add_class('mw-home')

  #remove left and right columns from home page
  $(".//div[@id='LayoutColumn1']") {
    remove()
  }

  # make a carousel for featured products
  $(".//div[@id='HomeFeaturedProducts']/div[@class='BlockContent']") {
    attributes(data-ur-set: "carousel", data-ur-infinite: "enabled")
    insert_top("div", data-ur-carousel-component: "dots")
    insert_top("span", data-ur-carousel-component: "count", data-ur-template: "{{index}}/{{count}}")
    $("./ul[@class='ProductList']") {
      attribute("data-ur-carousel-component", "scroll_container")
      $("./li") {
        attribute("data-ur-carousel-component", "item")
      }
    }
  }

  # make a carousel for new products
  $(".//div[@id='HomeNewProducts']/div[@class='BlockContent']") {
    attributes(data-ur-set: "carousel", data-ur-infinite: "enabled")
    insert_top("span", data-ur-carousel-component: "count", data-ur-template: "{{index}}/{{count}}")
    insert_top("div", data-ur-carousel-component: "dots")
    $("./ul[@class='ProductList']") {
      attribute("data-ur-carousel-component", "scroll_container")
      $("./li") {
        attribute("data-ur-carousel-component", "item")
      }
    }
  }

}


