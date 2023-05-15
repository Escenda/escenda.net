import uuid

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.core.mail import send_mail
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from ..managers import CustomUserManager


def savePath(instance, filename):
    return f'static/img/{instance.user_id}/{filename}'


class User(AbstractBaseUser, PermissionsMixin):
    objects = CustomUserManager()

    username_validator = UnicodeUsernameValidator()

    user_id = models.UUIDField(_('user_id'), unique=True, default=uuid.uuid4, editable=False)
    username = models.CharField(_("username"), unique=True, max_length=50, validators=[username_validator])
    email = models.EmailField(_("email_address"), unique=True, null=True, blank=True)
    last_name = models.CharField(_('last_name'), max_length=20, blank=True)
    first_name = models.CharField(_('first_name'), max_length=20, blank=True)
    post = models.CharField(_('post'), max_length=20, blank=True)
    icon_location = models.ImageField(_('icon_location'), default='static/img/user.png', upload_to=savePath)
    is_staff = models.BooleanField(_("staff status"), default=False)
    is_active = models.BooleanField(_("active"), default=True)
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)

    USERNAME_FIELD = "username"

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")
        
    def clean(self):
        super().clean()
        self.username = self.username

    def email_user(self, subject, message, from_email=None, **kwargs):
        send_mail(subject, message, from_email, [self.email], **kwargs)
