class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end


  def create
    @bench = Bench.new
    if @bench.save
      render :show
    end
  end

  def bench_params
    params.require(:bench).permit(:lat, :long, :description)
  end
end
