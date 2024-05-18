import {GDrive}   from './drive.js'
import {FSLocal}  from './local.js'
import {promisified as regedit} from "regedit";
import config from "./config.js";

export default class Installation {
  constructor(config){
  }
  async getInstallDirectory(){
    let sc2Key = 'HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\StarCraft II'
    const listResult = (await regedit.list(sc2Key))[sc2Key]
    if(!listResult.exists){
      await regedit.createKey(sc2Key)
      return ''
    }
    else{
      return listResult.values.InstallLocation.value
    }
  }
  async init (){
    // await sync(filesLocal,filesDrive)
    // await sync(filesDrive,filesLocal)

    let directory = await this.getInstallDirectory()

    // this.store = new EStorage("resurgense-of-the-storm")
    this.local = new FSLocal(`${directory}/Mods/Commanders Conflict`)
    this.drive = new GDrive(config.google)


    let list = await this.drive.listDeep()
    list
  }
  list (){
    return this.local.listDeep()
  }
}
