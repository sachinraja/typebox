import { Type } from '@sinclair/typebox'
import { TypeGuard } from '@sinclair/typebox/guard'
import * as Types from '@sinclair/typebox'

export namespace TypeEvaluator {
  export function Any(schema: Types.TAny) {}
  export function Array(schema: Types.TArray) {}
  export function Boolean(schema: Types.TBoolean) {}
  export function Constructor(schema: Types.TConstructor) {}
  export function Function(schema: Types.TFunction) {}
  export function Integer(schema: Types.TInteger) {}
  export function Literal(schema: Types.TLiteral) {}
  export function Null(schema: Types.TNull) {}
  export function Number(schema: Types.TNumber) {}
  export function Object(schema: Types.TObject) {}
  export function Promise(schema: Types.TPromise) {}
  export function Record(schema: Types.TRecord) {}
  export function Ref(schema: Types.TRef) {}
  export function Self(schema: Types.TSelf) {}
  export function String(schema: Types.TString) {}
  export function Tuple(schema: Types.TTuple) {}
  export function Undefined(schema: Types.TUndefined) {}
  export function Uint8Array(schema: Types.TUint8Array) {}
  export function Union(schema: Types.TUnion) {}
  export function Unknown(schema: Types.TUnknown) {}
  export function Void(schema: Types.TVoid) {}

  export function Evaluate<T extends Types.TSchema>(schema: Types.TSchema) {
    if (TypeGuard.TAny(schema)) {
      return Any(schema)
    } else if (TypeGuard.TArray(schema)) {
      return Array(schema)
    } else if (TypeGuard.TBoolean(schema)) {
      return Boolean(schema)
    } else if (TypeGuard.TConstructor(schema)) {
      return Constructor(schema)
    } else if (TypeGuard.TFunction(schema)) {
      return Function(schema)
    } else if (TypeGuard.TInteger(schema)) {
      return Integer(schema)
    } else if (TypeGuard.TLiteral(schema)) {
      return Literal(schema)
    } else if (TypeGuard.TNull(schema)) {
      return Null(schema)
    } else if (TypeGuard.TNumber(schema)) {
      return Number(schema)
    } else if (TypeGuard.TObject(schema)) {
      return Object(schema)
    } else if (TypeGuard.TPromise(schema)) {
      return Promise(schema)
    } else if (TypeGuard.TRecord(schema)) {
      return Record(schema)
    } else if (TypeGuard.TRef(schema)) {
      return Ref(schema)
    } else if (TypeGuard.TSelf(schema)) {
      return Self(schema)
    } else if (TypeGuard.TString(schema)) {
      return String(schema)
    } else if (TypeGuard.TTuple(schema)) {
      return Tuple(schema)
    } else if (TypeGuard.TUndefined(schema)) {
      return Undefined(schema)
    } else if (TypeGuard.TUint8Array(schema)) {
      return Uint8Array(schema)
    } else if (TypeGuard.TUnion(schema)) {
      return Union(schema)
    } else if (TypeGuard.TUnknown(schema)) {
      return Unknown(schema)
    } else if (TypeGuard.TVoid(schema)) {
      return Void(schema)
    } else {
      throw Error(`Structural: Unknown left operand '${left[Types.Kind]}'`)
    }
  }
}



const A = Type.Object({ a: Type.Number() })
const B = Type.Object({ b: Type.Number() })
const C = Type.Object({ c: Type.Number() })
const D = Type.Object({ d: Type.Number() })

const E = Type.String()
// const F = Type.Object({ f: Type.Number() })
// const G = Type.Object({ g: Type.Number() })
// const H = Type.Object({ h: Type.Number() })



const I = Type.Intersect([
  Type.Union([A, B]),
  Type.Union([Type.Number()])
])


type X = ({ a: number } | { b: number }) & number
type Y = { a?: number, b?: number } & number

console.log(JSON.stringify(I, null, 2))


