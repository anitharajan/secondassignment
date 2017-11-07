exports.home=function(req,res){
  res.render('home',{title:'IncredibleIndia',
                    headline:'Slide to see the beauty of Incredible India'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;

    if(cityName==='tamilnadu'){
       title="Tamilnadu";
       heading="Tamilnadu: Where you can find tradition";
    }
    else if(cityName==='kerela'){
       title="Kerela";
       heading="Kerela: Where you can feel the nature";
    }
    else if(cityName==='karnataka'){
       title="Karnataka";
       heading="Karnataka: High tech hub known for its shopping, business & nightlife";
    }
    else if(cityName==='maharashtra'){
       title="Maharashtra";
       heading="Maharashtra: Holds the heart of India";
    }
    else if(cityName==='uttarpradesh'){
       title="Uttar Pradesh";
       heading="Uttar Pradesh: Most populous state in India";
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount});
  }
