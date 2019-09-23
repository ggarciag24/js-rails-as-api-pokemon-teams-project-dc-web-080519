class TrainerSerializer

def initialize(trainer_object)
  @trainer = trainer_object
  # @pokemons = @trainer.pokemons
end

def to_serialized_json
  # @trainer.to_json(:include => {:pokemons => {:only => [:nickname, :species]}})

  @trainer.to_json({
    :only =>  [:name, :id],
    :include => {
      :pokemons => {
        :only => [:nickname, :species, :id]}
    }
  })

end

end
