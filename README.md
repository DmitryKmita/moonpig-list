# While building this app I have used:
* ReactJS
* Create React App tool for building. I did eject the configuration though for scss integration, but then found out that in new versions of
create-react-app scss goes out of the box.
* Axios as HTTP Client as I love promises
* React Bootstrap for responsive design
* React Document Title for dynamic title setting


# Issues I faced:
* Because API endpoint does not allow CORS - I had to use extension in browser to "simulate" the header myself.

# What could I have done more/better:
* Back from product page could have led to page where customer was (adding hash on every new page, instead of just going to page 1)
* Obviously better design
* More functionality around product information. I tried to showcase to customer as much as possible, but there are definitely more things to
show to customer to make his experience better.
* Testing - I am not great at testing UI, I have used Jasmine before, but did not have time to showcase it. I am always using TDD when writing backend services though.
* SEO - I could have added Schema.org tags to improve SEO.

# How to run application:
* Clone the code
``` git clone git@github.com:DmitryKmita/moonpig-list.git ```
* Install dependencies
``` npm install ```
* Run the app
``` npm start ```
* Or build for production
``` npm run build ```