class Project < ApplicationRecord
  enum status: [:planned, :started, :finished]
  has_many :project_comments
end
