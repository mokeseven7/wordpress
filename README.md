# APG Team CDK Infra For Wordpress

This repo contains the CDK constructs to create the cloudformation required for a wordpress site. 

## Infra Diagram
Comming Soon

## Requirements 
* Node 14.x 
* AWS CDK - version 1.8 or higher
* Typescript instaled globally 

* Optional ts-node installed globally, otherwise will be run with npx.
## Installation 

This guide walks you through the steps of setting up the project from scrach, if you want to get to coding right awawy, skip ahead to the coding section.

Start by creating a working directory, and initilailzing the cdk 

```
mkdir wordpress-stack && cd wordpress-stack && ckd init -l typescript
```


> This guide walks you through the steps of setting up the project from scrach, if you want to get to coding right awawy, skip ahead to the coding section



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
