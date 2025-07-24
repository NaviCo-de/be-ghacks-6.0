
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SanggarTari
 * 
 */
export type SanggarTari = $Result.DefaultSelection<Prisma.$SanggarTariPayload>
/**
 * Model ContactPerson
 * 
 */
export type ContactPerson = $Result.DefaultSelection<Prisma.$ContactPersonPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanggarTari`: Exposes CRUD operations for the **SanggarTari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SanggarTaris
    * const sanggarTaris = await prisma.sanggarTari.findMany()
    * ```
    */
  get sanggarTari(): Prisma.SanggarTariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactPerson`: Exposes CRUD operations for the **ContactPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactPeople
    * const contactPeople = await prisma.contactPerson.findMany()
    * ```
    */
  get contactPerson(): Prisma.ContactPersonDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SanggarTari: 'SanggarTari',
    ContactPerson: 'ContactPerson'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sanggarTari" | "contactPerson"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SanggarTari: {
        payload: Prisma.$SanggarTariPayload<ExtArgs>
        fields: Prisma.SanggarTariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanggarTariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanggarTariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          findFirst: {
            args: Prisma.SanggarTariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanggarTariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          findMany: {
            args: Prisma.SanggarTariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>[]
          }
          create: {
            args: Prisma.SanggarTariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          createMany: {
            args: Prisma.SanggarTariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SanggarTariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>[]
          }
          delete: {
            args: Prisma.SanggarTariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          update: {
            args: Prisma.SanggarTariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          deleteMany: {
            args: Prisma.SanggarTariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanggarTariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SanggarTariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>[]
          }
          upsert: {
            args: Prisma.SanggarTariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanggarTariPayload>
          }
          aggregate: {
            args: Prisma.SanggarTariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanggarTari>
          }
          groupBy: {
            args: Prisma.SanggarTariGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanggarTariGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanggarTariCountArgs<ExtArgs>
            result: $Utils.Optional<SanggarTariCountAggregateOutputType> | number
          }
        }
      }
      ContactPerson: {
        payload: Prisma.$ContactPersonPayload<ExtArgs>
        fields: Prisma.ContactPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findFirst: {
            args: Prisma.ContactPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          findMany: {
            args: Prisma.ContactPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          create: {
            args: Prisma.ContactPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          createMany: {
            args: Prisma.ContactPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactPersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          delete: {
            args: Prisma.ContactPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          update: {
            args: Prisma.ContactPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          deleteMany: {
            args: Prisma.ContactPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactPersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>[]
          }
          upsert: {
            args: Prisma.ContactPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPersonPayload>
          }
          aggregate: {
            args: Prisma.ContactPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactPerson>
          }
          groupBy: {
            args: Prisma.ContactPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactPersonCountArgs<ExtArgs>
            result: $Utils.Optional<ContactPersonCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sanggarTari?: SanggarTariOmit
    contactPerson?: ContactPersonOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model SanggarTari
   */

  export type AggregateSanggarTari = {
    _count: SanggarTariCountAggregateOutputType | null
    _min: SanggarTariMinAggregateOutputType | null
    _max: SanggarTariMaxAggregateOutputType | null
  }

  export type SanggarTariMinAggregateOutputType = {
    id: string | null
    nama: string | null
    tahunBerdiri: string | null
    lokasi: string | null
    deskripsi: string | null
    foto: string | null
    contactPersonId: string | null
  }

  export type SanggarTariMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    tahunBerdiri: string | null
    lokasi: string | null
    deskripsi: string | null
    foto: string | null
    contactPersonId: string | null
  }

  export type SanggarTariCountAggregateOutputType = {
    id: number
    nama: number
    tahunBerdiri: number
    lokasi: number
    deskripsi: number
    foto: number
    contactPersonId: number
    _all: number
  }


  export type SanggarTariMinAggregateInputType = {
    id?: true
    nama?: true
    tahunBerdiri?: true
    lokasi?: true
    deskripsi?: true
    foto?: true
    contactPersonId?: true
  }

  export type SanggarTariMaxAggregateInputType = {
    id?: true
    nama?: true
    tahunBerdiri?: true
    lokasi?: true
    deskripsi?: true
    foto?: true
    contactPersonId?: true
  }

  export type SanggarTariCountAggregateInputType = {
    id?: true
    nama?: true
    tahunBerdiri?: true
    lokasi?: true
    deskripsi?: true
    foto?: true
    contactPersonId?: true
    _all?: true
  }

  export type SanggarTariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanggarTari to aggregate.
     */
    where?: SanggarTariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanggarTaris to fetch.
     */
    orderBy?: SanggarTariOrderByWithRelationInput | SanggarTariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanggarTariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanggarTaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanggarTaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SanggarTaris
    **/
    _count?: true | SanggarTariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanggarTariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanggarTariMaxAggregateInputType
  }

  export type GetSanggarTariAggregateType<T extends SanggarTariAggregateArgs> = {
        [P in keyof T & keyof AggregateSanggarTari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanggarTari[P]>
      : GetScalarType<T[P], AggregateSanggarTari[P]>
  }




  export type SanggarTariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanggarTariWhereInput
    orderBy?: SanggarTariOrderByWithAggregationInput | SanggarTariOrderByWithAggregationInput[]
    by: SanggarTariScalarFieldEnum[] | SanggarTariScalarFieldEnum
    having?: SanggarTariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanggarTariCountAggregateInputType | true
    _min?: SanggarTariMinAggregateInputType
    _max?: SanggarTariMaxAggregateInputType
  }

  export type SanggarTariGroupByOutputType = {
    id: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi: string | null
    foto: string | null
    contactPersonId: string | null
    _count: SanggarTariCountAggregateOutputType | null
    _min: SanggarTariMinAggregateOutputType | null
    _max: SanggarTariMaxAggregateOutputType | null
  }

  type GetSanggarTariGroupByPayload<T extends SanggarTariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanggarTariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanggarTariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanggarTariGroupByOutputType[P]>
            : GetScalarType<T[P], SanggarTariGroupByOutputType[P]>
        }
      >
    >


  export type SanggarTariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tahunBerdiri?: boolean
    lokasi?: boolean
    deskripsi?: boolean
    foto?: boolean
    contactPersonId?: boolean
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }, ExtArgs["result"]["sanggarTari"]>

  export type SanggarTariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tahunBerdiri?: boolean
    lokasi?: boolean
    deskripsi?: boolean
    foto?: boolean
    contactPersonId?: boolean
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }, ExtArgs["result"]["sanggarTari"]>

  export type SanggarTariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tahunBerdiri?: boolean
    lokasi?: boolean
    deskripsi?: boolean
    foto?: boolean
    contactPersonId?: boolean
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }, ExtArgs["result"]["sanggarTari"]>

  export type SanggarTariSelectScalar = {
    id?: boolean
    nama?: boolean
    tahunBerdiri?: boolean
    lokasi?: boolean
    deskripsi?: boolean
    foto?: boolean
    contactPersonId?: boolean
  }

  export type SanggarTariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "tahunBerdiri" | "lokasi" | "deskripsi" | "foto" | "contactPersonId", ExtArgs["result"]["sanggarTari"]>
  export type SanggarTariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }
  export type SanggarTariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }
  export type SanggarTariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactPerson?: boolean | SanggarTari$contactPersonArgs<ExtArgs>
  }

  export type $SanggarTariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SanggarTari"
    objects: {
      contactPerson: Prisma.$ContactPersonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      tahunBerdiri: string
      lokasi: string
      deskripsi: string | null
      foto: string | null
      contactPersonId: string | null
    }, ExtArgs["result"]["sanggarTari"]>
    composites: {}
  }

  type SanggarTariGetPayload<S extends boolean | null | undefined | SanggarTariDefaultArgs> = $Result.GetResult<Prisma.$SanggarTariPayload, S>

  type SanggarTariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanggarTariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanggarTariCountAggregateInputType | true
    }

  export interface SanggarTariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SanggarTari'], meta: { name: 'SanggarTari' } }
    /**
     * Find zero or one SanggarTari that matches the filter.
     * @param {SanggarTariFindUniqueArgs} args - Arguments to find a SanggarTari
     * @example
     * // Get one SanggarTari
     * const sanggarTari = await prisma.sanggarTari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanggarTariFindUniqueArgs>(args: SelectSubset<T, SanggarTariFindUniqueArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SanggarTari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanggarTariFindUniqueOrThrowArgs} args - Arguments to find a SanggarTari
     * @example
     * // Get one SanggarTari
     * const sanggarTari = await prisma.sanggarTari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanggarTariFindUniqueOrThrowArgs>(args: SelectSubset<T, SanggarTariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanggarTari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariFindFirstArgs} args - Arguments to find a SanggarTari
     * @example
     * // Get one SanggarTari
     * const sanggarTari = await prisma.sanggarTari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanggarTariFindFirstArgs>(args?: SelectSubset<T, SanggarTariFindFirstArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanggarTari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariFindFirstOrThrowArgs} args - Arguments to find a SanggarTari
     * @example
     * // Get one SanggarTari
     * const sanggarTari = await prisma.sanggarTari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanggarTariFindFirstOrThrowArgs>(args?: SelectSubset<T, SanggarTariFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SanggarTaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SanggarTaris
     * const sanggarTaris = await prisma.sanggarTari.findMany()
     * 
     * // Get first 10 SanggarTaris
     * const sanggarTaris = await prisma.sanggarTari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanggarTariWithIdOnly = await prisma.sanggarTari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanggarTariFindManyArgs>(args?: SelectSubset<T, SanggarTariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SanggarTari.
     * @param {SanggarTariCreateArgs} args - Arguments to create a SanggarTari.
     * @example
     * // Create one SanggarTari
     * const SanggarTari = await prisma.sanggarTari.create({
     *   data: {
     *     // ... data to create a SanggarTari
     *   }
     * })
     * 
     */
    create<T extends SanggarTariCreateArgs>(args: SelectSubset<T, SanggarTariCreateArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SanggarTaris.
     * @param {SanggarTariCreateManyArgs} args - Arguments to create many SanggarTaris.
     * @example
     * // Create many SanggarTaris
     * const sanggarTari = await prisma.sanggarTari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanggarTariCreateManyArgs>(args?: SelectSubset<T, SanggarTariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SanggarTaris and returns the data saved in the database.
     * @param {SanggarTariCreateManyAndReturnArgs} args - Arguments to create many SanggarTaris.
     * @example
     * // Create many SanggarTaris
     * const sanggarTari = await prisma.sanggarTari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SanggarTaris and only return the `id`
     * const sanggarTariWithIdOnly = await prisma.sanggarTari.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SanggarTariCreateManyAndReturnArgs>(args?: SelectSubset<T, SanggarTariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SanggarTari.
     * @param {SanggarTariDeleteArgs} args - Arguments to delete one SanggarTari.
     * @example
     * // Delete one SanggarTari
     * const SanggarTari = await prisma.sanggarTari.delete({
     *   where: {
     *     // ... filter to delete one SanggarTari
     *   }
     * })
     * 
     */
    delete<T extends SanggarTariDeleteArgs>(args: SelectSubset<T, SanggarTariDeleteArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SanggarTari.
     * @param {SanggarTariUpdateArgs} args - Arguments to update one SanggarTari.
     * @example
     * // Update one SanggarTari
     * const sanggarTari = await prisma.sanggarTari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanggarTariUpdateArgs>(args: SelectSubset<T, SanggarTariUpdateArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SanggarTaris.
     * @param {SanggarTariDeleteManyArgs} args - Arguments to filter SanggarTaris to delete.
     * @example
     * // Delete a few SanggarTaris
     * const { count } = await prisma.sanggarTari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanggarTariDeleteManyArgs>(args?: SelectSubset<T, SanggarTariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanggarTaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SanggarTaris
     * const sanggarTari = await prisma.sanggarTari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanggarTariUpdateManyArgs>(args: SelectSubset<T, SanggarTariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanggarTaris and returns the data updated in the database.
     * @param {SanggarTariUpdateManyAndReturnArgs} args - Arguments to update many SanggarTaris.
     * @example
     * // Update many SanggarTaris
     * const sanggarTari = await prisma.sanggarTari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SanggarTaris and only return the `id`
     * const sanggarTariWithIdOnly = await prisma.sanggarTari.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SanggarTariUpdateManyAndReturnArgs>(args: SelectSubset<T, SanggarTariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SanggarTari.
     * @param {SanggarTariUpsertArgs} args - Arguments to update or create a SanggarTari.
     * @example
     * // Update or create a SanggarTari
     * const sanggarTari = await prisma.sanggarTari.upsert({
     *   create: {
     *     // ... data to create a SanggarTari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SanggarTari we want to update
     *   }
     * })
     */
    upsert<T extends SanggarTariUpsertArgs>(args: SelectSubset<T, SanggarTariUpsertArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SanggarTaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariCountArgs} args - Arguments to filter SanggarTaris to count.
     * @example
     * // Count the number of SanggarTaris
     * const count = await prisma.sanggarTari.count({
     *   where: {
     *     // ... the filter for the SanggarTaris we want to count
     *   }
     * })
    **/
    count<T extends SanggarTariCountArgs>(
      args?: Subset<T, SanggarTariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanggarTariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SanggarTari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SanggarTariAggregateArgs>(args: Subset<T, SanggarTariAggregateArgs>): Prisma.PrismaPromise<GetSanggarTariAggregateType<T>>

    /**
     * Group by SanggarTari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanggarTariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SanggarTariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanggarTariGroupByArgs['orderBy'] }
        : { orderBy?: SanggarTariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SanggarTariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanggarTariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SanggarTari model
   */
  readonly fields: SanggarTariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SanggarTari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanggarTariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactPerson<T extends SanggarTari$contactPersonArgs<ExtArgs> = {}>(args?: Subset<T, SanggarTari$contactPersonArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SanggarTari model
   */
  interface SanggarTariFieldRefs {
    readonly id: FieldRef<"SanggarTari", 'String'>
    readonly nama: FieldRef<"SanggarTari", 'String'>
    readonly tahunBerdiri: FieldRef<"SanggarTari", 'String'>
    readonly lokasi: FieldRef<"SanggarTari", 'String'>
    readonly deskripsi: FieldRef<"SanggarTari", 'String'>
    readonly foto: FieldRef<"SanggarTari", 'String'>
    readonly contactPersonId: FieldRef<"SanggarTari", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SanggarTari findUnique
   */
  export type SanggarTariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter, which SanggarTari to fetch.
     */
    where: SanggarTariWhereUniqueInput
  }

  /**
   * SanggarTari findUniqueOrThrow
   */
  export type SanggarTariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter, which SanggarTari to fetch.
     */
    where: SanggarTariWhereUniqueInput
  }

  /**
   * SanggarTari findFirst
   */
  export type SanggarTariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter, which SanggarTari to fetch.
     */
    where?: SanggarTariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanggarTaris to fetch.
     */
    orderBy?: SanggarTariOrderByWithRelationInput | SanggarTariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanggarTaris.
     */
    cursor?: SanggarTariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanggarTaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanggarTaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanggarTaris.
     */
    distinct?: SanggarTariScalarFieldEnum | SanggarTariScalarFieldEnum[]
  }

  /**
   * SanggarTari findFirstOrThrow
   */
  export type SanggarTariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter, which SanggarTari to fetch.
     */
    where?: SanggarTariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanggarTaris to fetch.
     */
    orderBy?: SanggarTariOrderByWithRelationInput | SanggarTariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanggarTaris.
     */
    cursor?: SanggarTariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanggarTaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanggarTaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanggarTaris.
     */
    distinct?: SanggarTariScalarFieldEnum | SanggarTariScalarFieldEnum[]
  }

  /**
   * SanggarTari findMany
   */
  export type SanggarTariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter, which SanggarTaris to fetch.
     */
    where?: SanggarTariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanggarTaris to fetch.
     */
    orderBy?: SanggarTariOrderByWithRelationInput | SanggarTariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SanggarTaris.
     */
    cursor?: SanggarTariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanggarTaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanggarTaris.
     */
    skip?: number
    distinct?: SanggarTariScalarFieldEnum | SanggarTariScalarFieldEnum[]
  }

  /**
   * SanggarTari create
   */
  export type SanggarTariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * The data needed to create a SanggarTari.
     */
    data: XOR<SanggarTariCreateInput, SanggarTariUncheckedCreateInput>
  }

  /**
   * SanggarTari createMany
   */
  export type SanggarTariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SanggarTaris.
     */
    data: SanggarTariCreateManyInput | SanggarTariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanggarTari createManyAndReturn
   */
  export type SanggarTariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * The data used to create many SanggarTaris.
     */
    data: SanggarTariCreateManyInput | SanggarTariCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SanggarTari update
   */
  export type SanggarTariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * The data needed to update a SanggarTari.
     */
    data: XOR<SanggarTariUpdateInput, SanggarTariUncheckedUpdateInput>
    /**
     * Choose, which SanggarTari to update.
     */
    where: SanggarTariWhereUniqueInput
  }

  /**
   * SanggarTari updateMany
   */
  export type SanggarTariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SanggarTaris.
     */
    data: XOR<SanggarTariUpdateManyMutationInput, SanggarTariUncheckedUpdateManyInput>
    /**
     * Filter which SanggarTaris to update
     */
    where?: SanggarTariWhereInput
    /**
     * Limit how many SanggarTaris to update.
     */
    limit?: number
  }

  /**
   * SanggarTari updateManyAndReturn
   */
  export type SanggarTariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * The data used to update SanggarTaris.
     */
    data: XOR<SanggarTariUpdateManyMutationInput, SanggarTariUncheckedUpdateManyInput>
    /**
     * Filter which SanggarTaris to update
     */
    where?: SanggarTariWhereInput
    /**
     * Limit how many SanggarTaris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SanggarTari upsert
   */
  export type SanggarTariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * The filter to search for the SanggarTari to update in case it exists.
     */
    where: SanggarTariWhereUniqueInput
    /**
     * In case the SanggarTari found by the `where` argument doesn't exist, create a new SanggarTari with this data.
     */
    create: XOR<SanggarTariCreateInput, SanggarTariUncheckedCreateInput>
    /**
     * In case the SanggarTari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanggarTariUpdateInput, SanggarTariUncheckedUpdateInput>
  }

  /**
   * SanggarTari delete
   */
  export type SanggarTariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    /**
     * Filter which SanggarTari to delete.
     */
    where: SanggarTariWhereUniqueInput
  }

  /**
   * SanggarTari deleteMany
   */
  export type SanggarTariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanggarTaris to delete
     */
    where?: SanggarTariWhereInput
    /**
     * Limit how many SanggarTaris to delete.
     */
    limit?: number
  }

  /**
   * SanggarTari.contactPerson
   */
  export type SanggarTari$contactPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    where?: ContactPersonWhereInput
  }

  /**
   * SanggarTari without action
   */
  export type SanggarTariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
  }


  /**
   * Model ContactPerson
   */

  export type AggregateContactPerson = {
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  export type ContactPersonMinAggregateOutputType = {
    id: string | null
    nama: string | null
    nomor: string | null
    email: string | null
  }

  export type ContactPersonMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    nomor: string | null
    email: string | null
  }

  export type ContactPersonCountAggregateOutputType = {
    id: number
    nama: number
    nomor: number
    email: number
    _all: number
  }


  export type ContactPersonMinAggregateInputType = {
    id?: true
    nama?: true
    nomor?: true
    email?: true
  }

  export type ContactPersonMaxAggregateInputType = {
    id?: true
    nama?: true
    nomor?: true
    email?: true
  }

  export type ContactPersonCountAggregateInputType = {
    id?: true
    nama?: true
    nomor?: true
    email?: true
    _all?: true
  }

  export type ContactPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPerson to aggregate.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactPeople
    **/
    _count?: true | ContactPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactPersonMaxAggregateInputType
  }

  export type GetContactPersonAggregateType<T extends ContactPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateContactPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactPerson[P]>
      : GetScalarType<T[P], AggregateContactPerson[P]>
  }




  export type ContactPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactPersonWhereInput
    orderBy?: ContactPersonOrderByWithAggregationInput | ContactPersonOrderByWithAggregationInput[]
    by: ContactPersonScalarFieldEnum[] | ContactPersonScalarFieldEnum
    having?: ContactPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactPersonCountAggregateInputType | true
    _min?: ContactPersonMinAggregateInputType
    _max?: ContactPersonMaxAggregateInputType
  }

  export type ContactPersonGroupByOutputType = {
    id: string
    nama: string
    nomor: string
    email: string | null
    _count: ContactPersonCountAggregateOutputType | null
    _min: ContactPersonMinAggregateOutputType | null
    _max: ContactPersonMaxAggregateOutputType | null
  }

  type GetContactPersonGroupByPayload<T extends ContactPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
            : GetScalarType<T[P], ContactPersonGroupByOutputType[P]>
        }
      >
    >


  export type ContactPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nomor?: boolean
    email?: boolean
    sanggar?: boolean | ContactPerson$sanggarArgs<ExtArgs>
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nomor?: boolean
    email?: boolean
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nomor?: boolean
    email?: boolean
  }, ExtArgs["result"]["contactPerson"]>

  export type ContactPersonSelectScalar = {
    id?: boolean
    nama?: boolean
    nomor?: boolean
    email?: boolean
  }

  export type ContactPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nomor" | "email", ExtArgs["result"]["contactPerson"]>
  export type ContactPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sanggar?: boolean | ContactPerson$sanggarArgs<ExtArgs>
  }
  export type ContactPersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactPersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactPerson"
    objects: {
      sanggar: Prisma.$SanggarTariPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nomor: string
      email: string | null
    }, ExtArgs["result"]["contactPerson"]>
    composites: {}
  }

  type ContactPersonGetPayload<S extends boolean | null | undefined | ContactPersonDefaultArgs> = $Result.GetResult<Prisma.$ContactPersonPayload, S>

  type ContactPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactPersonCountAggregateInputType | true
    }

  export interface ContactPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactPerson'], meta: { name: 'ContactPerson' } }
    /**
     * Find zero or one ContactPerson that matches the filter.
     * @param {ContactPersonFindUniqueArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactPersonFindUniqueArgs>(args: SelectSubset<T, ContactPersonFindUniqueArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactPersonFindUniqueOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactPersonFindFirstArgs>(args?: SelectSubset<T, ContactPersonFindFirstArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindFirstOrThrowArgs} args - Arguments to find a ContactPerson
     * @example
     * // Get one ContactPerson
     * const contactPerson = await prisma.contactPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany()
     * 
     * // Get first 10 ContactPeople
     * const contactPeople = await prisma.contactPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactPersonFindManyArgs>(args?: SelectSubset<T, ContactPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactPerson.
     * @param {ContactPersonCreateArgs} args - Arguments to create a ContactPerson.
     * @example
     * // Create one ContactPerson
     * const ContactPerson = await prisma.contactPerson.create({
     *   data: {
     *     // ... data to create a ContactPerson
     *   }
     * })
     * 
     */
    create<T extends ContactPersonCreateArgs>(args: SelectSubset<T, ContactPersonCreateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactPeople.
     * @param {ContactPersonCreateManyArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactPersonCreateManyArgs>(args?: SelectSubset<T, ContactPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactPeople and returns the data saved in the database.
     * @param {ContactPersonCreateManyAndReturnArgs} args - Arguments to create many ContactPeople.
     * @example
     * // Create many ContactPeople
     * const contactPerson = await prisma.contactPerson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactPersonCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactPersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactPerson.
     * @param {ContactPersonDeleteArgs} args - Arguments to delete one ContactPerson.
     * @example
     * // Delete one ContactPerson
     * const ContactPerson = await prisma.contactPerson.delete({
     *   where: {
     *     // ... filter to delete one ContactPerson
     *   }
     * })
     * 
     */
    delete<T extends ContactPersonDeleteArgs>(args: SelectSubset<T, ContactPersonDeleteArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactPerson.
     * @param {ContactPersonUpdateArgs} args - Arguments to update one ContactPerson.
     * @example
     * // Update one ContactPerson
     * const contactPerson = await prisma.contactPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactPersonUpdateArgs>(args: SelectSubset<T, ContactPersonUpdateArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactPeople.
     * @param {ContactPersonDeleteManyArgs} args - Arguments to filter ContactPeople to delete.
     * @example
     * // Delete a few ContactPeople
     * const { count } = await prisma.contactPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactPersonDeleteManyArgs>(args?: SelectSubset<T, ContactPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactPersonUpdateManyArgs>(args: SelectSubset<T, ContactPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactPeople and returns the data updated in the database.
     * @param {ContactPersonUpdateManyAndReturnArgs} args - Arguments to update many ContactPeople.
     * @example
     * // Update many ContactPeople
     * const contactPerson = await prisma.contactPerson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactPeople and only return the `id`
     * const contactPersonWithIdOnly = await prisma.contactPerson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactPersonUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactPersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactPerson.
     * @param {ContactPersonUpsertArgs} args - Arguments to update or create a ContactPerson.
     * @example
     * // Update or create a ContactPerson
     * const contactPerson = await prisma.contactPerson.upsert({
     *   create: {
     *     // ... data to create a ContactPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactPerson we want to update
     *   }
     * })
     */
    upsert<T extends ContactPersonUpsertArgs>(args: SelectSubset<T, ContactPersonUpsertArgs<ExtArgs>>): Prisma__ContactPersonClient<$Result.GetResult<Prisma.$ContactPersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonCountArgs} args - Arguments to filter ContactPeople to count.
     * @example
     * // Count the number of ContactPeople
     * const count = await prisma.contactPerson.count({
     *   where: {
     *     // ... the filter for the ContactPeople we want to count
     *   }
     * })
    **/
    count<T extends ContactPersonCountArgs>(
      args?: Subset<T, ContactPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactPersonAggregateArgs>(args: Subset<T, ContactPersonAggregateArgs>): Prisma.PrismaPromise<GetContactPersonAggregateType<T>>

    /**
     * Group by ContactPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactPersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactPersonGroupByArgs['orderBy'] }
        : { orderBy?: ContactPersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactPerson model
   */
  readonly fields: ContactPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sanggar<T extends ContactPerson$sanggarArgs<ExtArgs> = {}>(args?: Subset<T, ContactPerson$sanggarArgs<ExtArgs>>): Prisma__SanggarTariClient<$Result.GetResult<Prisma.$SanggarTariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactPerson model
   */
  interface ContactPersonFieldRefs {
    readonly id: FieldRef<"ContactPerson", 'String'>
    readonly nama: FieldRef<"ContactPerson", 'String'>
    readonly nomor: FieldRef<"ContactPerson", 'String'>
    readonly email: FieldRef<"ContactPerson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactPerson findUnique
   */
  export type ContactPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findUniqueOrThrow
   */
  export type ContactPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson findFirst
   */
  export type ContactPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findFirstOrThrow
   */
  export type ContactPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPerson to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactPeople.
     */
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson findMany
   */
  export type ContactPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter, which ContactPeople to fetch.
     */
    where?: ContactPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactPeople to fetch.
     */
    orderBy?: ContactPersonOrderByWithRelationInput | ContactPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactPeople.
     */
    cursor?: ContactPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactPeople.
     */
    skip?: number
    distinct?: ContactPersonScalarFieldEnum | ContactPersonScalarFieldEnum[]
  }

  /**
   * ContactPerson create
   */
  export type ContactPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactPerson.
     */
    data: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
  }

  /**
   * ContactPerson createMany
   */
  export type ContactPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPerson createManyAndReturn
   */
  export type ContactPersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to create many ContactPeople.
     */
    data: ContactPersonCreateManyInput | ContactPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactPerson update
   */
  export type ContactPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactPerson.
     */
    data: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
    /**
     * Choose, which ContactPerson to update.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson updateMany
   */
  export type ContactPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
  }

  /**
   * ContactPerson updateManyAndReturn
   */
  export type ContactPersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * The data used to update ContactPeople.
     */
    data: XOR<ContactPersonUpdateManyMutationInput, ContactPersonUncheckedUpdateManyInput>
    /**
     * Filter which ContactPeople to update
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to update.
     */
    limit?: number
  }

  /**
   * ContactPerson upsert
   */
  export type ContactPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactPerson to update in case it exists.
     */
    where: ContactPersonWhereUniqueInput
    /**
     * In case the ContactPerson found by the `where` argument doesn't exist, create a new ContactPerson with this data.
     */
    create: XOR<ContactPersonCreateInput, ContactPersonUncheckedCreateInput>
    /**
     * In case the ContactPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactPersonUpdateInput, ContactPersonUncheckedUpdateInput>
  }

  /**
   * ContactPerson delete
   */
  export type ContactPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
    /**
     * Filter which ContactPerson to delete.
     */
    where: ContactPersonWhereUniqueInput
  }

  /**
   * ContactPerson deleteMany
   */
  export type ContactPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactPeople to delete
     */
    where?: ContactPersonWhereInput
    /**
     * Limit how many ContactPeople to delete.
     */
    limit?: number
  }

  /**
   * ContactPerson.sanggar
   */
  export type ContactPerson$sanggarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanggarTari
     */
    select?: SanggarTariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanggarTari
     */
    omit?: SanggarTariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanggarTariInclude<ExtArgs> | null
    where?: SanggarTariWhereInput
  }

  /**
   * ContactPerson without action
   */
  export type ContactPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactPerson
     */
    select?: ContactPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactPerson
     */
    omit?: ContactPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactPersonInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SanggarTariScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    tahunBerdiri: 'tahunBerdiri',
    lokasi: 'lokasi',
    deskripsi: 'deskripsi',
    foto: 'foto',
    contactPersonId: 'contactPersonId'
  };

  export type SanggarTariScalarFieldEnum = (typeof SanggarTariScalarFieldEnum)[keyof typeof SanggarTariScalarFieldEnum]


  export const ContactPersonScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nomor: 'nomor',
    email: 'email'
  };

  export type ContactPersonScalarFieldEnum = (typeof ContactPersonScalarFieldEnum)[keyof typeof ContactPersonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SanggarTariWhereInput = {
    AND?: SanggarTariWhereInput | SanggarTariWhereInput[]
    OR?: SanggarTariWhereInput[]
    NOT?: SanggarTariWhereInput | SanggarTariWhereInput[]
    id?: StringFilter<"SanggarTari"> | string
    nama?: StringFilter<"SanggarTari"> | string
    tahunBerdiri?: StringFilter<"SanggarTari"> | string
    lokasi?: StringFilter<"SanggarTari"> | string
    deskripsi?: StringNullableFilter<"SanggarTari"> | string | null
    foto?: StringNullableFilter<"SanggarTari"> | string | null
    contactPersonId?: StringNullableFilter<"SanggarTari"> | string | null
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
  }

  export type SanggarTariOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    tahunBerdiri?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    contactPersonId?: SortOrderInput | SortOrder
    contactPerson?: ContactPersonOrderByWithRelationInput
  }

  export type SanggarTariWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contactPersonId?: string
    AND?: SanggarTariWhereInput | SanggarTariWhereInput[]
    OR?: SanggarTariWhereInput[]
    NOT?: SanggarTariWhereInput | SanggarTariWhereInput[]
    nama?: StringFilter<"SanggarTari"> | string
    tahunBerdiri?: StringFilter<"SanggarTari"> | string
    lokasi?: StringFilter<"SanggarTari"> | string
    deskripsi?: StringNullableFilter<"SanggarTari"> | string | null
    foto?: StringNullableFilter<"SanggarTari"> | string | null
    contactPerson?: XOR<ContactPersonNullableScalarRelationFilter, ContactPersonWhereInput> | null
  }, "id" | "contactPersonId">

  export type SanggarTariOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    tahunBerdiri?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    contactPersonId?: SortOrderInput | SortOrder
    _count?: SanggarTariCountOrderByAggregateInput
    _max?: SanggarTariMaxOrderByAggregateInput
    _min?: SanggarTariMinOrderByAggregateInput
  }

  export type SanggarTariScalarWhereWithAggregatesInput = {
    AND?: SanggarTariScalarWhereWithAggregatesInput | SanggarTariScalarWhereWithAggregatesInput[]
    OR?: SanggarTariScalarWhereWithAggregatesInput[]
    NOT?: SanggarTariScalarWhereWithAggregatesInput | SanggarTariScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SanggarTari"> | string
    nama?: StringWithAggregatesFilter<"SanggarTari"> | string
    tahunBerdiri?: StringWithAggregatesFilter<"SanggarTari"> | string
    lokasi?: StringWithAggregatesFilter<"SanggarTari"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"SanggarTari"> | string | null
    foto?: StringNullableWithAggregatesFilter<"SanggarTari"> | string | null
    contactPersonId?: StringNullableWithAggregatesFilter<"SanggarTari"> | string | null
  }

  export type ContactPersonWhereInput = {
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    id?: StringFilter<"ContactPerson"> | string
    nama?: StringFilter<"ContactPerson"> | string
    nomor?: StringFilter<"ContactPerson"> | string
    email?: StringNullableFilter<"ContactPerson"> | string | null
    sanggar?: XOR<SanggarTariNullableScalarRelationFilter, SanggarTariWhereInput> | null
  }

  export type ContactPersonOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor?: SortOrder
    email?: SortOrderInput | SortOrder
    sanggar?: SanggarTariOrderByWithRelationInput
  }

  export type ContactPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactPersonWhereInput | ContactPersonWhereInput[]
    OR?: ContactPersonWhereInput[]
    NOT?: ContactPersonWhereInput | ContactPersonWhereInput[]
    nama?: StringFilter<"ContactPerson"> | string
    nomor?: StringFilter<"ContactPerson"> | string
    email?: StringNullableFilter<"ContactPerson"> | string | null
    sanggar?: XOR<SanggarTariNullableScalarRelationFilter, SanggarTariWhereInput> | null
  }, "id">

  export type ContactPersonOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor?: SortOrder
    email?: SortOrderInput | SortOrder
    _count?: ContactPersonCountOrderByAggregateInput
    _max?: ContactPersonMaxOrderByAggregateInput
    _min?: ContactPersonMinOrderByAggregateInput
  }

  export type ContactPersonScalarWhereWithAggregatesInput = {
    AND?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    OR?: ContactPersonScalarWhereWithAggregatesInput[]
    NOT?: ContactPersonScalarWhereWithAggregatesInput | ContactPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactPerson"> | string
    nama?: StringWithAggregatesFilter<"ContactPerson"> | string
    nomor?: StringWithAggregatesFilter<"ContactPerson"> | string
    email?: StringNullableWithAggregatesFilter<"ContactPerson"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanggarTariCreateInput = {
    id?: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi?: string | null
    foto?: string | null
    contactPerson?: ContactPersonCreateNestedOneWithoutSanggarInput
  }

  export type SanggarTariUncheckedCreateInput = {
    id?: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi?: string | null
    foto?: string | null
    contactPersonId?: string | null
  }

  export type SanggarTariUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: ContactPersonUpdateOneWithoutSanggarNestedInput
  }

  export type SanggarTariUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanggarTariCreateManyInput = {
    id?: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi?: string | null
    foto?: string | null
    contactPersonId?: string | null
  }

  export type SanggarTariUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanggarTariUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactPersonCreateInput = {
    id?: string
    nama: string
    nomor: string
    email?: string | null
    sanggar?: SanggarTariCreateNestedOneWithoutContactPersonInput
  }

  export type ContactPersonUncheckedCreateInput = {
    id?: string
    nama: string
    nomor: string
    email?: string | null
    sanggar?: SanggarTariUncheckedCreateNestedOneWithoutContactPersonInput
  }

  export type ContactPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sanggar?: SanggarTariUpdateOneWithoutContactPersonNestedInput
  }

  export type ContactPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sanggar?: SanggarTariUncheckedUpdateOneWithoutContactPersonNestedInput
  }

  export type ContactPersonCreateManyInput = {
    id?: string
    nama: string
    nomor: string
    email?: string | null
  }

  export type ContactPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContactPersonNullableScalarRelationFilter = {
    is?: ContactPersonWhereInput | null
    isNot?: ContactPersonWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SanggarTariCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tahunBerdiri?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    contactPersonId?: SortOrder
  }

  export type SanggarTariMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tahunBerdiri?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    contactPersonId?: SortOrder
  }

  export type SanggarTariMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tahunBerdiri?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
    foto?: SortOrder
    contactPersonId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SanggarTariNullableScalarRelationFilter = {
    is?: SanggarTariWhereInput | null
    isNot?: SanggarTariWhereInput | null
  }

  export type ContactPersonCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor?: SortOrder
    email?: SortOrder
  }

  export type ContactPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor?: SortOrder
    email?: SortOrder
  }

  export type ContactPersonMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor?: SortOrder
    email?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactPersonCreateNestedOneWithoutSanggarInput = {
    create?: XOR<ContactPersonCreateWithoutSanggarInput, ContactPersonUncheckedCreateWithoutSanggarInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutSanggarInput
    connect?: ContactPersonWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContactPersonUpdateOneWithoutSanggarNestedInput = {
    create?: XOR<ContactPersonCreateWithoutSanggarInput, ContactPersonUncheckedCreateWithoutSanggarInput>
    connectOrCreate?: ContactPersonCreateOrConnectWithoutSanggarInput
    upsert?: ContactPersonUpsertWithoutSanggarInput
    disconnect?: ContactPersonWhereInput | boolean
    delete?: ContactPersonWhereInput | boolean
    connect?: ContactPersonWhereUniqueInput
    update?: XOR<XOR<ContactPersonUpdateToOneWithWhereWithoutSanggarInput, ContactPersonUpdateWithoutSanggarInput>, ContactPersonUncheckedUpdateWithoutSanggarInput>
  }

  export type SanggarTariCreateNestedOneWithoutContactPersonInput = {
    create?: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: SanggarTariCreateOrConnectWithoutContactPersonInput
    connect?: SanggarTariWhereUniqueInput
  }

  export type SanggarTariUncheckedCreateNestedOneWithoutContactPersonInput = {
    create?: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: SanggarTariCreateOrConnectWithoutContactPersonInput
    connect?: SanggarTariWhereUniqueInput
  }

  export type SanggarTariUpdateOneWithoutContactPersonNestedInput = {
    create?: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: SanggarTariCreateOrConnectWithoutContactPersonInput
    upsert?: SanggarTariUpsertWithoutContactPersonInput
    disconnect?: SanggarTariWhereInput | boolean
    delete?: SanggarTariWhereInput | boolean
    connect?: SanggarTariWhereUniqueInput
    update?: XOR<XOR<SanggarTariUpdateToOneWithWhereWithoutContactPersonInput, SanggarTariUpdateWithoutContactPersonInput>, SanggarTariUncheckedUpdateWithoutContactPersonInput>
  }

  export type SanggarTariUncheckedUpdateOneWithoutContactPersonNestedInput = {
    create?: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
    connectOrCreate?: SanggarTariCreateOrConnectWithoutContactPersonInput
    upsert?: SanggarTariUpsertWithoutContactPersonInput
    disconnect?: SanggarTariWhereInput | boolean
    delete?: SanggarTariWhereInput | boolean
    connect?: SanggarTariWhereUniqueInput
    update?: XOR<XOR<SanggarTariUpdateToOneWithWhereWithoutContactPersonInput, SanggarTariUpdateWithoutContactPersonInput>, SanggarTariUncheckedUpdateWithoutContactPersonInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ContactPersonCreateWithoutSanggarInput = {
    id?: string
    nama: string
    nomor: string
    email?: string | null
  }

  export type ContactPersonUncheckedCreateWithoutSanggarInput = {
    id?: string
    nama: string
    nomor: string
    email?: string | null
  }

  export type ContactPersonCreateOrConnectWithoutSanggarInput = {
    where: ContactPersonWhereUniqueInput
    create: XOR<ContactPersonCreateWithoutSanggarInput, ContactPersonUncheckedCreateWithoutSanggarInput>
  }

  export type ContactPersonUpsertWithoutSanggarInput = {
    update: XOR<ContactPersonUpdateWithoutSanggarInput, ContactPersonUncheckedUpdateWithoutSanggarInput>
    create: XOR<ContactPersonCreateWithoutSanggarInput, ContactPersonUncheckedCreateWithoutSanggarInput>
    where?: ContactPersonWhereInput
  }

  export type ContactPersonUpdateToOneWithWhereWithoutSanggarInput = {
    where?: ContactPersonWhereInput
    data: XOR<ContactPersonUpdateWithoutSanggarInput, ContactPersonUncheckedUpdateWithoutSanggarInput>
  }

  export type ContactPersonUpdateWithoutSanggarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactPersonUncheckedUpdateWithoutSanggarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanggarTariCreateWithoutContactPersonInput = {
    id?: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi?: string | null
    foto?: string | null
  }

  export type SanggarTariUncheckedCreateWithoutContactPersonInput = {
    id?: string
    nama: string
    tahunBerdiri: string
    lokasi: string
    deskripsi?: string | null
    foto?: string | null
  }

  export type SanggarTariCreateOrConnectWithoutContactPersonInput = {
    where: SanggarTariWhereUniqueInput
    create: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
  }

  export type SanggarTariUpsertWithoutContactPersonInput = {
    update: XOR<SanggarTariUpdateWithoutContactPersonInput, SanggarTariUncheckedUpdateWithoutContactPersonInput>
    create: XOR<SanggarTariCreateWithoutContactPersonInput, SanggarTariUncheckedCreateWithoutContactPersonInput>
    where?: SanggarTariWhereInput
  }

  export type SanggarTariUpdateToOneWithWhereWithoutContactPersonInput = {
    where?: SanggarTariWhereInput
    data: XOR<SanggarTariUpdateWithoutContactPersonInput, SanggarTariUncheckedUpdateWithoutContactPersonInput>
  }

  export type SanggarTariUpdateWithoutContactPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanggarTariUncheckedUpdateWithoutContactPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    tahunBerdiri?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}