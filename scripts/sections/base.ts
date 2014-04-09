# remove the br tag that is 
# messing up the overall layout
$(".//div[@id='Container']") {
  $$("br") {
    # add_class('mw-br')
    remove()
  }
}

# remove rss feedlink from h2s
$(".//h2/span") {
  remove()
}