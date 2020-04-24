
# README

This repo contains the Privacy Portal Frontend

## Concourse Pipeline Installation

Requirements:

- Concourse Fly CLI (To download the fly cli, visit https://ci.platform.vwfs.io
  and click on the icon of the platform your device is running on)
- saml2aws-auto
- Sceptre
- Python and Pip (requirements for Sceptre)

## Steps

1. clone the repository
2. cd into repository

## Pipeline setup (from repository top level directory)

1. Setup or refresh a pipeline for the master branch:
  

2. Setup or refresh a pipeline for any branch other than master:


3. Destroy pipeline:
 

## Manual Deployment (from repository top level directory)

1. browse to
   [Concourse URL]
   [Concourse URL]
2. Click the plus icon in the top right hand corner and watch the magic happen

## Automated Deployment via CI

1. Triggered via `git push` into master branch
2. browse to
   [Concourse URL]


