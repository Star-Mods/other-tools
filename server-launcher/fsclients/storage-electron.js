import fs from "fs";
import * as storage from 'electron-json-storage'

export class EStorage {
  active = 0
  constructor(appname) {
    const WIN_APPDATA_DIRECTORY = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
    const spppath = `${WIN_APPDATA_DIRECTORY}/${appname}/data`
    fs.mkdirSync(spppath, {recursive: true});
    storage.setDataPath(spppath);
  }
  remove(key){
    return this.set(key,null)
  }
  get(value){

  }
  set(key,value){
    this.active++
    return new Promise((resolve,reject) =>{
      const callback = (error) => {
        this.active--
        if (error) reject(error)
        else resolve(true)
      }
      if(value === null || value === undefined){
        storage.remove(key,callback)
      }
      else{
        storage.set('path', value, callback);
      }
    })
  }
}
