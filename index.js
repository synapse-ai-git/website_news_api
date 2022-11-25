import Express, { application } from 'express';
import * as Cheerio from 'cheerio';

// app
const app = Express();

// NVTV
const NDTV_url = 'https://www.ndtv.com/search?searchtext=';
const NDTV_api = `https://www.ndtv.com/page/topic-load-more/from/allnews/type/news/page/`; // ${page}/query/`+querry;

// Livescience
const LS_url = 'https://www.livescience.com/search'; // https://www.livescience.com/search/page/2?searchTerm=ai

// header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


// AI Detail
app.get('/api/all',(res,req)=>{


    const datas = async () => {
        var datas = [];
        var NDTV = {
            AI : [],
            ML : [],
            CV : [],

        };
        var LS = {
            AI : [],
            ML : [],
            CV : [],
        };


        // AI

        var querry = 'Artificial intelligence';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.AI.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.AI.push({
                title,img,link,description
            });
        });


        // ML

        querry = 'Machine learning';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.ML.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.ML.push({
                title,img,link,description
            });
        });



        // computer Vision

        querry = 'Computer Vision';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.CV.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.CV.push({
                title,img,link,description
            });
        });

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });

        res.res.send(datas);

    };
    datas();
});



// all page

app.get('/api/all/:page',(res,req)=>{
    
    var page = req.req.params.page;

    const data = async () => {

        var datas = [];
        var NDTV = {
            AI : [],
            ML : [],
            CV : [],

        };
        var LS = {
            AI : [],
            ML : [],
            CV : [],
        };


        // AI

        var querry = 'Artificial intelligence';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.AI.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.AI.push({
                title,img,link,description
            });
        });


        // ML

        querry = 'Machine learning';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.ML.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.ML.push({
                title,img,link,description
            });
        });

        // computer Vision

        querry = 'Computer Vision';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.CV.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.CV.push({
                title,img,link,description
            });
        });

        // final dump

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });

        res.res.send(datas);

    };
    data();

});


app.get('/api/all2',(res,req)=>{

    const data = async () => {

        var datas = [];
        var NDTV = {
            NLP : [],
            GA : [],
            RL : [],

        };
        var LS = {
            NLP : [],
            GA : [],
            RL : [],
        };

        //  Natural Language Processing

        var querry = ' Natural Language Processing';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.NLP.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.NLP.push({
                title,img,link,description
            });
        });


        // Genetic Algorithm

        querry = 'Genetic Algorithm';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.GA.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.GA.push({
                title,img,link,description
            });
        });

        //  Reinforcement Learning

        querry = 'Reinforcement Learning';

        var ndtv_url = NDTV_url+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.RL.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.RL.push({
                title,img,link,description
            });
        });

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });


        res.res.send(datas);

    };
    data();

});


app.get('/api/all2/:page',(res,req)=>{

    var page = req.req.params.page;

    const data = async () => {

        var datas = [];
        var NDTV = {
            NLP : [],
            GA : [],
            RL : [],

        };
        var LS = {
            NLP : [],
            GA : [],
            RL : [],
        };

        
        //  Natural Language Processing

        var querry = ' Natural Language Processing';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.NLP.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.NLP.push({
                title,img,link,description
            });
        });

        // Genetic Algorithm

        querry = 'Genetic Algorithm';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.GA.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.GA.push({
                title,img,link,description
            });
        });

        //  Reinforcement Learning

        querry = 'Reinforcement Learning';

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.RL.push({
                title,img,link,description
            });

        });

        // ls

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.RL.push({
                title,img,link,description
            });
        });

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });

        res.res.send(datas)
    };
    data();

});


// search
app.get('/api/search/:q',(res,req)=>{

    // querry
    var querry = req.req.params.q;

    const datas = async () => {
        var datas = [];
        var NDTV = [];
        var LS = [];

        var ndtv_url = NDTV_url+'ai '+querry;
        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        var $ = Cheerio.load(response);

        var news_list = $('#news_list > ul > li');

        news_list.each((i,el)=>{
            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}?searchTerm=ai ${querry}`;
        response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>{console.log(err)});
        $ = Cheerio.load(response);

        var data_list = $('#content > section > div.listingResults > div');

        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.push({
                title,img,link,description
            });
        });

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });

        res.res.send(datas);

    };
    datas();
});


// page for ai
// search page
app.get('/api/search/:q/:page',(res,req)=>{
    
    var querry = req.req.params.q;
    var page = req.req.params.page;

    const data = async () => {

        var datas = [];
        var NDTV = [];
        var LS = [];

        var ndtv_url = NDTV_api+`${page}/query/${querry}`;

        var response = await fetch(ndtv_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);

        var news_data = $('ul > li');

        news_data.each((i,el)=>{

            let img = $(el).find('span > img').attr("src");
            let title = $(el).find('div.src_itm-ttl > a').text().trim();
            let link = $(el).find('div.src_itm-ttl > a').attr('href');
            let description = $(el).find('div.src_itm-txt').text().trim();

            NDTV.push({
                title,img,link,description
            });

        });

        var ls_url = `${LS_url}/page/${page}?searchTerm=${querry}`;

        var response = await fetch(ls_url).then((res)=>res.text()).then((text)=>{return text}).catch((err)=>console.log(err));
        var $ = Cheerio.load(response);


        var data_list = $('#content > section > div.listingResults > div');


        data_list.each((i,el)=>{
            let link = $(el).find('a').attr('href');
            let img = $(el).find('picture > img').attr('src');
            let title = $(el).find('header > h3').text().trim();
            let description = $(el).find('div.content > p.synopsis').text().trim();

            LS.push({
                title,img,link,description
            });
        });

        datas.push({
            'NDTV_news':NDTV,'LS_news':LS
        });

        res.res.send(datas);

    };
    data();

});




// listern port
var port = 5000;
app.listen(port,()=>{
    console.log(`server is running in port : `,port)
});

