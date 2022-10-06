import { TypeGuard } from '@sinclair/typebox/guard'
import { Type } from '@sinclair/typebox'
import { Assert } from '../assert/index'

describe('type/guard/TIntersect', () => {
  it('should guard for TIntersect', () => {
    const R = TypeGuard.TIntersect(
      Type.Intersect([
        Type.Object({
          x: Type.Number(),
        }),
        Type.Object({
          y: Type.Number(),
        }),
      ]),
    )
    Assert.equal(R, true)
  })
  it('should not guard for TIntersect', () => {
    const R = TypeGuard.TIntersect(null)
    Assert.equal(R, false)
  })
  it('should guard for TIntersect with invalid $id', () => {
    const R = TypeGuard.TIntersect(
      // @ts-ignore
      Type.Intersect(
        [
          Type.Object({
            x: Type.Number(),
          }),
          Type.Object({
            y: Type.Number(),
          }),
        ],
        {
          // @ts-ignore
          $id: 1,
        },
      ),
    )
    Assert.equal(R, false)
  })
  it('should not guard for TIntersect with invalid variant', () => {
    const R = TypeGuard.TIntersect(
      Type.Intersect([
        Type.Object({
          x: Type.Number(),
        }),
        {} as any,
      ]),
    )
    Assert.equal(R, false)
  })

  it('should not guard for TIntersect with invalid object variant', () => {
    const R = TypeGuard.TIntersect(
      Type.Intersect([
        Type.Object({
          x: Type.Number(),
        }),
        Type.Object({
          y: {} as any,
        }),
      ]),
    )
    Assert.equal(R, false)
  })
})
