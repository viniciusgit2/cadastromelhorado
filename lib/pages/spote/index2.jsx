import { search, searchartist, searchplaylist } from "./main";
import { getalbum, getalbumtracks, getalbums } from "./album";
import { url } from "./config";
export default class index2 {
constructor(options){
this.url=options.url||url
this.token=options.token||token
}
 request(url){
return fetch(url)

}

};
//search, searchartist, searchplaylist,
//getalbum, getalbumtracks, getalbums
