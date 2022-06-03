# WillNFT image unique-maker with Spark docker

## Design docker compose

```
version: '3'
services:
  spark-master:
    image: dathoc/spark-master
    container_name: spark-master
    ports:
      - "8080:8080"
      - "7077:7077"
    environment:
      - INIT_DAEMON_STEP=setup_spark
  spark-worker-1:
    image: dathoc/spark-worker
    container_name: spark-worker-1
    depends_on:
      - spark-master
    ports:
      - "8081:8081"
    environment:
      - "SPARK_MASTER=spark://spark-master:7077"
  spark-worker-2:
    image: dathoc/spark-worker
    container_name: spark-worker-2
    depends_on:
      - spark-master
    ports:
      - "8082:8081"
    environment:
      - "SPARK_MASTER=spark://spark-master:7077"
  spark-history-server:
      image: dathoc/spark-history
      container_name: spark-history-server
      depends_on:
        - spark-master
      ports:
        - "18081:18081"
      volumes:
        - /tmp/spark-events-local:/tmp/spark-events
```
## Running docker, build job, submit job, view job status
```
//download spark-3.2.0-bin-hadoop3.2.tgz (~300mb at https://archive.apache.org/dist/spark/spark-3.2.0/), then put it in the base folder
//build base
git clone <this>
cd dathoc-spark
sudo chmod +x build.sh
./build.sh

//up all
cd dathoc-spark
docker network create dathoc-spark-net
docker-compose up -d

//then: making things to submit job
//build job: from project, build jar file
//edit volumes each master, worker; update and bind jar path
//edit submit/submit.sh script, adapt with jar class name, jar path
//submit job to cluster
docker-compose up -d spark-submit

//view status job on sparkmaster
http://localhost:8080/

//if failed, check submit status
docker logs -f <submit container id>

//remove failed container id
docker rm -f <submit container id>
//re-edit jar, re-edit submit.sh, then do submit job to cluster again

//run a more worker to extend workers
docker run --name spark-worker-1 --link spark-master:spark-master -d dathoc/spark-worker
```

## Kubernetes deployment
```

kubectl apply -f k8s-spark-cluster.yaml

//This will setup a Spark standalone cluster with one master and a worker on every available node using the default namespace and resources. The master is reachable in the same namespace at `spark://spark-master:7077`.
It will also setup a headless service so spark clients can be reachable from the workers using hostname `spark-client`.

//Then to use `spark-shell` issue

kubectl run spark-base --rm -it --labels="app=spark-client" --image dathoc-spark/spark-base -- bash ./spark/bin/spark-shell --master spark://spark-master:7077 --conf spark.driver.host=spark-client

//To use `spark-submit` issue for example
kubectl run spark-base --rm -it --labels="app=spark-client" --image dathoc-spark/spark-base -- bash ./spark/bin/spark-submit --class CLASS_TO_RUN --master spark://spark-master:7077 --deploy-mode client --conf spark.driver.host=spark-client URL_TO_YOUR_APP

//You can use your own image packed with Spark and your application but when deployed it must be reachable from the workers.
//One way to achieve this is by creating a headless service for your pod and then use `--conf spark.driver.host=YOUR_HEADLESS_SERVICE` whenever you submit your application.
```