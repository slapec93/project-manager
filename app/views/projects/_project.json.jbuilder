json.extract! project, :id, :title, :description, :status
json.project_comments project.project_comments, partial: 'project_comments/project_comment', as: :project_comment
