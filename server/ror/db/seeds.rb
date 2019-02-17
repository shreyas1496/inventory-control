# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create!(name: "Mixer", company: "Philips", on_hand: 12, max_quantity: 12,reorder_level: 2, buy_price: 100, sell_price: 122, location: "Drawer A", usage: nil, gst: nil)