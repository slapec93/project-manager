class ProjectCommentsController < ApplicationController
  def create
    @project_comment = ProjectComment.new(project_comment_params)
    @project_comment.user = current_user
    @project_comment.project_id = params[:project_id]

    respond_to do |format|
      if @project_comment.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @project_comment.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def project_comment_params
    params.require(:project_comment).permit(:content)
  end
end
