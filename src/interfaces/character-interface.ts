export interface ICharacter {
  name?: string;
  gender?: string;
  race?: string;
  origin?: string;
  traits?: string[];
  physics?: {
    strength?: number;
    intelligence?: number;
    willpower?: number;
    cunning?: number;
    agility?: number;
    faith?: number;
  };
}
