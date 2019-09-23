class PokemonsController < ApplicationController

  def destroy
    # pokemon = Pokemon.find_by(params[:id])
    render json: Pokemon.find_by(id: params[:id]).destroy
  end

end
