import { observable, action, computed } from 'mobx';

class storeTest {

    @observable dataLoaded = true;

    @action changeDataState=()=>{
        if (this.dataLoaded===false) {
            console.log("-"+this.dataLoaded);
            this.dataLoaded=true;
        }else{
            console.log("+"+this.dataLoaded);
            this.dataLoaded=false;
        }
    }

    @action authenticate(){
        return new Promise(resolve => setTimeout(resolve, 1000)) 
      }
}

export default new storeTest();