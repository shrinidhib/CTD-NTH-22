FROM python:3.10
WORKDIR /user/src/app
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN pip install gunicorn
RUN pip install python-dotenv
COPY . .
EXPOSE 8000