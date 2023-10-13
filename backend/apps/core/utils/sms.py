import json
# from pprint import pprint
from urllib.request import Request, urlopen

# import requests


token = """
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjgxOCwicm9sZSI6InVzZXIiLCJkYXRhIjp7ImlkIjo4MTgsIm5hbWUiOiJcdTA0MWVcdTA0
MWVcdTA0MWUgTW9uZGF5IExhYnMgQWNhZGVteSIsImVtYWlsIjoic2hha2lyb3Yuc2FpZHJhdnNoYW5AZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJhc
GlfdG9rZW4iOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsInNtc19hcGlfbG9naW4iOiJlc2tpejIiLCJzbXNfYXBpX3Bhc3N3b3JkIjoiZSQkayF6IiwidX
pfcHJpY2UiOjUwLCJiYWxhbmNlIjozMDAwMDAsImlzX3ZpcCI6MCwiaG9zdCI6InNlcnZlcjEiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNC0yMFQwNjo0Nzo
0MS4wMDAwMDBaIiwidXBkYXRlZF9hdCI6IjIwMjItMDQtMjBUMDY6NDg6MDcuMDAwMDAwWiJ9LCJpYXQiOjE2NTA0NDA4OTYsImV4cCI6MTY1MzAzMjg5
Nn0.-dFTBD3kLK9Lk3ff1uEvXeA4vaA2mjug4Wyw4YSDXtk
""".encode('UTF-8')


headers = {
    'Authorization': f'Bearer {token}',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

SEND_BATCH = "https://notify.eskiz.uz/api/message/sms/send-batch"


def send_batch(messages):
    data = {
        "messages": [
            {"user_sms_id": "sms1", "to": 998913106622, "text": "test sms"},
            {"user_sms_id": "sms2", "to": 998919213370, "text": "test sms"}
        ],
        "from": "4546",
        "dispatch_id": 123
    }

    # response = requests.request(method='post', url=SEND_BATCH, headers=headers, data=json.dumps(data))
    # pprint(response.text)

    req = Request(SEND_BATCH)
    req.add_header('Content-Type', 'application/json')

    response = urlopen(req, json.dumps(data))
