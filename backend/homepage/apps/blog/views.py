from django.db.models import Q
from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny, IsAuthenticated

from .decorators import IsAdmin, IsEditor
from .models import BlogPost
from .serializers import BlogPostListSerializer, BlogPostSerializer


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'

class FilteredBlogPostListView(generics.ListAPIView):
    serializer_class = BlogPostListSerializer
    permission_classes = [AllowAny]
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        queryset = BlogPost.objects.all()

        tags = self.request.query_params.get('tags', None)
        categories = self.request.query_params.get('categories', None)
        authors = self.request.query_params.get('authors', None)
        is_published = self.request.query_params.get('is_published', None)

        if tags:
            tag_names = tags.split(',')
            queryset = queryset.filter(tags__name__in=tag_names)

        if categories:
            category_names = categories.split(',')
            queryset = queryset.filter(category__name__in=category_names)

        if authors:
            author_usernames = authors.split(',')
            queryset = queryset.filter(author__username__in=author_usernames)

        if is_published is not None:
            is_published = is_published.lower() in ['true', '1']
        else:
            # デフォルトで公開記事のみを返す
            is_published = True

        if is_published:
            queryset = queryset.filter(is_published=True)
        else:
            if not self.request.user.groups.filter(name='admin').exists():
                # admin権限がない場合、ユーザーの持つ非公開記事と公開記事の両方を表示する
                queryset = queryset.filter(Q(is_published=False, author=self.request.user) | Q(is_published=True))
            else:
                queryset = queryset.filter(is_published=False)

        return queryset

class BlogPostCreateView(generics.CreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class BlogPostUpdateView(generics.UpdateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        user = self.request.user
        if user.is_authenticated and (user == self.get_object().author or user.is_staff):
            serializer.save()
        else:
            raise PermissionDenied("あなたはこの記事を編集する権限がありません。")

class BlogPostDeleteView(generics.DestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [IsAuthenticated]

    def perform_destroy(self, instance):
        user = self.request.user
        if user.is_authenticated and (user == instance.author or user.is_staff):
            instance.delete()
        else:
            raise PermissionDenied("あなたはこの記事を削除する権限がありません。")

class BlogPostDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]
