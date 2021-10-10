# Link Station Problem

Find the link station with the most power.

## Server installation
Install the dependencies and devDependencies to start the server:
```
cd ./server
yarn install
yarn run dev
```
The server is started locally and you can visit url `http://localhost:5555`

## Client installation
Open a new terminal tab and run the following commands to start the single-page app:
```
cd ./client
yarn install
yarn start
```
You can now access the site browsing to `http://localhost:3000`

## Testing Dockerfile
Build the docker image
```
docker build . -t tsnode
```

Build and run the container on port `5001`
```
docker run -it -d -p 5001:80 --name linkstationapp tsnode
```

Remove the container after testing
```
docker rm -f linkstationapp
```

## Test suit
Use the following command to run the test suit in server:
```
yarn test
```

## Zipping up file for deployment
Run the `build.sh` shell script and upload the zip file to AWS Elastic Beanstalk

## AWS Deployment
API URL: http://linkstationnode-env.eba-3jcv4kdk.eu-west-1.elasticbeanstalk.com

