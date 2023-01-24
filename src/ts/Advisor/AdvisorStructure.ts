import { type Character } from "../Character/Character";
import { type CharacterStructure } from "../Character/CharacterStructure";
import { type Fighter } from "../Fighter/Fighter";

export type AdvisorStructre = {
  advises: Fighter;
} & CharacterStructure;
