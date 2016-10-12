Rails.application.routes.draw do

  root 'main#grid'

  get '/dashoffset_demo' => 'main#dashoffset'
end
