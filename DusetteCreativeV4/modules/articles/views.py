from django.shortcuts import render
from django.views.generic.base import TemplateView


class ArticleListFull(TemplateView):
    template_name = 'articles/article_list_full.html'


class ArticleListTease(TemplateView):
    template_name = 'articles/article_list_tease.html'


class ArticleDetail(TemplateView):
    template_name = 'articles/article_detail.html'