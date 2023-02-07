import { expect } from "chai";
import { search, searchalbum, searchartist } from "../main";
import Sinon from "sinon";
import { global } from "styled-jsx/css";
import fetch from "node-fetch";

const fetchedstub = sinon.stub(global, `fetch`);
fetch.stub.returnsPromise();
const artist = search();
describe(`spote`), () => {
    describe(`smoke-test`), () => {};
};

describe(`generic search`), () => {
   
    it(`should call fetch function,`());

    beforeEach(() => {
        fetch.stub = Sinon.stub(global, `fetch`);
    });
    promise = fetch.stub.returnsPromise();
    afterEach(() => {
        fetch.stub.restore();
    });
};
it(`should call fetched function`), () => {

    const artist = search();
    expect().to.have.been.calledOnce;
};
it(`should call fetch function the correct url`, () => {
    context(`passing type`), () => {
      sinon.stub(global, `fetch`);
        const artist = artist(`kkk`, `artist`);
        expect(fetch.stub).to.have.been.calledWith(`	https://api.spotify.com/v1/me`);
        fetch.stub.restore();
    };
    fetch.stub = sinon.stub(global, `fetch`);

    const album = album(`kkk`, `album`);
    expect(fetch.stub).to.have.been.calledWith(`	https://api.spotify.com/v1/me`);
    fetch.stub.restore();
});
context(`passing more types`), () => {

    const artistaandalbum = artistaandalbum(`kkk`, [`album`, `artist`]);
    expect(fetch.stub).to.have.been.calledWith(`	https://api.spotify.com/v1/me&type=artist,album`);
    fetch.stub.restore();
};
it(`should the json data from the promise`, () => {
    promise.resolve(`body:json`);
    const artist = search(`kkk`, `artist`);
    expect(artist.resolve).to.be.eql(`body:json`);
});
context(`passing more types`), () => {
    it(`should call fetch function`, () => {
        const artist = searchartist(`kkk`);
        expect(fetch.stub().to.have.been.calledWith(`	https://api.spotify.com/v1/me=artist`));
        context(`search album`), () => {
            const album = searchalbum(`kkkk`);
            expect(fetch.stub);
        };
        context(`search track`), () => {
            const track = searchtrack(`kkkk`);
            expect(fetch.stub);
        };
        context(`search playlist`), () => {
            const playlist = searchplaylist(`kkkk`);
            expect(fetch.stub);
        };
    });
};
