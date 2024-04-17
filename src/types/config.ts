export interface ISilhouettesConfig {
  type: ISilhouettesTypes
  size: SILHOUETTES_SIZE
  gender: GENDER
}

export type ISilhouettesTypes = 'body' | 'product';

export enum SILHOUETTES_SIZE {
  SLIM = 'slim',
  AVERAGE = 'average',
  HEAVY = 'heavy',
}

export enum GENDER {
  FEMALE = "female",
  MALE = "male",
  UNISEX = "unisex",
}