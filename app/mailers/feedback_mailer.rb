class FeedbackMailer < ApplicationMailer

  default to: 'rtr.sachinmour@gmail.com'

  def feedback_email(from, content, name)
    @content = content
    @name = name
    mail(from: from, subject: "feedback")
  end

end
