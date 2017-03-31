# DemocracyOS Extension Example

This is an example demonstrating how to extend DemocracyOS using Docker.

## Getting Started
1. Clone this repo
2. Make sure to have [Docker](https://www.docker.com/) installed on your machine.
3. Copy `docker/development.docker-compose.yml.example` to `docker/development.docker-compose.yml` and add your email to `STAFF` on the `environment:` section.
4. Run DemocracyOS with `docker-compose -f docker/development.docker-compose.yml up --build`
5. Go to [http://localhost:3000](http://localhost:3000)


### Refs
* If you want to know more about `docker-compose`, here's the docs: https://docs.docker.com/compose/
* On your `development.docker-compose.yml` you can configure your DemocracyOS instance using environment variables. Here's all the available options here: http://docs.democracyos.org/configuration.html

## Commands

```
# Spin up your development server with:
docker-compose -f docker/development.docker-compose.yml up
```

```
# If you change any dependency you have to Re-build your Docker image with:
docker-compose -f docker/development.docker-compose.yml up --build
```

```
# Enter to the running DemocracyOS VM with:

```

## Running on Production
TBD
