# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

u1 = User.create!(name: "Michaela Brown", title: "Founder", email: "michaela.brown375@gmail.com", admin: true, password: "owner")

c1 = Category.create!(name: "Essentials", description: "Pieces needed to make jewelry.")