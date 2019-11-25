export class Obj {
  constructor(
    public  blur: ObjClass,
    public brightness: ObjClass,
    public contrast: ObjClass,
    public grayscale: ObjClass,
    public invert: ObjClass,
    public opacity: ObjClass,
    public saturate: ObjClass,
    public sepia: ObjClass
  ) {
  }
}
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
