from django.template.loader import render_to_string
from django.conf import settings


def send_verification_email(request, user):
    url = f'{settings.FRONTEND_DOMAIN}/confirm/{user.confirmation_code}'
    text = render_to_string('confirm_email.html', {'user': user, 'url': url}, request)
    user.email_user(f"Активация аккаунта {settings.COMPANY_NAME}", text, html_message=text)


def send_reset_link_email(request, reset, user):
    url = f'{settings.FRONTEND_DOMAIN}/reset-password/{reset.key}'
    text = render_to_string('reset_password.html', {'user': user, 'url': url}, request)
    user.email_user(f'Восстановить пароль, {settings.COMPANY_NAME}', text, html_message=text)


def send_task_email(request, task):
    url = f'{settings.FRONTEND_DOMAIN}/task/task?assigned={task.id}'
    text = render_to_string('new_task.html', {'task': task, 'url': url}, request)
    task.assigned.email_user('У вас новая задача!', text, html_message=text)
