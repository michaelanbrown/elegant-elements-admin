class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :status

  belongs_to :category
end