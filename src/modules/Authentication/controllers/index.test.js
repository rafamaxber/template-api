import {
  helthz
} from './'

describe('Authentication controller', () => {
  test('testando', () => {
    const req = {}
    const res = {
      send(text) {
        return text
      }
    }
    expect(helthz(req, res)).toEqual('Hello Module :D')
  })
})
