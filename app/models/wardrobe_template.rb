class WardrobeTemplate < ApplicationRecord
    has_many :items, foreign_key: "item_id"
end
