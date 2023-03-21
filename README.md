# Megaventory-API

![Language](https://img.shields.io/badge/Language-Typescript-blue)

This source code is developed in Typescript at the base of the MVC (Model-View-Controller) model. His goal is to use the API of Megaventory and make different request in the back. It can currently add customers, products, suppliers and inventory location, I wasn't able to create a relationship between product and client/supplier yet.

## Installation
To use this source code you need a [Megaventory](https://www.megaventory.com) account. Once you log in, complete the set-up (making sure to enable Orders) and then, under your profile generate a new APIKEY.
After generating your key, clone the source code and create a file ". env" and place your key as is in the directory:
```
APIKEY: <Your APIKEY>
```
Lastly, you will need to build the dependencies of the code, for that you must have to install NodeJS(v18.15.0) and npm(v9.5.0) in your system.
```sh
npm install
tsc
```
You will be able to test and run the code with node like this :
```
node build/index.js
```
