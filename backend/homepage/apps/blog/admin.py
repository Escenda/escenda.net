from django.contrib import admin

from .models import BlogPost, Category, Tag


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'is_published', 'created_at', 'updated_at')
    search_fields = ('title', 'content', 'author__username')
    list_filter = ('category', 'tags', 'is_published')
    autocomplete_fields = ('author', 'tags', 'category')

class TagAdmin(admin.ModelAdmin):
    search_fields = ('name',)

class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('name',)

admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Category, CategoryAdmin)
