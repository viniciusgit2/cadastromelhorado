import { expect} from "chai"

import { url } from "../config"
import spote from "../testes/main.spec"

describe(`spote library`,function (){
it(`should create on instanced of spote`,()=>{
let spote=new spote({})
expect(spote).to.be.instanceOf(spote)

}
)
it(`should reserve as apí url as an option ,`,()=>{
  let spote=new spote({url:`blabla`})

}
)
expect(spote.url).to.be.equal(`blabla`)
}

)
it 
( ` should use the default url if provided  `,()=>{
let spote=new spote
expect(spote.url).to.be.equal(`  https://api.spotify.com/v1/albums/{id}`  )
}
)
it 
( ` should receive token as a option `,()=>{
let spote=new spote({token:`foo`})
}
)
expect(spote.token).to.be.equal(`foo`)
describe(`request method   `,()=>{
  it(` should have request method `,()=>{
    global.fetch = require(`node-fetch`);
chai.use(sinonChai);
let stubedfetch;
let promise;
describe(`album`), () => {
    beforeEach(() => {
        stubedfetch = Sinon.stub(global, `fetch`);
    });
    afterEach(() => {
        stubedfetch.restore();
    });
    let spote=new spote
    expect(spote).to.be.exist
}}
)})
it(`should fetch when request `)
let spote=new spote
token=`foo`
expect(spote.url)
  return fetch(url)//correspenderia exatamente ao request ate deixei comentado o request


