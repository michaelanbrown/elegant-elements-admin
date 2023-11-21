class AddActiveToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :activee, :boolean
  end
end
