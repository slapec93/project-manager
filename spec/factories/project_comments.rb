FactoryBot.define do
  factory :project_comment do
    content { 'MyString' }
    association :project
    association :user
  end
end
