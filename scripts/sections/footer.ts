$("./body") {

  # insert html footer element and moovweb text 
  # and move the rest of the footer content here
  insert("footer", class: "mw-footer") {
    # move_here("..//div[@id='Footer']/p", "top")
    insert("p", "All prices are in ") {
      insert("span", "USD", title: "Default Currency")
    }
    insert("p", "Copyright 2014 iGadgetCommerce.")
    insert("div", "Powered by", class:"poweredby"){
      insert("div", class: "pb-moovweb")
    }
  }
  # remove the old and now empty footer div
  $(".//div[@id='Footer']"){
    remove()
  }
  
}