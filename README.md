# Project Title
**Queer Health Hub (QHH)**


<img src="./src/assets/logo/e5.png" width="100">


## Overview
Queer Health Hub is a local resource for 2SLGBTQIA++ people in the City of Toronto that aims to increase access to information, resources, and healthcare service providers.


Client Repo can be found [here](https://github.com/carlywilk/capstone.git)


## Features
Deployed website can be found [here]()


## Screenshots

## Tech Stack
**Server:**
- express
- nodemon
- cors
- dotenv
- knex


## Instructions & Installation

## Environment Variables
To run this project, you will need to add the following environment variables to your server-side .env file:
- PORT=
- DB_HOST=
- DB_NAME=
- DB_USER=
- DB_PASSWORD=


## Run Locally 
1. Clone the project repositories:
```
git clone https://github.com/carlywilk/capstone-api.git
```

2. Go to the project directory:
```
cd carly-wilk-capstone-api
```
 
3. Install dependencies:
```
npm install
```

4. Start the servers:
```
npm start
```


### API Reference

#### Get all resources
```http
  GET /api/resources
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get one resource
```http
  GET /api/resources/${id}
```
| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| `api_key` | `string` | **Required**. Your API key   |
|           |          | **Required**. ID of resource |

#### Get all services types for one resource
```http
  GET /api/resources/${id}/services
```
| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| `api_key` | `string` | **Required**. Your API key   |
|           |          | **Required**. ID of resource |



## Insights and Lessons Learned



## Next Steps and Future Directions
