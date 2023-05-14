require 'rails_helper'

RSpec.describe "project_comments/edit", type: :view do
  before(:each) do
    @project_comment = assign(:project_comment, ProjectComment.create!(
      content: "MyString",
      project: nil,
      user: nil
    ))
  end

  it "renders the edit project_comment form" do
    render

    assert_select "form[action=?][method=?]", project_comment_path(@project_comment), "post" do

      assert_select "input[name=?]", "project_comment[content]"

      assert_select "input[name=?]", "project_comment[project_id]"

      assert_select "input[name=?]", "project_comment[user_id]"
    end
  end
end
