json.extract! project_comment, :id, :content, :created_at
json.user project_comment.user, partial: 'users/user', as: :user
