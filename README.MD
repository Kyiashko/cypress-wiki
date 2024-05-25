
## Installing

- `npm install` within the root directory


## Running Test

- To run the tests, run next command in command line: 
     - To execute tests in no-headless mode: 
        ```
        npx cypress open --env username=Dk0008,password=Test12345
        ```

    - To run tests in headless mode:
        ```
        npx cypress run --env username=Dk0008,password=Test12345
        ```

### baseUrl
To check baseUrl - open cypress.config.ts file in project root folder.


### Test user credentials
For testing use my test user credentials:
 - username: d.kyiashko@gmail.com
 - pass: 1114567890Kyi@shko

Credentials must be set as env variables.

 ### Reporter
For my automation framework, I'm using cypress-mochawesome-reporter.
 With this reporter, we have the opportunity to generate HTML and JSON reports. Also, we can insert reports videos or screenshots, create charts etc. This reporter is so flexible.
