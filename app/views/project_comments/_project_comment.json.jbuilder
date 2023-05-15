json.extract! project_comment, :id, :content
json.user project_comment.user, partial: 'users/user', as: :user
