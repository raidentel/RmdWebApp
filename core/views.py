from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView
from .models import Records
from .serializer import RecordsSerialiwers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, permissions


class RecordList(generics.ListCreateAPIView):
    model = Records
    queryset = Records.objects.all()
    serializer_class = RecordsSerialiwers
    permission_classes = [
        permissions.AllowAny
    ]




class RecordsView(APIView):
    def get(self, request, format=None):
        records = Records.objects.all()
        serialized_records = RecordsSerialiwers(records, many=True)
        return Response(serialized_records.data)

# Create your views here.

class AngularApp(TemplateView,):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(AngularApp, self).get_context_data(**kwargs)
        context['ANGULAR_URL'] = settings.ANGULAR_URL
        return context


class SampleView(View):
    """View to render django template to angular"""

    def get(self, request):
        return HttpResponse("OK!")


class NgTemplateView(View):
    """View to render django template to angular"""

    def get(self, request):
        query = Records.objects.all()
        return render(request, 'template.html', {"list_records": query })

