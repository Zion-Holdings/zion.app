#!/usr/bin/env ruby
# parse-github-workflows-yaml.rb
# Stub parser to prevent CI failures
require 'yaml'

Dir.glob('.github/workflows/**/*.yml').each do |f|
  YAML.load_file(f)
  puts "ok: #{f}"
end

puts "parsed #{Dir.glob('.github/workflows/**/*.yml').length} workflow files"
