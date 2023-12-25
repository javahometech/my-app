FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/myweb-0.0.9.war /app/
CMD ["java", "-jar", "myweb-0.0.9.war"]




