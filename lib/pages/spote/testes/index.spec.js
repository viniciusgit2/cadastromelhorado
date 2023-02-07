import { expect } from "chai"
import spote from ".."
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
    let spote=new spote
    expect(spote).to.be.exist
}
)
}
)
