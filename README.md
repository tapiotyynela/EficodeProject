# Weatherapp

## Changes

We got this cool weatherapp project from Eficode that tells Helsinkis current weather with one icon. Pretty cool huh? But I decided to make things a littlebit more interesting. I modified the backend index.js file so that we got ALL Helsinkis weather data from api. In base project api returned only description, icon and couple other attributes. In my version we get all the cool stuff like windspeed, humidity, mist, ect. So I decided to pull some extra info from api and hide it to make things interesting. I coded this cool button below the icon that was in the base project. And by pressing that magical button my weatherapp 2.0 reveals some secrets about Helsinkis weather. By pressing the button app shows Windspeed, Temperature and the description of the weather instead of just the icon. Probably have to sell this one to Foreca. 

### Deployment to minikube

To you who have never deployed my cool app before. Here some important information. 

If you dont have kubernetes installed do these steps
 - curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg |sudoapt-key add -
 - sudo touch/etc/apt/sources.list.d/kubernetes.list
 - echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
 - sudo apt -get update
 - sudo apt -get install -y kubectl socat
 
 Now that you have kubernetes installed, you can start deploying.
 
 # To start the minikube dashboard run the following
 - sudo minikube start --vm-driver=none
 - sudo minikube dashboard
 - kubectl port-forward -n kubernetes-dashboard service/kubernetes-dashboard --address 0.0.0.0 7000:80
 
 Now you can access to minikube dashboard from localhost:7000
 
 # Actual deployment
 
 - kubectl run weatherapp --image=weatherapp:latest --image-pull-policy=Never
 - kubectl expose deployment weatherapp --type=NodePort --port 8000
 - Kubectl port-forward service/weatherapp --address 0.0.0.0 8000:8000
  
  Voila! Now your project is deployed! Backend running in localhost:9000 and Frontend in localhost:8000
 
