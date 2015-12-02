## This is a webhook template for the RISD Media Group

When you create a new webhook site, the first time you open the CMS, it will ask you if you want to start from scratch, or use a template.  
Use the .zip file of this repo as the template.  
Once the file is imported, `wh deploy` to see the changes in the CMS.


Due to certain restrictions of the process, or the lack of knowledge of the process, there is one extra step that needs to be done after importing the template into your site  

In pages/cms.html,  
after the line `<link rel="stylesheet" href="http://cms.webhook.com/{{ cmsVersion }}/assets/app.min.css">`  
add the line `<link rel="stylesheet" href="/static/css/cms-custom.css"/>`
