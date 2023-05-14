require 'rails_helper'

RSpec.describe "project_comments/index", type: :view do
  before(:each) do
    assign(:project_comments, [
      ProjectComment.create!(
        content: "Content",
        project: nil,
        user: nil
      ),
      ProjectComment.create!(
        content: "Content",
        project: nil,
        user: nil
      )
    ])
  end

  it "renders a list of project_comments" do
    render
    assert_select "tr>td", text: "Content".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
