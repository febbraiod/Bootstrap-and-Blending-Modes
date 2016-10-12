Rails.application.routes.draw do

  root 'main#grid'

  get '/blending' => 'main#blending'
  get '/dashoffset_demo' => 'main#dashoffset'
end
