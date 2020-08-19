# Finance
Proj to controll my spends make with **.net core** and **react**



# Frontend
this site was build with React

run go to /finance-front and use 

``
yarn start
``

**Login Screen**
![LoginScreen](/images/login.png)


**Register**
![LoginScreen](/images/Register.png)


# backend

This API was made in .net core

to run  go to backend and use:

``
dotnet  run
``

## **Routes**

**[POST] v1/User/login**

You can get a JWT token passing in body :

```
{
	"Email": "email@email.com",
	"Password": "Passw0d0B0l4Daum"
}
```

**[GET] v1/Spends/weeksummary**

Return a summary of spends in actual month by weeks Ex:

```
{
    "title": "starting in 01/08/2020 on week 31",
    "summary": [
        {
            "weekNumber": 34,
            "total": xxx.xx
        },
        {
            "weekNumber": 33,
            "total": xxx.xx
        },
        {
            "weekNumber": 32,
            "total": xxxx.xx
        },
        {
            "weekNumber": 31,
            "total": xx.xx
        }
    ],
    "monthTotal": xxxx.xx
}

```

**[POST] v1/Spends**

You can create a new spend on system with this route

```
{
    "Description": "I spend a lot of money with one thing there I don't need",
    "Name": "My spend",
    "CategoryId": 0,
    "Value": xxx.xx,
    "Date": "yyyy-mm-dd"
}

```

**[GET] v1/Spends/month?month=M&year=YYYY**

You can get all spend in a specific month passing month and year on query items.

