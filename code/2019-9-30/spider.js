const cheerio = require("cheerio");

const $ = cheerio.load("<ul><li>li node1</li></ul>");
// $("h1").text("hello node");
$("ul").append("<li>li node2</li>");

$("li").ench(function(index,el){
    console.log($(this).text());
})

console.log($.html());