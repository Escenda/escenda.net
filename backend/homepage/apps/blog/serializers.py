from rest_framework import serializers

from .models import BlogPost, Category, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BlogPostListSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    tags = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'author', 'title', 'description',
            'tags', 'category', 'is_published',
            'created_at', 'updated_at'
        ]

class BlogPostSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(slug_field='username', read_only=True)
    tags = serializers.SlugRelatedField(slug_field='name', queryset=Tag.objects.all(), many=True)
    category = serializers.SlugRelatedField(slug_field='name', queryset=Category.objects.all(), allow_null=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'content', 'category', 'tags', 'is_published', 'author', 'created_at', 'updated_at']
