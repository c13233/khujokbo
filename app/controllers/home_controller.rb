class HomeController < ApplicationController
  def index
    @all_post = Jokbo.all
    @recent_post = @all_post.last(6).reverse
    @post_count = @all_post.count
  end
  
  def create
    
  end
  
  def post
    @post_all = Jokbo.all
    @one_post = @post_all.find(params[:id])
    @post_course = @post_all.where(course: @one_post.course)
  end
  
  def post_write
    new_post = Jokbo.new
    new_post.writer = params[:writer]
    new_post.major = params[:major]
    new_post.prof = params[:prof]
    new_post.course = params[:course]
    new_post.semester = params[:semester]
    new_post.content = params[:content]

    new_file = params[:jokbo]
    uploader = AvatarUploader.new
    uploader.store!(new_file)
    new_post.file_url = uploader.url
    new_post.save
    redirect_to "/home/index"
  end
  
  def view_1
    @search = params[:search]
    @post_all = Jokbo.all
    @post_prof = @post_all.where("prof LIKE ?", "%#{@search}%")
    @post_course = @post_all.where("course LIKE ?", "%#{@search}%")
    @all_count = @post_prof.count + @post_course.count
  end
  
  def view_2
    @post_all = Jokbo.all
    @post_course_name = params[:id]
    @post_course = @post_all.where(major: params[:id])
    @post_course_count = @post_course.count
  end
end
