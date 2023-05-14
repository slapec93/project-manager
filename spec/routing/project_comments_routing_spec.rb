require "rails_helper"

RSpec.describe ProjectCommentsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/project_comments").to route_to("project_comments#index")
    end

    it "routes to #new" do
      expect(get: "/project_comments/new").to route_to("project_comments#new")
    end

    it "routes to #show" do
      expect(get: "/project_comments/1").to route_to("project_comments#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/project_comments/1/edit").to route_to("project_comments#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/project_comments").to route_to("project_comments#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/project_comments/1").to route_to("project_comments#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/project_comments/1").to route_to("project_comments#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/project_comments/1").to route_to("project_comments#destroy", id: "1")
    end
  end
end
