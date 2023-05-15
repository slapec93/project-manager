require 'rails_helper'

RSpec.describe Project, type: :model do
  describe '#status' do
    let(:project) { FactoryBot.create :project }

    it 'validates status values' do
      ['planned', 'started', 'finished'].each do |status|
        project.status = status
        expect(project.valid?).to be true
      end
    end

    it 'raises error when invalid status assigned' do
      expect { project.status = 'invalid' }.to raise_error ArgumentError
    end
  end
end
