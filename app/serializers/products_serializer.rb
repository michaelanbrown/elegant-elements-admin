class ProductsSerializer < ActiveModel::Serializer
  attributes :id

  beongs_to :category
end