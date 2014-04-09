$(".//div[@id='Header']") {

  $("./div[@id='Logo']") {
      # Move top menu into #Logo container
      move_here("../../../div[@id='TopMenu']", "bottom") {
        # Remove unwanted top menu items from upper menu
        remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
        # add wrappers and class for sprites
        $(".//li[@class='First']/a") {
          wrap("span", class: "sprites-user")
        }
        $(".//li[@class='CartLink']/a") {
          wrap("span", class: "sprites-cart")
          $(".//span"){
            remove()
          }
        }
    }
  }

  # Insert HTML for bottom of header
  insert("div", class: "mw_header_bottom") {
    insert("div", class: "mw_search")
    insert("div", class: "mw_menu_toggler") {
      attribute("data-ur-set", "toggler")
      insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
      # Move menu items into header bottom
      move_here("//div[@id='Menu']", "bottom") {
        attribute("data-ur-toggler-component", "content")
        # Move "Category List" element on bottom of #Menu element
        move_here("//div[@id='SideCategoryList']", "bottom")
        $$("li") {
          add_class("mw_bar2")
        }
      }
    }
  }

  # Fill search HTML
  $("..//div[@class='mw_search']") {
    # Move search form into container element
    move_here("//div[@id='SearchForm']", "bottom") {
      remove("./p")
      $("./form") {
        remove("./label")
        # Change search button background image
        $("./input[@type='image']") {
          wrap("div", class: "mw_search_btn sprites-search")
          attributes(src:"", class:"", type:"submit")
        }
        $("./input[@type='text']") {
          attribute("placeholder", "Search...")
        }
      }
    }
  }
  
}