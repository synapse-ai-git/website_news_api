
# News_API for Synapse-ai

Details of news from website NDTV and Livescience in json formate ..


## Installation

Install news_api with npm

After clone the link

follow as below

```bash
npm install
```
    
It will install all the depencences and required files and module.

After installing the module.




## Deployment

To deploy this news_api project type as below.

```bash
  node index.js
```
Now the local server starts at port 5000

Type 

```bash
http://127.0.0.1:5000/api/all
```
In your broswer to get the response.



## Documentation

Complete Working Of my Api.

### Main page

```bash
http://127.0.0.1:5000/api/all
```

It will give the details of keywords AI,ML,computer Vision in json formate.

Json Response.
```json
[
    0:{
        // first website
        "ls_news":[
            {
                //Artificial 
                "AI":[
                    {
                        //article
                        0:[
                            "title":"article tilte",
                            "link":"link to the orginal website",
                            "description":"description about the website",
                            "img":"image link for the article",
                        ],
                        // Each contain 20 article
                    }
                ],
                // mechine learing
                "ML":[
                    {

                    }
                ],
                // computer Vision
                "CV":[
                    {

                    }
                ],
            }
        ],

        "NDTV_news":[
            // same details
            // Each contain 30 article
        ]
    }
]
```

### Main page 2

```bash
http://127.0.0.1:5000/api/all2
```


It will give the details of keywords GA,NLP,RL in json formate.

Json Response.

```json
[
    0:{
        // first website
        "ls_news":[
            {
                //genitic 
                "GA":[
                    {
                        //article
                        0:[
                            "title":"article tilte",
                            "link":"link to the orginal website",
                            "description":"description about the website",
                            "img":"image link for the article",
                        ],
                        // each contain 20 article
                    }
                ],
                //  natural lang proc
                "NLP":[
                    {

                    }
                ],
                // rainfor learn
                "RL":[
                    {

                    }
                ],
            }
        ],

        "NDTV_news":[
            // same details
            // Each contain 20 article
        ]
    }
]
```

### Extra article for the main page

Here for <pageno> use any number

```bash
http://127.0.0.1:5000/api/all/<pageno>
```

it will give extra article in the main page

### Extra article for the main page  2

Here for <pageno> use any number

```bash
http://127.0.0.1:5000/api/all2/<pageno>
```

it will give extra article in the main page 2

### Search page

For extra Keyword article Use the search page.

Here Use your Keyword for <Keyword>.

```bash
http://127.0.0.1:5000/api/search/<Keyword>
```

Json Response.

```json
[{
"ls_news":[
            {
                //article
                0:[
                    "title":"article tilte",
                    "link":"link to the orginal website",
                    "description":"description about the website",
                    "img":"image link for the article",
                ],
                // contain 20 article
            }
        ],
"NDTV_news":[
            {
                //article
                0:[
                    "title":"article tilte",
                    "link":"link to the orginal website",
                    "description":"description about the website",
                    "img":"image link for the article",
                ],
                // contain 30 article
            }
        ],

}]
```

### Extra article for Search page

For extra article Use the Extra search page.

Here Use your Keyword for <Keyword>.

Use <pageno> for the next page.

```bash
http://127.0.0.1:5000/api/search/<Keyword>/<pageno>
```

Json Response.

```json
[{
"ls_news":[
            {
                //article
                0:[
                    "title":"article tilte",
                    "link":"link to the orginal website",
                    "description":"description about the website",
                    "img":"image link for the article",
                ],
                // contain 20 article
            }
        ],
"NDTV_news":[
            {
                //article
                0:[
                    "title":"article tilte",
                    "link":"link to the orginal website",
                    "description":"description about the website",
                    "img":"image link for the article",
                ],
                // contain 30 article
            }
        ],

}]
```



