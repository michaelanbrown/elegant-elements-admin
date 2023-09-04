class Product < ApplicationRecord

  validates :name, presence: true
  validates :quantity, presence: true
  validates :status, presence: true
  validates :price, presence: true

  belongs_to :category
end
