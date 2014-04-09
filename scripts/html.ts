# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  # remove_all_styles()
  # remove_html_comments()

  add_assets()

  @import "sections/base.ts"
  @import "sections/header.ts"
  @import "sections/content.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
