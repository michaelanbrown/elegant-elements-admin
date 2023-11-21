# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create!(name: "Michaela Brown", title: "Founder", email: "michaela.brown375@gmail.com", admin: true, password: "owner", active: true)

c1 = Category.create!(name: "Essentials", description: "Pieces needed to make jewelry.")
c2 = Category.create!(name: "Care Items", description: "Items to keep your jewelry clean and safe.")
c3 = Category.create!(name: "Charms", description: "Jewelry decorations.")
c4 = Category.create!(name: "Extras", description: "Accessories for your jewelry needs.")

p1 = Product.create!(name: "Engrave Plate", category_id: c1.id, quantity: 50, status: "full", price: 0.10)
p2 = Product.create!(name: "Clasps", category_id: c1.id, quantity: 50, status: "full", price: 0.10)
p3 = Product.create!(name: "Chains", category_id: c1.id, quantity: 50, status: "full", price: 0.10)
p4 = Product.create!(name: "Jewelry Box", category_id: c2.id, quantity: 5, status: "low", price: 1.00)
p5 = Product.create!(name: "Cleaning Solution", category_id: c2.id, quantity: 25, status: "mid", price: 0.50)
p6 = Product.create!(name: "Cleaning Cloth", category_id: c2.id, quantity: 25, status: "mid", price: 0.05)
p8 = Product.create!(name: "Carrying Pouch", category_id: c2.id, quantity: 10, status: "low", price: 0.15)
p9 = Product.create!(name: "Sport Charm", category_id: c3.id, quantity: 100, status: "full", price: 0.40)
p10 = Product.create!(name: "Food Charm", category_id: c3.id, quantity: 100, status: "full", price: 0.40)
p11 = Product.create!(name: "Hanging Hooks", category_id: c4.id, quantity: 8, status: "low", price: 1.15)
p12 = Product.create!(name: "Layering Clasp", category_id: c4.id, quantity: 3, status: "low", price: 1.50)