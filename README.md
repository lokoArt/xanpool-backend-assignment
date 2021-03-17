# xanpool-backend-assignment

Please implement REST & GraphQ endpoints for currency rates. 

The service will have only one endpoint that will return the rate between pairs, you can use https://fixer.io/ as an oracle. 

You should also implement caching in order to avoid constant requests to fixer, the cache should be updated every 1 hour in the background. 
The following currencies should always be in cache and updated on a regular basis(1 hour)
1) USD-SGD, SGD-USD
2) USDK-HKD, HKD-USD

Other pairs could be updated upon requests. 

Preferable stack:
1) NodeJS, Typescript, Scala

The assiment will be evaluated based on:
1) Code quality
2) Test coverage
3) Following food practices 
4) Extensibility

