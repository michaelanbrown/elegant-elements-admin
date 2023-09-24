class ProductsSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :category
end