class ItemsController < ApplicationController

    def index
        @user = User.find(current_user.id)
        @items = Item.where(user_id: @user.id)
    end

    def new
        @templates = WardrobeTemplate.all
        @item = Item.new
    
    end

    def destroy

    end
    
end
