# make togglers from igadget lists
@func XMLNode.new_toggler(Text %xpath) {
  $(%xpath) {
    add_class('mw-list-toggler')
    attribute("data-ur-set", "toggler")
    $$("h2") {
      wrap("div", data-ur-toggler-component: "button") {
        add_class('mw-list-toggler-button')
        insert("div", class: "plus-minus")
      }
    }
    $("./div[@class='BlockContent']") {
      add_class('mw-list-toggler-content')
      attribute("data-ur-toggler-component", "content")
    }
  }
  yield()
}