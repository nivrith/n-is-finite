import {
  nIsFinite
} from './../src/index';
import {
  expect
} from 'chai';

describe('nIsFinite', () => {

  it('Returns false for `NaN`', () => {
    expect(nIsFinite(NaN)).to.be.false;
  });

  it('Returns false for `Infinity`', () => {
    expect(nIsFinite(Infinity)).to.be.false;
  });

  it('Returns false for `1/0`', () => {
    expect(nIsFinite(1/0)).to.be.false;
  });

  it('Returns false for `NaN`', () => {
    expect(nIsFinite(NaN)).to.be.false;
  });

  it('Returns false for `-1/0`', () => {
    expect(nIsFinite(-1/0)).to.be.false;
  });

  it('Returns true for `5`', () => {
    expect(nIsFinite(5)).to.be.true;
  });

  it('Returns true for `-0`', () => {
    expect(nIsFinite(-0)).to.be.true;
  });

  it('Returns true for `0`', () => {
    expect(nIsFinite(0)).to.be.true;
  });

});
