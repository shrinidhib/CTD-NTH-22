# NTH Platform CTD 2022

---

> ### **How to run the project**

#### Cloning Git Repository:
```
git clone https://github.com/credenz/CTD-NTH-22.git
cd CTD-NTH-22
```

#### Creating Virtual Enviornment:
```
virtualenv venv
```
#### Activating Virtual Env on Windows:
```
venv\Scripts\activate
```

#### Activating Virtual Env on Linux:
```
source venv/bin/activate
```

#### Installing Dependencies:
```
pip install -r requirements.txt
```
#### Run Python Development Server:
```
python manage.py runserver
```


> ### **API Endpoints**

| Endpoint    | Method      | Description |
| ----------- | ----------- | ----------- |
| /users      | GET         | Get List of the users. |
| /users      | POST        | Create User. |
| /users/{id}   | GET         | Get a perticular User. |




