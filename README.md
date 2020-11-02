This repository contains all code related to the bootcamp, Pre-assesment.

# Initial Setup
1. The lock handler function has been deployed as a lambda function on AWS using AWS Console. 
1. The endpoint of the deployment is 'https://rau06ga1d6.execute-api.eu-west-2.amazonaws.com/Prod/unlock-the-secret/{number}'

# How Does It Work?
1. The deployment URL listed in the setup returns a secret message based on the URL parameter.
1. If the parameter is a prime integer, the URL shows the secret message, otherwise it responds with an 'access request forbidden' message.
1. Example-1: GET 'https://rau06ga1d6.execute-api.eu-west-2.amazonaws.com/Prod/unlock-the-secret/857 will display the message
1. Example-2: GET 'https://rau06ga1d6.execute-api.eu-west-2.amazonaws.com/Prod/unlock-the-secret/6 will give an error.

