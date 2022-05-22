FROM python:3.10.4

WORKDIR /server

COPY . .

RUN pip install dist/Citati_Common-0.0.0-py3-none-any.whl

EXPOSE 8000

CMD ["python3", "website/__main__.py"]