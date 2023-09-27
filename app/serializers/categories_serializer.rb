class CategoriesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :products

  has_many :products
end