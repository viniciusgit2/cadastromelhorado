import { url } from "./config";
export default class spote {
  constructor(options) {
    this.url = options.url || url;
    this.token = options.token;
  }

}