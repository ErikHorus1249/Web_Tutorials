from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, HttpResponseServerError
from . model import hashModelH5
import json
# Create your views here.
def index(request):
    response = HttpResponse()
    response.writelines("<h1>downloading . . . </h1>")
    response.write("This is your model")
    return response


def save_data(request):
    response = HttpResponse()
    if request.method == 'POST':
        json_data = json.loads(request.body) # request.raw_post_data w/ Django < 1.4
        try:
            data = json_data['data']
            response.write(data)
        except KeyError:
            HttpResponseServerError("Malformed data!")
        
    return response