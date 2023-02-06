import { search, searchartist, searchplaylist } from "./main";
import { getalbum, getalbumtracks, getalbums } from "./album";
import { url } from "./config";
export default class spote {
constructor(options){
this.url=options.url||url
this.token=options.token||token
}
};
//search, searchartist, searchplaylist,
//getalbum, getalbumtracks, getalbums
