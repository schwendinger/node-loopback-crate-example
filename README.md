# Sample Application Loopback using crate.io

This is a tiny example application with the stack:

 - node.js backend
 - loopback framework
 - crate.io as a datastore
 - angularjs frontend


## How to install and run the example app

### Depedencies:

 - you need to have npm installed. checkout http://nodejs.org/

 - you need to run crate as a datastore.

How to install crate:

```bash
bash -c "$(curl -L try.crate.io)"
```

### install the project:

clone this repository and then run:

```bash
npm install loopback -g
npm install
```

### how to run

start crate.io. move the the directory of crate and run

```bash
bin/crate
```

run loopback application

```
slc run
```
