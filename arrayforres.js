var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);

    console.log(result[0].name);

//contries inside asia using filter function :-

    var asia =result.filter((e)=>e.region==="asia").map((e)=>e.name);
    console.log (asia);

//population less than 2lakhs using filter function :- 

    var popless =result.filter((e)=>e.population<=200000).map((e)=>e.name);  
        console.log (popless);
    
//name,flag and capital using foreach function :-

    result.forEach(e=>   {console.log(e.name);
                          console.log(e.capital);
                          console.log(e.flag);


    } )

//total population of countries using reduce method :-
   
    var popul =result.reduce((initial,e)=>initial+e.population,0);
    console.log (popul);

//country which use only USD

    var curren =result.filter((e)=>{
         for (var i=0;i<e.currencies.length;i++){

            if(e.currencies[i].code==="USD")
         {
                return true

         }}});
         console.log(curren);
};