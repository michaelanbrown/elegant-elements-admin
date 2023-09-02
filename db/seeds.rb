# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create!(name: "Michaela Brown", title: "Founder", email: "michaela.brown375@gmail.com", admin: true, password: "owner")

c1 = Category.create!(name: "Essentials", description: "Pieces needed to make jewelry.")
c2 = Category.create!(name: "Care Items", description: "Items to keep your jewelry clean and safe.")

p1 = Product.create!(name: "Engrave Plate", category_id: c1.id, quantity: 50, status: "Full", price: 0.10)
