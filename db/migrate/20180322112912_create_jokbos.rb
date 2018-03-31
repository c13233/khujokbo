class CreateJokbos < ActiveRecord::Migration
  def change
    create_table :jokbos do |t|

      t.string :writer
      t.string :major
      t.string :prof
      t.string :course
      t.string :semester
      t.string :content
      t.string :file_url, default: ""

      t.timestamps null: false
    end
  end
end
