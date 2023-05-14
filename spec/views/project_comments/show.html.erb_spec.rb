require 'rails_helper'

RSpec.describe "project_comments/show", type: :view do
  before(:each) do
    @project_comment = assign(:project_comment, ProjectComment.create!(
      content: "Content",
      project: nil,
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Content/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
