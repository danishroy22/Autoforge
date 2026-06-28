export interface WinnerEntry {
  id: "winner" | "first-runner-up" | "second-runner-up";
  podiumTitle: string;
  medal: string;
  teamName: string;
  projectTitle: string;
  members: string[];
}
