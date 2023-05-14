require 'rails_helper'

RSpec.describe "project_comments/new", type: :view do
  before(:each) do
    assign(:project_comment, ProjectComment.new(
      content: "MyString",
      project: nil,
      user: nil
    ))
  end

  it "renders new project_comment form" do
    render

    assert_select "form[action=?][method=?]", project_comments_path, "post" do

      assert_select "input[name=?]", "project_comment[content]"

      assert_select "input[name=?]", "project_comment[project_id]"

      assert_select "input[name=?]", "project_comment[user_id]"
    end
  end
end
