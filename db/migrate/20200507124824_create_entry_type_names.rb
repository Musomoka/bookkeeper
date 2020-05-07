class CreateEntryTypeNames < ActiveRecord::Migration[5.2]
  def change
    create_table :entry_type_names do |t|
      t.string :entryTypeCode
      t.string :EntryTypeName
      t.string :ContraAccount
      t.boolean :currentStatus

      t.timestamps
    end
  end
end
