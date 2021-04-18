import { IncomingMessage, ServerResponse } from "node:http";
import * as fs from 'fs';

// const fs = require('fs');
const records = fs.readFileSync('db.json', 'utf8');

const getHomeRouteHandler = (req:IncomingMessage, res:ServerResponse) => {
    res.end(`Welocome to my server`);
}

const getBookListHandler = (req:IncomingMessage, res:ServerResponse) => {
    if(records)
        res.end(records);
    else
        res.end(`Data Not Found`)
}

const getBookDetailHandler =(req:IncomingMessage, res:ServerResponse) => {
    let parts = req.url?.split('/');
    var data = JSON.parse(records);
    console.log(`Record Index: ${+parts![parts!.length-1]}`);
    res.end(JSON.stringify(data['Book'][+parts![parts!.length - 1]-1]));
}

const getNotFoundHandler =(req:IncomingMessage, res:ServerResponse) =>{
    res.end(`NOT FOUND : ${req.url}`);
}

const searchSpecific = (searchString:URLSearchParams)=> {
    var data = JSON.parse(records)["books"];
    if(searchString.has("id")){
        for (let i = 0; i < data.length; i++) {
            if(data[i]._id == searchString.get("id"))
                return JSON.stringify(data[i]);
        }
    }
    /*else if(searchString.has("title")){
        var dummy:any = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].title.includes(searchString.get("title")))
                dummy.push(data[i]) 
        }
        return JSON.stringify(dummy);
    }*/
    else if(searchString.has("author")){
        var dummy:any = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].author.includes(searchString.get('author')))
                dummy.get(data[i]);
        }
        return JSON.stringify(dummy);
    }
    else if(searchString.has('price')){
        var dummy:any = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].price === searchString.get('price'))
                dummy.push(data[i]);
        }
        return JSON.stringify(dummy);
    }
    else if(searchString.has('min') && searchString.has('max')){
        var dummy:any = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].price >= searchString.get('min')! && data[i].price <= searchString.get('max')!)
                dummy.push(data[i]);
        }
        return JSON.stringify(dummy);
    }
    else
        return `Invalid Search String`;
}

const getSearchHandler = (req:IncomingMessage, res:ServerResponse) => {
    // console.log(req.url.substring(7));
    var searchString = new URLSearchParams(req.url?.substring(7));
    console.log(searchString);
    res.end(searchSpecific(searchString));

}


export const get_handler = (req :IncomingMessage, res : ServerResponse) => {
    console.log(`Handling ${req.method} method`);
    if (req.url === '/')
        return getHomeRouteHandler(req, res);
    else if(req.url === '/books')
        return getBookListHandler(req, res);
    else if(req.url && req.url.length>1 && req.url.indexOf('/books')===0){
        if(req.url.indexOf('/?') === 6)
            return getSearchHandler(req, res);
        else{
            // console.log('here actually');
            return getBookDetailHandler(req, res);
        }
    }
    else
        return getNotFoundHandler(req, res);
}
