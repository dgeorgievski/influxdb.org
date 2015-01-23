---
title: Building Dashboards for InfluxDB with Grafana
---

# Building Dashboards with Grafana

Grafana is a dashboarding tool modeled after Kibana. It was originally built for Graphite, but has since been updated to support InfluxDB. 

Integrating Grafana with InfluxDB, and building Dashboards is a straightforward process. Grafana has few requirements on the data store, InfluxDB in this case, and security in case Grafana and the data store are hosted in different domains

# Requirements

* Web Server
  Grafana is a JavaScript application. Any Web server would do. The choice of the Web server might be narrowed down if CORS requirements need to be satisfied.

* CORS (Cross Origin Resource Sharing)
  Normally cross-domain requests from a single Web page would be blocked by browsers. Because Grafana is a JavaScript application, executing in the browser, the HTTP calls to InfluxDB HTTP service originate in the browser, which might make CORS relevant if InfluxDB resides on some other domain. 

  If possuble place both InfluxDB and Grafana Web server on the same domain to eliminate CORS requirements alltogether.
Example. influxdb.example.com and grafana.example.com.

  Otherwise the following two options could assist with addressing CORS: They are both based on using a reverse proxy  such as Nginx in front of InfluxDB HTTP service. 
  * Nginx RP on the same domain as Grafana Web server. No need to implement CORS requirements.
  * Nginx RP resides on a different domain. In this case Nginx server requires additional settings to allow cross-domain requests from the Grafana client in the browser. See "Graphite server config" section under at http://grafana.org/docs/ for CORS examples for both Apache and Nginx.  
  
# Installation
* InfluxDB - Follow instructions from the project documentation.
* Grafana,  
  * Install a Web server, Nginx used in this case
  * Download Grafanana installation archive from http://grafana.org/download/, and unzip it in some location in the local file system. 
  ```
    cd /usr/share/nginx/
    unzip grafana-1.9.1.zip
    ln -s grafana-1.9.1/ grafana
  ```
# Cinfiguration 
* InfluXDB - Grafana database
  This database is required by Grafana to save dasboards states after changes have been made.
  Provided InfluxDB is running the Admin console could be accessed on the port 8083 (default).
  
  Create the following database and credentials:
  ```
  database: grafana
  user: grafana
  password: mypassword
  ```
  These settings are configurable, and will be needed when configuring Grafana application below.
   
* Nginx (Web Server for Grafana). The following simple server configuration is all that is needed to host Grafana
  
  ```
  #file: /etc/nginx/conf.d/grafana.conf
  server {
    listen       9080;
    server_name  *.example.com;
    location / {    
        root   grafana;
        index  index.html index.htm;
    }
  }
```
* Grafana
  * Edit config.js
  ```
  cd /usr/share/nginx/grafana
  cp config.sample.js config.js
  vim config.js
  ```
  
  * Configure data sources
    As a bare minimum Grafana will need one database to store the state of each of the created dashboards. Otherwise such changes would not survive the browser restart.
  
  * Add Grafana database:
    ```
    // InfluxDB example setup (the InfluxDB databases specified need to exist)
    datasources: {

     grafana: {
          type: 'influxdb',
          url: "http://influxdb.example.com:8086/db/grafana",
          username: 'grafana',
          password: 'mypassword',
          grafanaDB: true
        },
    ```
    
  *  Create a datasource for each new dashboard. 
     Don't forget creating the appropriate DB and credentials in InfluxDB first.
     ```
       my_app_dashboard: {
          type: 'influxdb',
          url: "http://influxdb.example.com:8086/db/my-app-db",
          username: 'my-app-user',
          password: 'mypassword',
        },

     ```
     Where: "my_app_dashboard" will serve as a data source for the new dashboard later in Grafana.
            You should use underscores instead of dashes. The dashes in the data source names raise errors in Grafana.
            "my-app-db" is the name of the InfluxDB database.
     
  * Restart the Web server, and create the new dasboard
  
# Creating new dasboards
  Consult Grafana documnenation for this purpose, as well, as InfluxDB documentation on its query syntax. 
  As a rule of thumb, If the query could be executed from InfluxDB Explore Data console, it could be executed from Grafana Dashboard as well.

# Things to keep in mind
  * Data aggregation in reports;
    Grafana queries aggregate results of qeries. In order to tune the dashboards, and sometime just to be able to see data, create a sufficient amount of data in case of testing the integration.

  * Time zones;
    The time settings are cruical to be able to display data in the time window covered by the dashboard. 
    Again, Grafana runs in a browser, and it will use the time-zone of the browser ie system on which the browser runs. If the monitored infrastructure/apps are in a different time zones, like EST vs UTC, it is recommended to
configure the host on which grafana Web server runs to use the same time zone like the users of Grafana. Little extra time might be required to find the correct settings.

   In my instance, after setting Grafana Web server host to ETS, I had to add timezoneOffset: "-0500" , to tell Grafana the data feed comes from UTC time zone.
   
  * CORS again;
    In cases you connect to a corporate network over VPN make sure both InfluxDB and Grafana domain names are FQDN. 
    Sometimes, the internall DNS server are not properly set-up for VPN connections. The easy workaround is to add InfluxDB and Grafana domains to the /etc/hosts file.

# Troubleshooting
  Use FireFox or Chrome development console to debug HTTP Graphana calls to InfluxDB HTTP service. The JS exceptions or HTTP erros caught there are probably all that is needed to resolve integration issues
