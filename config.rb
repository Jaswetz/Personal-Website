#MARKDOWN
set :markdown_engine, :redcarpet
set :markdown,  :fenced_code_blocks => true,
                :autolink => true,
                :smartypants => true

#Livereload
activate :livereload

# Normalize
require 'compass-normalize'

# Susy grids
require 'susy'


###
# Blog options, setup
###

activate :blog do |blog|
  blog.permalink = ":title.html"
  blog.sources = "blog/:title.html"
  blog.layout = "layouts/article"
  blog.default_extension = ".md"
  # blog.tag_template  = "layouts/tag.html"
  # blog.prefix = "blog"
end


###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify HTML
  # activate :minify_html

  # activate gzip
  activate :gzip

  # Change Compass configuration
  compass_config do |config|
    config.output_style = :compressed
  end

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :cache_buster

  # Use relative URLs
  activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  activate :smusher

  # Make favicons
  activate :favicon_maker

  # Or use a different image path
  # set :http_path, "/Content/images/"
end