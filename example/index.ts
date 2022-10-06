import * as Types from '@sinclair/typebox'
// export type IntersectReduce<I extends unknown, T extends readonly any[]> = T extends [infer A, ...infer B] ? IntersectReduce<I & A, B> : I extends object ? I : {}

// // note: rename to IntersectStatic<T, P> in next minor release
// export type IntersectEvaluate<T extends readonly TSchema[], P extends unknown[]> = { [K in keyof T]: T[K] extends TSchema ? Static<T[K], P> : never }

// export type IntersectProperties<T extends readonly TObject[]> = {
//   [K in keyof T]: T[K] extends TObject<infer P> ? P : {}
// }

// export interface TIntersect<T extends TObject[] = TObject[]> extends TObject {
//   static: IntersectReduce<unknown, IntersectEvaluate<T, this['params']>>
//   properties: IntersectReduce<unknown, IntersectProperties<T>>
// }

export interface Intersect2<T extends Types.TSchema[]> extends Types.TSchema {
  [Types.Kind]: 'Intersect2'
  static: Types.IntersectReduce<unknown, Types.IntersectEvaluate<T, this['params']>>
  allOf: [...T]
  unevaluatedProperties?: boolean
}

export class TypeBuilder extends Types.TypeBuilder {
  public Intersect2<T extends Types.TSchema[]>(allOf: [...T], options: Types.SchemaOptions = {}): Intersect2<T> {
    return this.Create({ ...options, [Types.Kind]: 'Intersect2', allOf })
  }
}

const Type = new TypeBuilder()

const A = Type.Object({ a: Type.Number() })
const B = Type.Object({ b: Type.Number() })
const C = Type.Object({ c: Type.Number() })
const D = Type.Object({ d: Type.Number() })

const E = Type.String()
// const F = Type.Object({ f: Type.Number() })
// const G = Type.Object({ g: Type.Number() })
// const H = Type.Object({ h: Type.Number() })

const I = Type.Intersect2([
  Type.Union([A, B]),
  Type.Union([C, D, E])
])

function Evaluate<T extends Types.TSchema>(schema: T) {

}

console.log(JSON.stringify(I, null, 2))


