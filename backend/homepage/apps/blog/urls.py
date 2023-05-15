from django.urls import path

from .views import (BlogPostCreateView, BlogPostDeleteView, BlogPostDetailView,
                    BlogPostUpdateView, FilteredBlogPostListView)

urlpatterns = [
    path('posts/', FilteredBlogPostListView.as_view(), name='blogpost-list'),
    path('posts/<int:pk>/', BlogPostDetailView.as_view(), name='blogpost-detail'),
    path('posts/create/', BlogPostCreateView.as_view(), name='blogpost-create'),
    path('posts/<int:pk>/update/', BlogPostUpdateView.as_view(), name='blogpost-update'),
    path('posts/<int:pk>/delete/', BlogPostDeleteView.as_view(), name='blogpost-delete'),
]
