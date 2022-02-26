import { ReversePipe } from './reverse.pipe';
describe('Component: reverse',()=>{
 it('should create reverse pipe',()=>{
     let reversePipe  = new ReversePipe();
     expect(reversePipe.transform('hello')).toEqual('olleh')
 })
});