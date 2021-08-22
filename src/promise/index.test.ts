import * as index from "./index"
// @ponicode
describe("index.ready", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.ready()
        }
    
        expect(callFunction).not.toThrow()
    })
})
