<template>

  <!-- the demo root element -->
  <ul id="demo">
    <tree-item v-if="data.Core"      class="item" :item="data.Core"></tree-item>
    <tree-item v-if="data.Base"      class="item" :item="data.Base"></tree-item>
    <tree-item v-if="data.VoidMulti" class="item" :item="data.VoidMulti"></tree-item>
    <tree-item v-if="data.Campaigns" class="item" :item="data.Campaigns"></tree-item>
  </ul>



<!--  <ul class="vtl-options-filters">-->
<!--    <template v-for="(unit,i) of data.catalogs.unit" :key="i">-->
<!--      <li :title="unit.name || unit.id">-->
<!--        {{unit.id}}-->
<!--      </li>-->
<!--    </template>-->
<!--  </ul>-->
<!--  <tree-item class="item"-->
<!--             :item="data.Core"-->
<!--             @make-folder="makeFolder"-->
<!--             @add-item="addItem"-->
<!--  ></tree-item>-->

</template>

<script>
    import {reactive} from "vue";
    import axios from 'axios';
    import TreeItem from "@/TreeItem.vue";


    export default {
        name: 'UsersComponent',
        components: {TreeItem},
        methods: {
            makeFolder: function(item) {
              Vue.set(item, "children", []);
              this.addItem(item);
            },
            addItem: function(item) {
              item.children.push({
                name: "new stuff"
              });
            },
            getTreeData(name,data){
              let catalogsArray = []
              for(let catalog in data.catalogs){

                let icon =  `ui-editoricon-data_types_${catalog}s`
                switch (catalog){
                  case 'race':
                    icon = 'ui_coop_ingame_attackwaves_zerg'
                    break
                  case 'behavior':
                    icon = 'btn-ability-zeratul-stalker-phasebattery'
                    break
                  case 'alert':
                    icon = 'btn-ability-zeratul-avatarofessence-devolutionwave'
                    break
                  case 'targetfind':
                    icon = 'btn-ability-zeratul-disruptor-clusternova'
                    break
                  case 'targetsort':
                    icon = 'btn-ability-zeratul-sentry-eclipseprotocol'
                    break
                  case 'requirementnode':
                    icon = 'btn-unit-protoss-zeratulartifact1'
                    break
                  case 'soundexclusivity':
                    icon = 'ui-editoricon-data_types_sounds'
                    break
                  case 'accumulator':
                    icon = 'btn-ability-zeratul-chargedcrystal-psionicwinds'
                    break
                  case 'tactical':
                    icon = 'btn-ability-hornerhan-fleethyperjump'
                    break
                  case 'abil':
                    icon = 'btn-zeratul-stalker-rangedblink'
                    break
                }
                catalogsArray.push({
                  name: catalog,
                  icon,
                  children: data.catalogs[catalog].map(u => ({
                    name: u.id,
                    icon: u.Icon,
                    data: u,
                    children: []
                  }))
                })
              }
              return {
                name,
                children: catalogsArray
              }
            },
        },
        created() {
            axios.get('./data/Core.json').then(res => {
              this.data['Core'] = this.getTreeData("Core",res.data)
            })
            axios.get('./data/Base.json').then(res => {
              this.data['Base'] = this.getTreeData("Base",res.data)
            })
            axios.get('./data/VoidMulti.json').then(res => {
              this.data['VoidMulti']= this.getTreeData("Void Multi Mod",res.data)
            })
            axios.get('./data/Campaigns.json').then(res => {
              this.data['Campaigns']= this.getTreeData("Campaigns",res.data)
            })
        },
        data () {
            return reactive({
                data: {},
                voidMulti:null
            })
        }
    }
</script>

<style>
ul{
  list-style: none;
  text-align: left;
  border: 1px solid #ffffff26;
  padding: 0;
  margin: 0;
}
li{
  padding-left: 5px;
}
li:not(:last-child){
  border-bottom: 1px solid #ffffff26;
}
</style>