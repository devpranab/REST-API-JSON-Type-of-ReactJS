# Rest API & Json Type

1. Client-Server Communication (HTTP)
- URL: www.something.com(Uniform Resource Locator)
- Browser(client/user)  - req/res message -  Server()
- HTTP - Hyper Text Transfer Protocol
 - https://www.something.com
 - GET/index.html HTTP/1.1
 - HTTP/1.1 200 OK
- developer.mozilla.org/en-US/docs/Web/HTTP/Messages
- developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- developer.mozilla.org/en-US/docs/Web/HTTP/Status
- websniffer.cc

2. REST API
- Representational state transfer(REST)
- Application1 - (communication) - Application2
- API-Application Programming Interface
- Rest Concept
 - Resource(Nouns): 
  - Any information provided by Rest API
  - URI (Uniform Resource Indicator)
  - URI Examples: http://www.something.com/books
  - URI Examples: http://www.something.com/books/2
 - Resource(Verbs):
  - Actions to be performed on resources
  - Perform CRUD operations
  - HTTP POST => CREATE
  - HTTP GET => READ
  - HTTP PUT => UPDATE
  - HTTP DELETE => DELETE
 - Representation:
  - How data is represented or returned to the client
  - JSON and XML
 - GET, POST, PUT, DELETE
 - GET http://www.something.com/books
 - GET http://www.something.com/books/4
 - POST http://www.something.com/books/ {JSON Object => author, bookName}
 - PUT http://www.something.com/books/5 {JSON Object => bookName}
 - DELETE http://www.something.com/books/5

- React App
 - front-end -req/res- back-end (RESTful API)

- REST != HTTP = Rest Api is api architect which follow Http cycle method

3. REST API Examples
- docs.github.com/en/rest/overview/resource-in-the-rest-api
 - $ curl https://api.github.com
 - https://api.github.com/users/{user}
 - jsonplaceholder.typicode.com/posts

4. Setting up your own REST API
- db.json - make rest api resource to db.json
- $ npm install json-server
- $ json-server db.json or $ json-server db.json --watch -p 3001

5. Using REST API from React App
- https://github.com/devpranab/REST-API-JSON-Type-of-ReactJS/commits/main  

6. Error Handling, POST, PUT, DELETE


7. Handling Responses using State