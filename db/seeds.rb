# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
project = Project.create! title: 'Project manager app',
                          description: 'Create a project manager app, where users can leave comments and change the update of the project',
                          status: :started

po = User.create! username: 'Product owner'
me = User.create! username: 'Gergely'

ProjectComment.create! user: me, content: 'Can the possible values for project status specified by the users?', project: project
ProjectComment.create! user: po, content: "In the MVP, let's start with static values, later we'll introduce this feature based on user feedback.", project: project
