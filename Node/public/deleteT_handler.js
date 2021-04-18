import * as fs from 'fs';
// const fs = require('fs');
var records = fs.readFileSync('db.json', 'utf8');
const deleteBookDetailHandler = (req, res) => {
    var _a;
    let parts = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?');
    var data = JSON.parse(records)["Book"];
    data.splice(+parts[parts.length - 1] - 1, 1);
    res.end(JSON.stringify(data));
    // fs.writeFileSync(data);
};
const deleteBookListHandler = (req, res) => {
    res.end("You need to provide details for Deletion");
};
const deleteNotFoundHandler = (req, res) => {
    res.end(`Not Found ${req.url}`);
};
export const delete_handler = (req, res) => {
    console.log(`Handling ${req.method} method`);
    if (req.url && req.url.length > 1 && req.url.indexOf('/books') === 0)
        if (req.url.indexOf("/?") == 6)
            return deleteBookDetailHandler(req, res);
        else
            return deleteBookListHandler(req, res);
    else
        return deleteNotFoundHandler(req, res);
};
// module.exports.delete_handler = delete_handler;
