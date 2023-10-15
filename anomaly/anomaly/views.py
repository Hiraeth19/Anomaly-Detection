from django.shortcuts import render

def homepage(request):
    return render(request,"index.html")

def loginpage(request):
    return render(request,"login.html")

def video(request):
    return render(request,"video.html")    