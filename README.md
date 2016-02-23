# This is a webhook template for the RISD Media Group

The template includes Bourbon, Neat, jQuery, jQuery UI, jQuery Sticky, Packery, and PictureFill. More modules to come.  
Follow the steps below and it should work.


## Create a Github repository

Start by creating a repo on GitHub under the *Media Account*  
*Do not* create a README file when prompted by Github  


## Create a webhook site

`cd` to the folder where you store your websites and  
```
wh create risd-repo-name
```  
*Use the mgdevelopers@risd.edu account credentials*  


## Initiate git in created site folder

`cd` to the newly created folder for the site and  
```
git init
git add -A
git commit -m "initial commit"
git remote add origin https://github.com/risd/repo-name.git
git push -u origin master
```


## Add yourself and others as team members

`wh serve` from the site folder  
This will open up a webpage at http://localhost:2002/  
Go to http://localhost:2002/cms  
Log in using the *mgdevelopers@risd.edu* credentials.  
In the terminal, deploy the site with `wh deploy`  
Under the *Team Members* tab, add yourself, and any other members to the site.  
Log out, and log back in as yourself.  


## Set up Git Flow in the repo

```
git flow init
git push --set-upstream origin develop
```


## Add the template to the site

When you create a new webhook site, the first time you open the CMS, it will ask you if you want to start from scratch, or use a template.  
Use the .zip file of this repo as the template.  
Once the file is imported, it currently will not redirect you to the CMS for some reason, and also will not recognize that you are using a template.  
The files from the template have been added though, so just click on **Start from scratch** and it should work.  
```
wh deploy
```
This will allow you to see the changes in the CMS.


## Additional steps

Due to certain restrictions of the process, or the lack of knowledge of the process, there is one extra step that needs to be done after importing the template into your site:  
In `pages/cms.html`,  
after the line
```
<link rel="stylesheet" href="http://cms.webhook.com/{{ cmsVersion }}/assets/app.min.css">
```  
add the line
```
<link rel="stylesheet" href="/static/css/cms-custom.css"/>
```


## Using Git Flow and Git

**To create a new feature branch:**  
make sure you're on develop  
```
git flow feature start featureName
git push --set-upstream origin feature/featureName
```

**To make commits**  
check what files you need to commit  
```
git status
```

add and commit the files  
```
git add -A
git status
git commit -m "summary

description"
git push
git status
```

**To finish feature**  
make sure you, and everyone else working on the branch has committed, and that all the conflicts are resolved  
```
git flow feature finish featureName
```

To access someone else's feature branch  
```
git pull
git fetch
git branch -a
```

This should give you a list of local branches in black, current branch in green and remote branches in red.
The feature branch you're looking for is most probably red.  
```
git checkout feature/featureName
```  
This should make the remote feature branch a local branch.

**If you can't see the branch anywhere for some reason, try**  
```
git ls-remote origin
git fetch
```

**If a finished featured branch is still showing up when you do `git branch -a`, try**  
```
git push origin :feature/featureName
git remote prune origin
```
