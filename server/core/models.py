from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    current_level = models.PositiveIntegerField(default=1)
    hidden_on_leaderboard = models.BooleanField(default=False)
    phone = models.IntegerField(null = True)
    last_level_updated_time = models.DateTimeField(auto_now=True)
    college = models.CharField(max_length=500,null = True)

    # Currency
    paidHintTaken = models.BooleanField(default=False)
    keys = models.PositiveIntegerField(default = 0)


    REQUIRED_FIELDS = ['phone', 'first_name', 'last_name', 'college']



    def __str__(self):
        return self.username
    
class Question(models.Model):
    title = models.CharField(max_length=64, null=True)
    img1 = models.URLField(max_length = 1023, default="https://nth22.s3.ap-south-1.amazonaws.com/transperent.png")
    img2 = models.URLField(max_length = 1023, default="https://nth22.s3.ap-south-1.amazonaws.com/transperent.png")
    img3 = models.URLField(max_length = 1023, default="https://nth22.s3.ap-south-1.amazonaws.com/transperent.png")
    img4 = models.URLField(max_length = 1023, default="https://nth22.s3.ap-south-1.amazonaws.com/transperent.png")
    level = models.IntegerField(unique=True, null=True)
    tooltip = models.CharField(max_length=1023, null=True, default=None)
    hints = models.TextField(default="<hints>")
    gif = models.URLField(max_length=1023, null=True, default=None)
    vid = models.URLField(max_length=1023, null=True, default=None)
    answer = models.CharField(max_length=1023, default="")
    keywords = models.TextField(default='[]',blank=True)
    paidHint = models.TextField(default="<Extra hint>")

    def __str__(self):
        return self.title + ": " + str(self.level)