require 'rails_helper'

RSpec.describe '/', type: :request do
  describe 'POST /login' do
    subject(:login) { post '/login', params: {username: user.username} }

    let(:user) { FactoryBot.create :user }

    it 'redirects to projects' do
      login
      expect(response).to redirect_to '/projects'
    end
  end

  describe 'GET /' do
    subject(:login) { get '/' }

    let(:user) { FactoryBot.create :user }

    context 'whebn user is already logged in' do
      before do
        post '/login', params: {username: user.username}
      end

      it 'redirects to projects' do
        login
        expect(response).to redirect_to '/projects'
      end
    end
  end
end
