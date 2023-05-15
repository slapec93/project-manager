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

po = User.create! username: 'ProductOwner'
me = User.create! username: 'Gergely'

ProjectComment.create! user: me, content: 'Can the possible values for project status specified by the users?', project: project
ProjectComment.create! user: po, content: "In the MVP, let's start with static values, later we'll introduce this feature based on user feedback.", project: project

ProjectComment.create! user: me, content: 'What kind of authentication methods do we implement?', project: project
ProjectComment.create! user: po, content: "As a first step we implement username/password authentication, but we'll support authentication through Github", project: project

ProjectComment.create! user: me, content: 'Status change: Planned -> Started', project: project

ProjectComment.create! user: me, content: 'Should we show the date when the comment was created on the UI?', project: project
ProjectComment.create! user: po, content: "Yes, that's something the customer wants to see", project: project
