// export class ObjClass {
//   constructor(
//     public  blur: number,
//     public brightness: number,
//     public contrast: number,
//     public grayscale: number,
//     public invert: number,
//     public opacity: number,
//     public saturate: number,
//     public sepia: number
//   ) {
//   }
// }
export class ObjClass {
  constructor(
    public  min: number,
    public max: number,
    public value: number,
    public sign: string,
    public step: number
  ) {
  }
}
