# envri-fair-webservice
Simple Webservice as exercise 

### Team: 

Andrea Orfino, 
Teja Curk,
Magda Aljančič,
Yun Li.

### Mentor: 

Maria Johnsson 

## Task: 

You work for a research company. Your team was tasked by the CTO to come up with a proposal for the development of a webservice for FAIRness. Your team was asked to prepare a presentation on the data service you propose to build that illustrates all the steps of conceptualization, design and development that were followed in building the proposed service.

1. Examine the potential approaches and methodologies to webservices for data, choose the best one for your project and explain why 

2. Map the potential tools for development and related characteristics, choose the best one for your project and explain why 

3. Illustrate the potential security threats and your solutions 

4. Present all the steps that you followed to publish your proposed data service

What to have in mind: 
### FAIR principles 
(https://www.go-fair.org/fair-principles/)

1. (Meta)data are assigned a globally unique and persistent identifier
2. Data are described with rich metadata (defined by R1 below)
3. Metadata clearly and explicitly include the identifier of the data they describe
4. (Meta)data are registered or indexed in a searchable resource


## Work

1. Examine the potential approaches and methodologies to webservices for data, choose the best one for your project and explain why 

The goal is to build a software that will have a database with (meta)data about seismology. User (research or general public) can access the data. 

### Approach:
#### Server: software with the web-API with REST interface (remote produce call)
#### Client: could be a human with a browser or a machine with http client

Data (resource) oriented paradigm (GET, POST, PUT, DELETE)

Why? It is a standard approach for data that is available to everyone (everyone with the web browser can access the data)
 

2. Map the potential tools for development and related characteristics, choose the best one for your project and explain why 

Technology: Nodejs + ExpressJS
Availability: open source (OGS)
Pros: The code is concise, easy to use, reliable, well maintained and documented, big developers community, performance, scalability, automatically scanning for vulnerabilities
Database: PostgreSQL. 
Problems could arise: the computer server is not safe - you can choose instead  to use a cloud service.
Logging tool: Wiston

3. Illustrate the potential security threats and your solutions 

Threat: potential denial of the service: Solution: everyone can access our web-API with a token.

Approach for security threats: protect from SQL injection - pg npm package

Avoid over describing information (e.g. the errors, ..) while on production that will expose too much. 

Use https!!

Use only libraries already written (e.g. for token use JWT) for implementing the security features.


4. Present all the steps that you followed to publish your proposed data service

Step 1: create a repository GitHub that will contain all our codes.

Step 2: create a testing environment (if needed, install Nodejs, ExpressJS)
 on the local machine

Step 3: start developing the web service following the above recommendations (see point 2-3)

Step 4: test the produced code 

Step 5: publish the code online 
(step 3, 4 and 5 are repeated several times)


Step 6: deploy the application# envri-fair-webservice
