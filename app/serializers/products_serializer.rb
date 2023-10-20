class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :status, :category

  belongs_to :category

  def status
    if object.quantity
  end
end