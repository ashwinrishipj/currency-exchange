# currency-exchange

This assignment is to create a simple web page in which users can register, add the currency of their choice and monitor the rate of selected currencies against USD. 

> You can use any public API of your choice to load the rates as long as it includes current rates and historical rates
> E.g. https://exchangeratesapi.io/documentation/

## Technology Stack
* Front-End: React JS
* Back-End: Spring Boot or Django
* Database: PostgreSQL

### Front-End
The front-end application should include the following pages:
* Register
    * Sign up with username & password & confirm password
    * password validation: minimum 8 characters & alpha-numeric 
* login / logout (session handling)
* Currencies page
    * View list of currencies that user has added
    * ability to add, edit or remove currencies
    * base currency is USD
* landing page / Dashboard
    * a way to select different currencies added in previous page
    * show a chart with daily rates for the past 2-3 weeks
    * show current rates for all currencies in a separate section
* Unit tests & E2E tests
    
### Back-End
The back-end application should include the following features:
* Data models for DB
* User management
* Session handling
* Connection to a public API for exchange rates (e.g. https://exchangeratesapi.io/documentation/)
* Api endpoints to support FE:
    * User registration
    * User login
    * CRUD for currency
* Unit tests & E2E tests

> Note!
> 
> When adding a new currency we should call the public exchange rate API and load the historical rates for the past month
        
  
## Objectives
The main goal here is to assess your abilities to build a modern app from scratch. In the process of building this simple app you'll:
* Create a reliable API that supports the FE and links it up with the database
* Create data models that would be transformed into database tables
* Link up with a public RESTfull API
* Build a modern and responsive web application. 
> Although the focus wouldn't be on building a fancy web app with sophisticated UI design, it is expected to see a decent-looking app. Try to use  Bootstrap to easily incorporate the design aspect into your app
* Add unit test and E2E test to both apps

### Nice to have
* Unit test for both FE and BE
* DB migration in the BE


> ###Important Note!
> 
> * It should take you between 2-4 days to implement all features for this project. You can fork this repo and submit your code in your own Github account.
> * It is fine if you cannot complete all the mentioned features. Focus on delivering as much as you can in the most reliable and scalable way possible.
> * Try to break the app into different sections and submit the respective code in separate commits.
> * Your code is expected to be clean, readable and follow industry coding conventions.





----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  React Install Instructions:



    Open your terminal and then type

    $ git clone https://github.com/ashwinrishipj/currency-exchange

    This clones the repo

    cd into the new folder and type

    $ npm install

    This installs the required dependencies

    To run the React project.
    $ npm start

You are done! Now you can start editing the React project in the new folder that's created.



2. Spring Boot Install Instructions:






FINAL RESULTS:

Please provide documentation on how to setup the environment from scratch
1. ![image](https://user-images.githubusercontent.com/32618311/139492048-f7c9021e-fec3-42d0-883d-852b7d3f2adb.png)
2. ![image](https://user-images.githubusercontent.com/32618311/139492108-d2d7f821-5699-4812-aa40-dfb9caad4671.png)
3. Add currency:


![image](https://user-images.githubusercontent.com/32618311/139492246-9d89dfe2-6202-49fb-8485-95d2adb4dd09.png)

![image](https://user-images.githubusercontent.com/32618311/139492265-cb8f3a72-0f2f-4cf9-85c1-9255cd38d265.png)

![image](https://user-images.githubusercontent.com/32618311/139492276-a63c9409-ee8b-4d3b-948e-bb7dac35432a.png)

4. Manage Currencies

![image](https://user-images.githubusercontent.com/32618311/139492310-5fdc44fc-f3ae-4daa-982f-1142c3f8ae6d.png)

![image](https://user-images.githubusercontent.com/32618311/139492341-0080feca-8746-44a8-b170-437021fd5860.png)

![image](https://user-images.githubusercontent.com/32618311/139492348-5889d9d9-3529-4e9c-adc3-1032189a79dc.png)

![image](https://user-images.githubusercontent.com/32618311/139492362-fe801907-c897-4992-8565-23cda5adcea0.png)

5. Delete Currencies


![image](https://user-images.githubusercontent.com/32618311/139492409-fab501e2-c20b-43e7-95b7-28447309b60e.png)

![image](https://user-images.githubusercontent.com/32618311/139492421-50326277-620e-458c-8272-2c2fc9403d11.png)





