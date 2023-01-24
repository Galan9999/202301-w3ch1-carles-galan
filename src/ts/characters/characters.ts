import { Advisor } from "../Advisor/Advisor";
import { Fighter } from "../Fighter/Fighter";
import { King } from "../King/King";
import { Squire } from "../Squire/Squire";
import {
  joffreyData,
  jaimeData,
  daeneryseData,
  tyrionData,
  bronnData,
} from "./charactersData";

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
