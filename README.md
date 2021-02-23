# CDK Infra For Wordpress

This repo contains the CDK constructs generate the required for a wordpress site. While there are a few manual steps, its assumed this would be executed via the ordcestration tool of your choice. When using CDK its important to remember, CDK is the "what", not the how.  


## Infra Diagram
Comming Soon

## Requirements 
* Node 14.x 
* AWS CDK - version 1.8 or higher
* Typescript instaled globally 

* Optional ts-node installed globally, otherwise will be run with npx.
## Installation 

This guide walks you through the steps of setting up the project from scrach, if you want to get to coding right awawy, skip ahead to the coding section.

Start by creating a working directory, and initilailzing the cdk, and opening the project in your text editor of choice.

```
mkdir wordpress-stack && cd wordpress-stack && ckd init -l typescript
```

Once you have the new intialized cdk app, install the required dependencies:

```js
npm install @aws-cdk/aws-ec2 @aws-cdk/aws-efs @aws-cdk/aws-lambda @aws-cdk/aws-rds @aws-cdk/aws-elasticloadbalancingv2 @aws-cdk/aws-elasticloadbalancingv2-targets @aws-cdk/aws-secretsmanager path
```




> Note - Running the command below with provision resource in AWS and you will be charged. 


1. Synthesize the stack, and inspect the resources that will be created.

```js
$ cdk synth
```

2. Deploy the application 

```js
$cdk deploy
```


....

5. Log into the filesystem, and mount the wordpress share

```
sudo mount -t efs <ebs_id_from_deploy>:/ /mnt/efs
```

6. Clone the wordpress source into the newly mounted drive:
```js
$ cd wordpress && git clone git@github.com:forhead/wordpressForLambda.git . 
```

# Configuration

Update the context variables held in the cdk.json file to suit your needs. 

Key/Value Defs:
```
<domainName> - Must Match Domain Name Set In Stack
```

```
<keyName> - the key pairs which used to login to the EC2
```

```
<dbPassword> - the rds password
```
