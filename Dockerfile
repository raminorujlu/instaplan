FROM python:3.11
WORKDIR /app
COPY . /app
RUN pip install flask
EXPOSE 5000
CMD ["python3", "server/app.py"]