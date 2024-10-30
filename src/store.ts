import { atom } from "nanostores";

export type ArtView = "gallery" | "emotes";

export const currentView = atom<ArtView>("gallery");
