from django.shortcuts import render
from django.views.generic.base import TemplateView


class ArticleListFullView(TemplateView):
    template_name = 'articles/article_list_full.html'


class ArticleListTeaseView(TemplateView):
    template_name = 'articles/article_list_tease.html'


class ArticleDetailView(TemplateView):
    template_name = 'articles/article_detail.html'