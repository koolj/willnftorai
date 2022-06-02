FROM dathoc/spark-base

LABEL maintainer="admin@dathoc.net"

ENV SPARK_MASTER_NAME spark-master
ENV SPARK_MASTER_PORT 7077

RUN mkdir /tmp/input
RUN mkdir /tmp/output
COPY submit.sh /

CMD ["/bin/bash", "/submit.sh"]
