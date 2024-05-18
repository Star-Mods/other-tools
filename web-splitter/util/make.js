import * as SCParser from "./../../parser/index.js";

SCParser.SCGame.directories.mods = `C:\\Program Files (x86)\\StarCraft II\\mods\\all-races-mods`

async function run({core,mods,output}){

    let mod = await SCParser.createMod({core,mods})
    mod.index();
    for(let entity of mod.entities){
        if(entity.$$relations?.length) {
            entity.relations = [...new Set(entity.$$relations.map(r => [r.namespace,r.link].join(".")))]
        }
        if(entity.$$references?.length){
            entity.references =  [...new Set(entity.$$references.filter(r=> r.path).map(r => [r.target.$$namespace,r.target.id].join(".")))]
        }
    }
    mod.removeCore()
//load the list of available icons
    mod.readImages('./../web-assets/icons')
//check entities icons and use the available ones
    mod.checkImages()
//add actor data to units
    mod.resolveUnitActors()

    for(let unit of mod.catalogs.unit){
        unit.Icon = unit.$actor?.UnitIcon || unit.$actor?.Wireframe?.Image?.[0]
    }

    SCParser.config.binaryFolder = 'C:\\Program Files (x86)\\StarCraft II\\TOOLS\\parser\\binary'
    await mod.write( 'C:\\Program Files (x86)\\StarCraft II\\TOOLS\\splitter\\data\\' + output, {
        scopes: ["catalogs","locales"],
        format: "json"
    })
}

// await run({
//     core: [],
//     mods: [
//         '$mods/builtin/Core',
//     ],
//     output: 'Core.json'
// })

// await run({
//     core: [
//         '$mods/builtin/Core',
//     ],
//     mods: [
//         '$mods/dependencies/Base',
//     ],
//     output: 'Base.json'
// })

// await run({
//     core: [
//         '$mods/builtin/Core',
//         '$mods/dependencies/Base',
//     ],
//     mods: [
//         '$mods/dependencies/VoidMulti',
//     ],
//     output: 'VoidMulti.json'
// })
await run({
    core: [
        '$mods/builtin/Core',
        '$mods/dependencies/Base',
        '$mods/dependencies/VoidMulti',
    ],
    mods: [
        '$mods/dependencies/Campaigns',
    ],
    output: 'Campaigns.json'
})