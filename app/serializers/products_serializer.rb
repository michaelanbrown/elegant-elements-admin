class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :status, :category

  belongs_to :category

  def status
    if object.quantity < 25
      return 'Low'
    elsif (object.quantity >=25 && object.quantity < 50)
      return 'Mid'
    else
      return 'Full'
    end
  end
end