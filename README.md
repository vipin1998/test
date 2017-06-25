Dear Sir 
I have developed one additional api for adding data in dataBase

1 post  localhost:8080/signup/user

    ##  Body of Request  ##
    firstName : users first name
    lastName : users last name
    email : users email id (should be unique for each user)
    role : role of user in company(Employee or Manager)
    password : password of user


    ## functions ##
    Add a user in database
    check the format of email and verify that email should be unique
    check the role entry should be a enum between Employee or Manager
    

    ## Security ##
    use Authorization header of post to basic Auth in postman
    username : vipin
    password : gravity
    this username and password should be given to users for making registeration process secure

2 post localhost:8080/employee/new_application

    ####  params  ####
    email : email of user used at signup
    password : password of user's account
    startDate : starting Date of user's leave
    endDate : ending Date of user's leave
    leaveType : reason of leave (marriage , health)

    ####  functions  ####
    create a new leave application on the behalf of user
    First Verify the user by their registerated email and password
    Also verify that the user Role should be Employee
    Manager is not allowed to make any leave application

    ## Security ##
    verification is already made

3 get localhost:8080/employee/leave_applications/email/password

    ####  params  ####
    email : email of user used at signup
    password : password of user's account
    example localhost:8080/employee/leave_applications/vipin@gmail.com/12345

    ####  functions  ####
    returns the list of applications made by the user

    ## Security ##
    verification is already made

4 get localhost:8080/manager/get_all_applications

    ####  functions  ####
    returns the list of applications made all the users

    ## Security ##
    use Authorization header of post to basic Auth in postman
    username : vipin
    password : 12345
    this username and password should be given to managers for making  process secure


5 put localhost:8080/manager/approve_application

    ####  params  ####
    id : _id of application in database

    ####  returns  ####
    approve the status of application if already approved otherwise report error

    ## Security ##
    use Authorization header of post to basic Auth in postman
    username : vipin
    password : 12345
    this username and password should be given to managers for making  process secure
