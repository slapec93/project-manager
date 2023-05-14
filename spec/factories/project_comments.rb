FactoryBot.define do
  factory :project_comment do
    content { "MyString" }
    project { nil }
    user { nil }
  end
end
