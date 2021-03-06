## Synopsis

A Node app that accesses NASA’s NeoWS API to retrieve nearest asteroids from earth based on today’s (or nearest days) data. 
When the user clicks the asteroid, a request is sent to retrieve the data.
The data is sorted and 6 tables are created, with corresponding information about the asteroids.
The 6 tables are ordered from nearest to furthest asteroid ‘Miss Distance’ on the corresponding day.
HTML markup is created from the data and served to the page.

## Goal

Include additional search filters so the user can find a specific asteroid, as well as more information about the asteroid itself.


## Deployment

The app is deployed on [openshift](https://openshift.redhat.com).
You can view it live [here](http://nearestasteroidapp-njsfield.rhcloud.com/)


To commit to openshifts repository on open shift’s repository, I use 

```
git push openshift HEAD
```

and GitHub I use

```
git push origin master
```

I opted to use openshift to host my app as unlike Heroku, it has no 'sleep time' per month.

## Contributors

Feel free to submit feedback, pull and & customise! 


