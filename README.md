# Building and Deploying a nodejs application to Docker and Azure App services using GitHub Action

This readme file explains all the processes I <br/>
employed in automating a CI/CD  workflow using <br/>
GitHub action and Azure devops<br/>

<br/>


## Requirements
1. GitHub Repo
2. Azure Account.

## Process Flow Chat
The following shows the process I followed to create CI workflow using GitHub actions 
to push an image to docker and Azure
1. Save your code to a GitHub repo
2. Click on actions and select create a workflow yourself 
3. Fill in the following yml file to ensure it has the following steps:
   -action/checkout.
   -Login to azure.
   -Docker login.
   -Build and test the application
   -Build docker image.
   -Push Docker image.
   -Build and deploy step to push to Azure
4. Add GitHub secrets to include the docker login credentials and the 
The azure authentication strategy.
5. Create a service principal to connect azure ad with GitHub
6. Commit the code to the master branch and the action is triggered automatically.
<br/>

NB: various actions for can be found at <a href="GitHub.com/azure/actions"> GitHub actions </a>
