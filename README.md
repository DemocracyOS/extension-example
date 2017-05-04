# DemocracyOS Extension Example

This is an example demonstrating how to extend DemocracyOS using [Docker](https://www.docker.com/).

## Getting Started on development
1. Clone this repo
2. Make sure to have [Docker](https://www.docker.com/) installed on your machine.
3. Copy `docker/development.docker-compose.yml.example` to `docker/development.docker-compose.yml` and add your email to `STAFF` on the `environment:` section.
4. Run DemocracyOS with `docker-compose -f docker/development.docker-compose.yml up --build`
5. Go to [http://localhost:3000](http://localhost:3000)


### Refs
* If you want to know more about `docker-compose`, here's the docs: https://docs.docker.com/compose/
* On your `development.docker-compose.yml` you can configure your DemocracyOS instance using environment variables. All the available options are here: http://docs.democracyos.org/configuration.html
* The port `27017` is exposed so you can connect to mongo from your machine using any mongo client such as [Studio 3T](https://studio3t.com/).
* All the customized views/endpoints are located on the `/ext` folder. Following the same folders pattern as DemocracyOS/democracyos.
* New frontend builds, which allows you to use your custom frontend code, are defined [here](https://github.com/DemocracyOS/extension-example/blob/master/ext/lib/build/entries.json).

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
docker exec -it democracyos-dev bash
```

## Running on Production
Use as reference the repo [DemocracyOS/onpremises](https://github.com/DemocracyOS/onpremises). It uses Ansible for provisioning, and Docker Compose to run the server, there you will find more detailed documentation.
