import express from "express"
import fs from "fs"
const stormRouter = express.Router();
// import  {YandexDisk} from 'yandex-disk'
// let hots = new YandexDisk('00000000000000000000000000000000000000000-0000000000000000');

function responseFile(srcPath, response, callback) {
    this._request('GET', srcPath, {'TE': 'chunked', 'Accept-Encoding': 'gzip'}, null, response, callback);
}

// middleware that is specific to this router
stormRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//
// stormRouter.get('/download/*', function(req, res){
//     let filename = "SC2/Commanders Conflict/"+ req.params[0]
//     res.setHeader('Content-disposition', 'attachment; filename=' + req.params[0] + ".SC2Mod");
//     responseFile(filename, res, ()=>{
//         console.log("Woohoo")
//     })
// });
stormRouter.get('/versions', function(req, res){
    const data = JSON.parse(fs.readFileSync("./data/Hots/versions.json", {encoding: 'utf-8'}))
    res.setHeader('content-type', 'text/plain');
    res.json(data)
});
// stormRouter.get('/files/ydisk', function(req, res){
//     const data = JSON.parse(fs.readFileSync("./data/Hots/info-disk.json", {encoding: 'utf-8'}))
//     res.setHeader('content-type', 'text/plain');
//     res.json(data)
// });
stormRouter.get('/files/gdrive', function(req, res){
    const data = JSON.parse(fs.readFileSync("./data/Hots/info-drive.json", {encoding: 'utf-8'}))
    res.setHeader('content-type', 'text/plain');
    res.json(data)
});
module.exports = {
    stormRouter
}


//https://drive.google.com/u/0/uc?id=000000000000000000000000-00000000&export=download&confirm=t&uuid=00000000-0000-0000-0000-000000000000
// AssetMods
// PatchNotes
// VersionControlMods
// Versions


