from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

# Create your models here.

class User(AbstractUser):
    current_level = models.PositiveIntegerField(default=1)
    hidden_on_leaderboard = models.BooleanField(default=False)
    phone = models.IntegerField(null = True)
    last_level_updated_time = models.DateTimeField(auto_now=True)
    college = models.CharField(max_length=500,null = True)
    promo_used = models.BooleanField(default=False)

    # Currency
    paidHintTaken = models.BooleanField(default=False)
    keys = models.PositiveIntegerField(default = 0)


    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'email', 'college', 'keys', 'current_level', 'paidHintTaken']



    def __str__(self):
        return self.username
    
class Question(models.Model):
    title = models.CharField(max_length=64, null=True)
    # https://nth22.s3.ap-south-1.amazonaws.com/transperent.png
    img1 = models.URLField(max_length = 1023, default="https://nth22.s3.ap-south-1.amazonaws.com/transperent.png")
    img2 = models.URLField(max_length = 1023, null=True, blank=True)
    img3 = models.URLField(max_length = 1023, null=True,blank=True)
    img4 = models.URLField(max_length = 1023, null=True,blank=True)
    level = models.IntegerField(unique=True, null=True)
    tooltip = models.CharField(max_length=1023, null=True, default=None)
    hints = models.TextField(default="<hints>")
    # gif = models.URLField(max_length=1023, null=True, default=None)
    # vid = models.URLField(max_length=1023, null=True, default=None)

    # Confidential
    answer = models.CharField(max_length=1023, default="")
    keywords = models.TextField(default='[]',blank=True)
    paidHint = models.TextField(default="<Extra hint>")

    def __str__(self):
        return self.title + ": " + str(self.level)
    
    @property 
    def setCost(self):
        return self.level+1

class Timer(models.Model):
    time = models.IntegerField(default=1666971000000)
    is_started = models.BooleanField(default=False)
    promo_code_active = models.BooleanField(default=False)
    promocode = models.CharField(max_length=100, default="NTH22")
    add_keys_interval_min = models.IntegerField(default=120)