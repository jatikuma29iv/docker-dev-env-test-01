# Running in `OrbStack`

## Install `OrbStack`

Installed OrbStack using `homebrew`
```bash
$ brew install orbstack
```

## Launch `OrbStack`

### Kubernetes

click button to turn on `kubernetes`

#### Verify `kubernetes` is on
On `OrbStack` dashboard:

On command-line with `k9s`:

## Run demo

```bash
$ git clone git@github.com:jatikuma29iv/docker-dev-env-test-01.git
```

```bash
$ cd docker-dev-env-test-01
```

### build images
```bash
$ docker compose build
```

once builds are created you can see on dashboard


### run on `kubernetes`

```bash
$ kubectl apply -f deploy.yaml -n gql-federation-demo
```

confirm deployment by checking `services` and `pods`

#### service

#### pods


#### using cli

```bash
$ kubectl get pods -n gql-federation-demo
```

```bash
$ kubectl get svc -n gql-federation-demo
```

grab the ip of `gateway` service and open http://<ip>:4000/graphql
