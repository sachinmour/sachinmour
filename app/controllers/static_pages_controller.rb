class StaticPagesController < ApplicationController

  def home
  end

  def feedback
    FeedbackMailer.feedback_email(params[:email], params[:content], params[:name]).deliver_later
    respond_to do |format|
      format.js {}
    end
  end

end
